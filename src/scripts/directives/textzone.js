//########################################################################
//###################START textZone#######################################
directives.textZone = function() {
  var editTemplate    = '<textarea ' +
                          'cols="10" ' +
                          'rows="10" ' +
                          'ng-model="content" ' +
                          'ng-show="isEditMode" ' +
                          'class="text-zone text-content"' +
                          'ng-dblclick="switchToPreview()"' +
                        '>' +
                        '</textarea>';
  var previewTemplate = '<div ' +
                          'class="preview text-content"' +
                          'ng-hide="isEditMode"' +
                          'ng-click="switchToEdit()" ' +
                        '>' +
                          'Preview' +
                        '</div>';
  return {
    scope:       {},
    restrict:    "E",
    replace:     true,
    compile: function(tElement, tAttrs, transclude){
      var content        = tElement.text();
      var previewElement = angular.element(previewTemplate);
      tElement.html(editTemplate);
      previewElement.html(content);
      tElement.append(previewElement);
      return function(scope, element, attrs){
        scope.isEditMode      = false;
        scope.content         = content;
        scope.switchToPreview = function(){
          previewElement.html(scope.content);
          scope.isEditMode = false;
        };
        scope.switchToEdit = function(){
          scope.isEditMode = true;
        };
      };
    }
  };
};
//###################END textZone#########################################
//########################################################################
