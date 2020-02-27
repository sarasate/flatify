import { categories } from "../../../../imports/default";

Template.controls.onCreated(function() {
  categories.forEach(category => {
    Categories.insert(category);
  });
});

Template.controls.helpers({
  categories: function() {
    return Categories.find().fetch();
  },
  displayQuestions: function() {
    return this.activated && this.questions;
  },
  updateValue: function(category, question, value) {
    const cat = Categories.find({ label: category }).fetch();
    const quest = cat.questions.find(q => q === question);
    quest.value = newValue;
  },
  result: function() {
    const categories = Categories.find().fetch();

    const result = categories
      .reduce((a, b) => {
        return a
          .concat(b.activated && b.questions)
          .map(elem => Number(elem.value));
      }, [])
      .reduce((a, b) => a + b, 0);
    return Number(result);
  }
});

Template.controls.events({
  "change .field"(event) {
    const question = this;

    const { type, modifier } = question;
    const { target, operator, expression } = modifier;

    const newValue =
      type === "checkbox" ? event.target.checked : event.target.value;

    console.log(modifier, newValue);

    Categories.update(
      { "questions.id": question.id },
      { $set: { "questions.$.value": event.target.value } }
    ); //  ? {...q, value = event.target.value} : q
  }
});

Template.controls.events({});
