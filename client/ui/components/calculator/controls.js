import { categories } from "../../../../imports/default";

Template.controls.onCreated(function() {});

Template.controls.helpers({
  categories: function() {
    return categories;
  }
});

Template.controls.events({});
