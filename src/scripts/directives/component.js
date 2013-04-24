//########################################################################
//######################START component###################################
directives.component = function($compile, Logger){
  return {
    scope: {
      type:    "@",
      element: "="
    },
    compile:function(tElement, tAttrs){
      var log = Logger.log;
      var el = tElement[0];
      if(el.getAttribute('type')){
        log(tAttrs.type);
        el.removeAttribute('type');
        el.setAttribute(tAttrs.type,'');
        return function(scope, element, attrs){
          $compile(el)(scope);
        };
      }
    }
  }
};
//######################END component#####################################
//########################################################################
