(function(module) {
  var adminController = {};
  adminController.index = function() {
    Quarterbacks.fetchAll();
    $('.adminViewOnly').fadeIn();
    $('#jobShow' , '#gitHubProjects' , '#about-me').fadeOut();
  };
  module.adminController = adminController;
})(window);
