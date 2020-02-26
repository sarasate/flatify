Inputs = new Mongo.Collection("");
Inputs.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});
