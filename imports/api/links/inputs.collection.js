export const Inputs = new Mongo.Collection("inputs");
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
