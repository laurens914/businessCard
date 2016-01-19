(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    // $('#about').on('click', function(e){
      // e.preventDefault();
      $('#jobShow').fadeOut();
      $('section.about-me').fadeIn();
    // });
    // $('#about').click();
  };
  module.aboutController = aboutController;
})(window);
