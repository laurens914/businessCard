(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('#home').on('click', function(){
      location.reload();
      // $('section.about-me').hide();
    });
  };
  module.homeController = homeController;
})(window);
