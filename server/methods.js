// Methods related to links

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  links(title, url) {
    console.log("line 8: title", title);

    check(url, String);
    check(title, String);
    return title;
  }
});
