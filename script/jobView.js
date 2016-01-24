var jobView = {};
// $('section.about-me').hide(); //on load hides all data
$('#gitHubProjects').hide();
$('#hamburger').on('click', function(){ //adds a click event to slide toggle on the hambuger image for when the screen is smaller (mobile, desingated with the media query in the CSS file) it will be a drop down menu for the user to click on and then see the navbar.
  $('.navbar ul').slideToggle();
});


jobView.initIndexPage = function() { //goes through the Jobs array and for each item appends it to the html in the section with the id jobShow
  Jobs.all.forEach(function(a){
    $('#jobShow').append(a.toHtml());
  });
};

var quarterbackView = {};

quarterbackView.initIndexPage = function() { //connects to the index page, targets the handlebars template that is set up in the html page, then it runs the Quarterbacks.allInfo function and for each item in the array and appends the data that is returned from that fucntion to the template and the section in the HTML.
  var template = Handlebars.compile($('#dummy-template').text());
  Quarterbacks.allInfo().forEach(function(player) {
    $('.dummyDataView').append(template(player));
  });
};
