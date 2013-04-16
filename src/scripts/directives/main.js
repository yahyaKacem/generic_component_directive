//########################################################################
//#######################START component##################################
directives.component = function() {
  return {
    scope: {},
    replace:     true,
    restrict:    "E",
    transclude:  true,
    template: '<div class="component" ng-transclude></div>'
  };
};
//########################END component###################################
//########################################################################
