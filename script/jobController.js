(function(module) {
  var jobController = {};
  jobController.index = function() {
    Jobs.fetchAll();
    $('section.about-me').fadeOut();
    $('#jobShow').fadeIn();
    $('#gitHubProjects').fadeOut();
  };
  module.jobController = jobController;
})(window);
