(function(module) {//accessable through /admin page

  function Quarterbacks (qbs) { //again using Object.keys to create the object from that array of data.
    Object.keys(qbs).forEach(function (a,index,keys){
      this[a]=qbs[a];
    },this);
  }

  Quarterbacks.all = [];

  Quarterbacks.loadAll = function(qbData) {
    qbData.forEach(function(ele) {
      Quarterbacks.all.push(new Quarterbacks(ele)); //pushes the data into the Quarterbacks.all array
    });
    Quarterbacks.all = qbData.map(function(ele) {
      return new Quarterbacks(ele); 
    });
  };
  Quarterbacks.fetchAll = function () { //functions exactly like the fetchAll for jobData, checks first for local storage for the dummyData, if it is there, it will load all the data and return the new objects, where it can then filter through them and return the designated data in the allInfo function. once it has loaded the data it will run the quarterback.initIndexPage function(found in the jobView.js)
    if (localStorage.qbData) {
      Quarterbacks.loadAll(JSON.parse(localStorage.qbData));
      quarterbackView.initIndexPage();
    } else {
      $.getJSON('/data/dummyData.json', function(qbData) {
        Quarterbacks.loadAll(qbData);
        localStorage.qbData = JSON.stringify(qbData);
        quarterbackView.initIndexPage();
      });
    }
  };

  Quarterbacks.allInfo = function() {//this uses the mapping fucntion to build a new array with the quarterback data and then i am building new arrays that have just the information that i want displayed on the page, since there is more information in the array than is to be displayed in the template. it builds that information and then pushes it into the Handlebars template, so all we see are the quarterback and teamName from the object in the array.
    var qbTeamNames = [];
    var quarterbackNames=[];
    return Quarterbacks.all.map(function(qbInfo){
      qbName= qbInfo.quarterback;
      qbTeamName = qbInfo.teamName;
      return {
        quarterback: qbName,
        teamName: qbTeamName
      };
    });
  };
  module.Quarterbacks = Quarterbacks;
})(window); //adds Quarterbacks to the window
