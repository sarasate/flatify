Template.calculator.onRendered(function() {
  const self = this;
  setTimeout(function() {
    self.find(".calculator-container").classList.add("show");
  }, 100);
});
