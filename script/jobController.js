(function(module) {
  var jobController = {};
  jobController.index = function() {
    // $('#jobSelector').on('click', function() {
      Jobs.fetchAll();
      $('section.about-me').fadeOut();
      $('#jobShow').fadeIn();
    // });
  };
  module.jobController = jobController;
})(window);
