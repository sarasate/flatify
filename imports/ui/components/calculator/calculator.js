import "./calculator.html";

Template.calculator.onCreated(function() {
  this.autorun(() => {
    this.subscribe("templates.all");
  });
});

Template.calculator.helpers({});

Template.calculator.events({});
