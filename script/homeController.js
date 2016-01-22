(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('.adminViewOnly').hide();
    $('#home').on('click', function(){
      location.reload();
    });
  };
  module.homeController = homeController;
})(window);
