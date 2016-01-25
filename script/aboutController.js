(function(module) {
  var aboutController = {};
  aboutController.index = function() { //this function is being called in routes.js, when this is called, it fades in the about-me section (called by the id) and shows the gitHubProjects id section and fades out all the other html content
    $('#jobShow').fadeOut();
    $('.adminViewOnly').hide();
    $('#about-me').fadeIn();
    $('#gitHubProjects').fadeIn();
    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);//adds the object to the window
