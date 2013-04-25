//########################################################################
//######################START component###################################
directives.component = function($compile, Logger){
  return {
    restrict: 'E',
    link: function (iScope, iElement, iAttrs) {
      var log = Logger.log;
      if(iElement[0].getAttribute('type')){
        log(iAttrs.type);
        iElement.attr(iAttrs.type, '');
        iElement[0].removeAttribute('type');
        $compile(iElement)(iScope);
      }
    }
  };
};
//######################END component#####################################
//########################################################################
