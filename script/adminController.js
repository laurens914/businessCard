(function(module) {
  var adminfController = {};
  adminController.admin = function() {
    repos.requestRepos(repoView.admin);
  };
  module.adminController = adminController;
})(window);
