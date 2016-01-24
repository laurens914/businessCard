(function(module) {
  var repoView = {};
  var ui = function() { //this function is called to clear out the ul located in the section with the class gitHubProjects and it clears it out whenever this is called, this is used so that when you call the repoView.index the lists do not stack on top of each other and repeat the data.
    var $about = $('#gitHubProjects');
    $about.find('ul').empty();
  };
  var render = function(repos) { //this function is what we call to create the actual list of data we are pulling in the HTML, this inserts an li with the repo name the has a link from the repoURL.
    return $('<li>')
    .html('<a href="' + repos.html_url + '">' + repos.full_name + '</a>');
  };
  repoView.index = function(){//this function is actually what calls the other functions on this page, so they are not run until this function is called, then it will run ui() to clear out any items in the ul, and then it will take the repos.all array and run through each item, on each item in that array it will run the render function which will append the name with the url on to the htlm page in the section gitHubProjects
    ui();//calling ui function
    $('#gitHubProjects ul').append( //appending the li that is created in the render fucntion to the html in the designated section
      repos.all.map(render) //creates a new array from all the information in the repo array and runs the render fucntion on them, which is what puts them into an li
  );};
  module.repoView = repoView;
})(window);//adds all of this to the window.
