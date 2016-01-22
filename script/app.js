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
