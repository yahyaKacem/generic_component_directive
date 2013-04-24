//########################################################################
//######################START editor######################################
directives.editor = function(){
  var linker = function(scope, element, attrs) {};
  return {
    scope: {
      element: "="
    },
    replace:     true,
    restrict:    "EA",
    transclude:  true,
    link:        linker,
    templateUrl: 'tpls/editor.tpl'
  }
};
//######################END editor########################################
//########################################################################
