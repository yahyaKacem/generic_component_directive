//########################################################################
//###################START Items##########################################
app.factory('Items', ['$http', function($http){
  var Url  = "json_files/items.json";
  var Items = $http.get(Url).then(function(response){
    return response.data;
  });
  return Items;
}]);
//###################END Items############################################
//########################################################################
