import { categories } from "../../../../imports/default";

Template.controls.onCreated(function() {
  Categories.remove({});
  categories.forEach(category => {
    Categories.insert(category);
  });
});
// const calculationState = new ReactiveVar({});

Template.question.helpers({
  displayValue: function() {
    return this.selectedValue
      ? {
          operator: this.selectedValue.operator,
          value:
            this.type === "number"
              ? this.selectedValue.expression * this.value
              : this.selectedValue.expression,
          class:
            this.selectedValue.operator === "+" ||
            this.selectedValue.operator === "x"
              ? "added-value"
              : "substract-value",
          curr:
            this.selectedValue.operator === "+" ||
            this.selectedValue.operator === "-"
              ? "eur"
              : ""
        }
      : this.options
      ? {
          operator: this.options[this.value].modifier.operator,
          value: this.options[this.value].modifier.expression,
          class:
            this.options[this.value].modifier.operator === "+" ||
            this.options[this.value].modifier.operator === "x"
              ? "added-value"
              : "substract-value",
          curr:
            this.options[this.value].modifier.operator === "+" ||
            this.options[this.value].modifier.operator === "-"
              ? "eur"
              : ""
        }
      : {
          operator: "+",
          value: this.value,
          class: "added-value"
        };
  },
  displaySelected: function() {
    if (!this.options) return;
    return this.options[this.value].value;
  }
});

Template.controls.helpers({
  categories: function() {
    return Categories.find().fetch();
  },
  displayQuestions: function() {
    return this.activated && this.questions;
  },

  result: function() {
    // return 0;
    const categories = Categories.find().fetch();

    const activatedQuestions = categories.reduce((a, b) => {
      return a.concat(!b.activated ? { selectedValue: 0 } : b.questions);
    }, []);

    const values = activatedQuestions.map(elem => {
      let res = elem.selectedValue
        ? elem.selectedValue
        : elem.options
        ? elem.options[elem.value].modifier
        : { expression: elem.selectedValue };

      if (elem.type === "number")
        res.expression = elem.value * elem.modifier.expression;
      return { question: elem.label, ...res };
    });

    const sorted = values.sort((a, b) => a.operator - b.operator);
    const summary = sorted
      .filter(elem => !!elem.expression)
      .map(elem => {
        return `${elem.question} ${elem.operator || "+"} ${elem.expression}`;
      });
    const result = sorted.reduce((a, b) => {
      const calc =
        !b.operator || b.operator === "+"
          ? a + b.expression
          : b.operator === "-"
          ? a - b.expression
          : b.operator === "/"
          ? a / b.expression
          : a * b.expression;
      return calc;
    }, 35);
    return { summary, result: Math.max(parseInt(result, 10), 0) };
  }
});

Template.controls.events({
  "change .field"(event) {
    event.preventDefault();
    const question = this;

    const { type } = question;
    const userValue =
      type === "checkbox" ? +event.target.checked : +event.target.value;
    const selectedValue =
      type === "checkbox"
        ? question.options[+event.target.checked].modifier
        : question.options
        ? question.options[userValue].modifier
        : !!event.target.value && question.modifier;

    // calculationState.set({
    //   ...calculationState.get(),
    //   [question._id]: selectedValue
    // });

    Categories.update(
      { "questions._id": question._id },
      {
        $set: {
          "questions.$.value": userValue,
          "questions.$.selectedValue": selectedValue
        }
      }
    );
  },
  "submit form"(event) {
    event.preventDefault();
    return event.keyCode !== "13";
  },
  "click .switch-outer"(event) {
    const category = this.data;

    Categories.update(
      { _id: category._id },
      { $set: { activated: !category.activated } }
    );
  }
});

Template.question.events({
  "submit .field"(event) {
    return false;
  }
});


Template.heading.events({
  'click .logout-link': function () {
    Meteor.logout();
  }
})