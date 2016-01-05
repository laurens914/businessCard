
function Portfolio (port){
  this.title = port.title;
  this.authors = port.authors;
  this.url = port.url;
  this.datePublished = port.datePublished;
}

Portfolio.prototype.toHtml = function(){
  var $newPortfolio = $('article.template').clone();

  $newPortfolio.data('h3', this.title);
  $newPortfolio.data('authors', this.authors);
  $newPortfolio.data('url', this.url);
  $newPortfolio.find('time').html('about ' + parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000)+ ' days ago');

  $newPortfolio.append('<hr>');
  return $newPortfolio;
};

portData.sort(function(a,b){
  return (new Date (b.datePublished))- (new Date(a.datePublished));
});

function Jobs (jobInfo){
  this.jobTitle = jobInfo.jobTitle;
  this.company = jobInfo.company;
  this.dateStarted = jobInfo.dateStarted;
  this.dateLeft = jobInfo.dateLeft;
  this.jobDescription = jobInfo.jobDescription;
}

Jobs.prototype.toHtml = function (){
  var $newJobs = $('article.template').clone();

  $newJobs.data('h32', this.jobTitle);
  $newJobs.data('company', this.company);
  $newJobs.data('date started', this.dateStarted);
  $newJobs.data('date left', this.dateLeft);
  $newJobs.data('job description', this.jobDescription);

  $newJobs.append('<hr>');
  return $newJobs;
};
