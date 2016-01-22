var jobView = {};
$('section.about-me').hide();
$('#gitHubProjects').hide();
$('#hamburger').on('click', function(){
  $('.navbar ul').slideToggle();
});


jobView.initIndexPage = function() {
  Jobs.all.forEach(function(a){
    $('#jobShow').append(a.toHtml());
  });
};

var quarterbackView = {};

quarterbackView.initIndexPage = function() {
  var template = Handlebars.compile($('#dummy-template').text());// = ...?
  Quarterbacks.allInfo().forEach(function(player) {
    $('.dummyDataView').append(template(player));
  });
};
