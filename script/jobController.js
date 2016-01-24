(function(module) {
  var jobController = {};
  jobController.index = function() { //when this function is called (on routes.js) it runs the Jobs.fetchAll function, and shows that data, and hides all the other data from the page. 
    Jobs.fetchAll();
    $('section.about-me').fadeOut();
    $('#jobShow').fadeIn();
    $('#gitHubProjects').fadeOut();
  };
  module.jobController = jobController;
})(window); //adds jobController object to the window
