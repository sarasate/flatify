// All links-related publications

import { Meteor } from "meteor/meteor";

Meteor.publish("templates.all", function() {
  console.log("line 5: Meteor.userId", Meteor.userId());

  return Templates.find({ userId: Meteor.userId() });
});

Meteor.publish("results.all", function() {
  return Results.find();
});

Meteor.publish("inputs.all", function() {
  return Inputs.find();
});
