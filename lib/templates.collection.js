Templates = new Mongo.Collection("templates");
Templates.deny({
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
