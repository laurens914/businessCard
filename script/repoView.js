(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#gitHubProjects');
    $about.find('ul').empty();
  };

  var render = function(repos) {
    var aboutTemplate = Handlebars.compile($('#about-template').text());
    return aboutTemplate(repos);
  };

  repoView.index = function(){
    ui();
    $('#gitHubProjects ul').append(
      repos.with('stargazers_count').map(render)
  );};

  module.repoView = repoView;
})(window);
