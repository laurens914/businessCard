Jobs.all = [];

function Jobs (jobHistory){
  Object.keys(jobHistory).forEach(function (a,index,keys){
    this[a]=jobHistory[a];
  },this);
}

Jobs.prototype.toHtml = function() {
  var jobTemplate = $('#jobPosting').html();
  var compiledTemplate = Handlebars.compile(jobTemplate);
  return compiledTemplate(this);
};

Jobs.loadAll = function(jobData) {
  jobData.forEach(function(ele) {
    Jobs.all.push(new Jobs(ele));
  });
};

Jobs.fetchAll = function() {
  if (localStorage.jobData) {
    Jobs.loadAll(JSON.parse(localStorage.jobData));
    jobView.initIndexPage();
  } else {
    $.getJSON('/data/jobInfo.json').done(function(jobData){
      Jobs.loadAll(jobData);
      localStorage.jobData = JSON.stringify(jobData);
      jobView.initIndexPage();
    });
  }
};


//









// jobData.sort(function(a,b){
//   return (new Date (b.dateLeft))- (new Date(a.dateLeft));
// });
// jobData.forEach(function(ele) {
//   careers.push(new Jobs(ele));
// });
//
// careers.forEach(function(a){
//   $('#jobShow').append(a.toHtml())
// });
//
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
