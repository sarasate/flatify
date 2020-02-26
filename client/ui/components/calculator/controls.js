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
  }
});

Template.controls.events({});
