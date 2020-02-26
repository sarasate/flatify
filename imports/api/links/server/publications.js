// All links-related publications

import { Meteor } from "meteor/meteor";
import { Templates } from "../templates.collection";
import { Results } from "../results.collection.js";
import { Inputs } from "../inputs.collection";

Meteor.publish("templates.all", function() {
  return Templates.find();
});

Meteor.publish("results.all", function() {
  return Results.find();
});

Meteor.publish("inputs.all", function() {
  return Inputs.find();
});
