export const Results = new Mongo.Collection("results");
Results.deny({
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
