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
  result: function() {
    const categories = Categories.find().fetch();

    // const result = categories.reduce((acc, value)=>);

    return 0;
  }
});

Template.controls.events({});
