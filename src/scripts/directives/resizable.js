//########################################################################
//###################START resizable######################################
directives.resizable = function(){
  var linker = function(scope, element, attrs) {
    
  };
  return {
    scope:      {},
    restrict:   "A",
    replace:    true,
    transclude: true,
    link:       linker
  }
};
//###################END resizable########################################
//########################################################################
