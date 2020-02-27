import { categories } from "../../../../imports/default";

Template.controls.onCreated(function() {
  Categories.remove({});
  categories.forEach(category => {
    Categories.insert(category);
  });
});
// const calculationState = new ReactiveVar({});

Template.controls.helpers({
  categories: function() {
    return Categories.find().fetch();
  },
  displayQuestions: function() {
    return this.activated && this.questions;
  },

  displaySelected: function() {
    if (!this.options) return;
    return this.options[this.value].value;
  },

  result: function() {
    const categories = Categories.find().fetch();
    const result = categories
      .reduce((a, b) => {
        return a.concat(b.activated && b.questions).map(elem =>
          elem.selectedValue
            ? elem.selectedValue
            : elem.options
            ? elem.options[elem.value].modifier
            : // : elem.style === 'checkbox' ?
              elem.value
        );
      }, [])
      .sort((a, b) => a.operator - b.operator)
      .reduce((a, b) => a + b.expression || b, 0);
    return result;
  }
});

Template.controls.events({
  "change .field"(event) {
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
  "click .switch-outer"(event) {
    const category = this.data;

    Categories.update(
      { _id: category._id },
      { $set: { activated: !category.activated } }
    );
  }
});
