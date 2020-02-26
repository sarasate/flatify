// Methods related to links

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "input.insert"(title, value) {
    check(url, String);
    check(title, String);
    return title;
  }
});
