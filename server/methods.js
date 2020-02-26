// Methods related to links

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "result.insert"(data) {
    check(url, String);
    check(title, String);
    const resultId = Results.insert({ userId: Meteor.userId(), ...data });
    return resultId;
  }
});
