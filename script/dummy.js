(function(module) {//accessable through /admin page

  function Quarterbacks (qbs) {
    Object.keys(qbs).forEach(function (a,index,keys){
      this[a]=qbs[a];
    },this);
  }

  Quarterbacks.all = [];

  Quarterbacks.prototype.toHtml = function() {
    var template = Handlebars.compile($('#dummy-template').text());
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
      quarterbackView.initIndexPage();
    } else {
      $.getJSON('/data/dummyData.json', function(qbData) {
        Quarterbacks.loadAll(qbData);
        localStorage.qbData = JSON.stringify(qbData);
        quarterbackView.initIndexPage();
      });
    }
  };

  Quarterbacks.allInfo = function() {
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
})(window);
