(function(module) {
  var homeController = {};
  homeController.index = function() { //makes sure to hide the admin only information, adds an on click event and then reloads the page to reset from whatever the user clicked before.
    $('.adminViewOnly').hide();
    $('#home').on('click', function(){
      location.reload();
    });
  };
  module.homeController = homeController;
})(window);
