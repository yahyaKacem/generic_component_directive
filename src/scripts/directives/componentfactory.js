//########################################################################
//###################START componentFactory###############################
directives.componentFactory = function($compile, Logger){
  return {
    scope: {
      components: "="
    },
    compile:function(tElement, tAttrs){
      var log = Logger.log;
      var el = tElement[0];
      if(el.getAttribute('type')){
        el.removeAttribute('type');
        log(tAttrs.type);
        el.setAttribute(tAttrs.type,'');
        return function(scope){
          $compile(el)(scope);
        }
      }
    }
  }
};
//###################END componentFactory#################################
//########################################################################
