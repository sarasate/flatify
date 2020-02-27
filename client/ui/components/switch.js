Template.switch.events({
  'click .switch-outer': function(event) {
    event.target.classList.toggle('on');
  },
  'click .switch-label': function(event, template) {
    template.find('.switch-outer').classList.toggle('on');
  }
});
