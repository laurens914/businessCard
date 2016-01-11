
var careers = [];

function Jobs (jobHistory){
  this.jobTitle = jobHistory.jobTitle;
  this.company = jobHistory.company;
  this.dateStarted = jobHistory.dateStarted;
  this.dateLeft = jobHistory.dateLeft;
  this.jobDescription = jobHistory.jobDescription;
}

Jobs.prototype.toHtml = function() {
  var jobTemplate = $('#jobPosting').html();
  var compiledTemplate = Handlebars.compile(jobTemplate);
  return compiledTemplate(this);
};


jobData.sort(function(a,b){
  return (new Date (b.dateLeft))- (new Date(a.dateLeft));
});
jobData.forEach(function(ele) {
  careers.push(new Jobs(ele));
});

careers.forEach(function(a){
  $('#jobShow').append(a.toHtml())
});


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


// also to be added when i have the data to fill this in.
// var port = [];
//
// function Portfolio (port){
//   this.title = port.title;
//   this.authors = port.authors;
//   this.url = port.url;
//   this.datePublished = port.datePublished;
// }
//
// Portfolio.prototype.toHtml = function(){
//   var $newPortfolio = $('article.template').clone();
//
//   $newPortfolio.find('h3').text(this.title);
//   $newPortfolio.data('authors', this.authors);
//   $newPortfolio.data('url', this.url);
//   $newPortfolio.find('time').html('about ' + parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000)+ ' days ago');
//
//   $newPortfolio.append('<hr>');
//   return $newPortfolio;
// };
//
// portData.sort(function(a,b){
//   return (new Date (b.datePublished))- (new Date(a.datePublished));
// });
//
// portData.forEach(function(ele) {
//   port.push(new Portfolio(ele));
// });
//
// port.forEach(function(a){
//   $('#portfolio').append(a.toHtml())
// });
