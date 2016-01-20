(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    var qs = '?per_page=100&sort=updated';

    $.ajax({
      url: 'https://api.github.com/users/laurens914/repos' + qs,
      type: 'GET',
      success: function(data, message, xhr){
        repos.all = data;
      }
    })
    .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
