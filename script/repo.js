(function(module) {
  var repos = {}; //creates an empty objects
  repos.all = []; //creates an empty array
  repos.requestRepos = function(callback) { //this function is an AJAX call that sends a HTTP GET request to the server, it sees the URL you are making the request to and uses the GITHUB_TOKEN that we added to the .bash_profile, this is the key we need since we are accessing the GitHub API and you need this key to access the information, this authenticates access to my github repo and sends a response back (triggering .done), which then calls the callback function to pull out the data and sets it equal to the repos.all array.
    $.get(
    '/github/users/laurens914/repos', function(data){//callback function
      repos.all = data;
    })
    .done(callback);//ensures we dont do anything until it is done loading all the data it will. we now have usable javascript objects, not just JSON data.
  };
  repos.with = function(attr) { //this fucntion allows you to filter through the repos.all array that is created and filter it by a specific attribute, this is all called in the repoView.index function, i was using the attribute of stargazer_count, but in the end changed repoView.index to just show all repos because i have so few, so decided for now to show them all. so currently this filter is not being used.
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
