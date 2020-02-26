// All links-related publications

import { Meteor } from "meteor/meteor";

Meteor.publish("templates.all", function() {
  return Templates.find();
});

Meteor.publish("results.all", function() {
  return Results.find();
});

Meteor.publish("inputs.all", function() {
  return Inputs.find();
});
