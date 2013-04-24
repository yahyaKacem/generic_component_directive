//########################################################################
//###################START MainCtrl#######################################
controllers.MainCtrl = function($scope, Slides, Items, Logger) {
  var log = Logger.log;
  Slides.then(function(data){
    $scope.slides = data;
  });
  Items.then(function(data){
    $scope.items = data;
  });
  $scope.logit = function(){
    log("azerty");
  };
  $scope.title = "Title of container";
  $scope.body  = "body elment here";
};
//###################END MainCtrl#########################################
//########################################################################
