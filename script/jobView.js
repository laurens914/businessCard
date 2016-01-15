// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var jobView = {};


$('#jobSelector').on('click', function() {
    $('section.about-me').fadeOut();
    $('section.jobs').fadeIn();
});

$('#about').on('click', function(){
  $('section.jobs').fadeOut();
  $('section.about-me').fadeIn();
});

$('#home').on('click', function(){
  location.reload();
})

$('#hamburger').on('click', function(){
  $('.navbar ul').slideToggle();
})


jobView.initIndexPage = function() {
  Jobs.all.forEach(function(a){
    $('#jobShow').append(a.toHtml());
  });
};

var quarterbackView = {};

quarterbackView.initAdminPage = function() {
  var template = Handlebars.compile($('#dummy-template').text());// = ...?
  Quarterbacks.allTeamNames().forEach(function(player) {
    $('.dummyDataView').append(template(player));
  });
};
