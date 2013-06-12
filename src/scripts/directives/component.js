//########################################################################
//######################START component###################################
directives.component = function($compile, Logger){
  var linker = function (iScope, iElement, iAttrs) {
    var log = Logger.log;
    console.log(iScope.$last);
    if(iScope.$last === true){
      if(iElement[0].getAttribute('type')){
        log(iAttrs.type);
        iElement.attr(iAttrs.type, '');
        iElement[0].removeAttribute('type');
        $compile(iElement)(iScope);
      }
    }
  };
  return {
    restrict: 'E',
    link:     linker
  };
};
//######################END component#####################################
//########################################################################
