(function(module) {

  function Quarterbacks (qbs) {
    this.quarterback = qbs.quarterback;
    this.teamName = qbs.teamName;
    this.cityName = qbs.cityName;
    this.body = qbs.body;
  }

  Quarterbacks.all = [];

  Quarterbacks.prototype.toHtml = function() {
    var template = Handlebars.compile($('#dummy-template').text());
    this.body = marked(this.body);
    return template(this);
  };

  Quarterbacks.loadAll = function(qbData) {
    qbData.forEach(function(ele) {
      Quarterbacks.all.push(new Quarterbacks(ele));
    });
    Quarterbacks.all = qbData.map(function(ele) {
      return new Quarterbacks(ele);
    });
  };
  Quarterbacks.fetchAll = function () {
    if (localStorage.qbData) {
      Quarterbacks.loadAll(JSON.parse(localStorage.qbData));
      quarterbackView.initAdminPage();
    } else {
      $.getJSON('/data/dummyData.json', function(qbData) {
        Quarterbacks.loadAll(qbData);
        localStorage.qbData = JSON.stringify(qbData);
        quarterbackView.initAdminPage();
      });
    }
  };

  Quarterbacks.allQuarterbacks = function() {
    var quarterbackNames = [];
    return Quarterbacks.all.map(function(name){
      qbName = name.quarterback;
      console.log(qbName);
      return qbName;
    }).reduce(function (prev, cur){
      if(prev.indexOf(cur)< 0){ //returns -1 if false.
        prev.push(cur);
      }
      return prev;
    }, []);
  };

  Quarterbacks.allTeamNames = function() {
    var qbTeamNames = [];
    Quarterbacks.all.map(function(qbTName){
      qbTeamName = qbTName.teamName;
      console.log(qbTeamName);
      return qbTeamName;
    }).reduce(function (prev, cur){
      if(prev.indexOf(cur)< 0){ //returns -1 if false.
        prev.push(cur);
      }
      return prev;
    }, []);
    return Quarterbacks.allQuarterbacks().map(function(qbName){
      return {
        quarterback: qbName,
        teamName:
        Quarterbacks.all
        .filter(function(index) {
          return index.qbTeamName === qbName;
        })
      };
    });
  };
  module.Quarterbacks = Quarterbacks;
})(window);
