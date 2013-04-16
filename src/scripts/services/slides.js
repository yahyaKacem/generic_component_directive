//########################################################################
//###################START Slides#########################################
app.factory('Slides', ['$http', function($http){
  var Url  = "json_files/slides.json";
  var Slides = $http.get(Url).then(function(response){
    return response.data;
  });
  return Slides;
}]);
//###################END Slides###########################################
//########################################################################
