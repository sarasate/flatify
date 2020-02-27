Template.calculator.onRendered(function() {
  const self = this;
  setTimeout(function() {
    self.find(".calculator-container").classList.add("show");
  }, 100);
});

Template.question.onRendered(function() {
  const self = this;
  setTimeout(function() {
    self.find(".field").classList.add("show");
  }, 100);
});
