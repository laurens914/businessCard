(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('#jobShow').fadeOut();
    $('.adminViewOnly').hide();
    $('#about-me').fadeIn();
    $('#gitHubProjects').fadeIn();
    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
