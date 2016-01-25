Jobs.all = [];

function Jobs (jobHistory){//using object.keys here cuts down writting out each key and value for the object and it goes through the array of informtion and pulls them out, creating the object looking at each item and seeing the index and the values and uses them to build the Jobs object.
  Object.keys(jobHistory).forEach(function (a,index,keys){
    this[a]=jobHistory[a];
  },this);
}

Jobs.prototype.toHtml = function() { //this targets the handlebars template that is on the html page. it then retuns the data to the html page in the job posting template.
  var jobTemplate = $('#jobPosting').html();
  var compiledTemplate = Handlebars.compile(jobTemplate);
  return compiledTemplate(this);
};

Jobs.loadAll = function(jobData) {
  jobData.forEach(function(ele) {
    Jobs.all.push(new Jobs(ele));
  });
};

Jobs.fetchAll = function() { //fetch all will do one of two things, first it checks local storage to see if the jobData is there, if it is, it will run the loadAll function, above, which will create a new Jobs object with the data it is parsing from the JSON file and then running jobView.initIndexPage (which is on the jobView.js file) if there is nothing in local storage, then it will get the data from the JSON file, once that is done, it will run the loadAll function and save the data into local storage, and run the initIndexPage function.
  if (localStorage.jobData) {
    Jobs.loadAll(JSON.parse(localStorage.jobData));
    jobView.initIndexPage();
  } else {
    $.getJSON('/data/jobInfo.json').done(function(jobData){//AJAX Get request that specifies to the server that we are going to be looking at JSON file meaning if it gets back anything but a json file it will not move on to the callback function, it then specifies the URL where the request is going.
      Jobs.loadAll(jobData);
      localStorage.jobData = JSON.stringify(jobData);
      jobView.initIndexPage();
    });
  }
};
