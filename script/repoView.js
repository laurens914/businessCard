(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#gitHubProjects');
    $about.find('ul').empty();
  };

  var render = function(repos) {
    return $('<li>')
    .html('<a href="' + repos.html_url + '">' + repos.full_name + '</a>');
  };

  repoView.index = function(){
    ui();
    $('#gitHubProjects ul').append(
      repos.all.map(render)
  );};

  module.repoView = repoView;
})(window);
