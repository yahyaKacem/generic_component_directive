//########################################################################
//###################START Logger#########################################
app.factory('Logger', ['$document', function($document){
  var log = function(text){
    Logger.lastLog = text;
    Logger.logList.push(text);
    if(console && console.log){
      console.log(text);
    }
//    Vanilla JS version
    var logEl = $document[0].getElementById('log');
    if(logEl){
       logEl.innerHTML += '<li>' + text + '</li>';
    }
  };
  var Logger = {
    logList: [],
    lastLog: "",
    log: log
  };
  return Logger;
}]);
//###################END Logger###########################################
//########################################################################
