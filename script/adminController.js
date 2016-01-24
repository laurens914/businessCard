(function(module) {
  var adminController = {};
  adminController.index = function() { //controls the admin page route (from routes.js) runs the fetchAll function, shows only the data from the section id adminviewonly and hides all other data. 
    Quarterbacks.fetchAll();
    $('.adminViewOnly').fadeIn();
    $('#jobShow' , '#gitHubProjects' , '#about-me').fadeOut();
  };
  module.adminController = adminController;
})(window);
