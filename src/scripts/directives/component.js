//########################################################################
//######################START component###################################
directives.component = function(){
  var linker = function (iScope, iElement, iAttrs) {
// old too complicated method
//    console.log(iScope.$last);
//    if(iScope.$last === true){
//      if(iElement[0].getAttribute('type')){
//        iElement.attr(iAttrs.type, '');
//        iElement[0].removeAttribute('type');
//        $compile(iElement)(iScope);
//      }
//    }
  };
  return {
    scope: {
      element: "="
    },
    replace:     true,
    restrict:    "EA",
    transclude:  true,
    link:        linker,
    templateUrl: 'tpls/component-container.tpl'
  };
};
//######################END component#####################################
//########################################################################
