'use strict';
//########################################################################
var app = angular.module('plunker', ['placeholders.img']);
//########################################################################
//######injecting the dependencies########################################
directives.component.$inject = ['$compile', 'Logger'];
controllers.MainCtrl.$inject = ['$scope', 'Slides', 'Items', 'Logger'];
//########################################################################
//###assigning the controllers & the direcitves to the application########
app.directive(directives);
app.controller(controllers);
//########################################################################
//########################################################################
//########################START panel#####################################
app.directive('panel', function() {
  return {
    scope: {
      title: "@"
    },
    replace:    true,
    restrict:   "E",
    transclude: true,
    template:   '<div class="tester">' +
                  '<div class="title">{{title}}</div>' +
                  '<div ng-transclude></div>' +
                '</div>'
  };
});
//########################END panel#######################################
//########################################################################
//########################START element###################################
app.directive('element', function() {
  var time = new Date();
  return {
    scope: {
      text: "@"
    },
    replace:    true,
    restrict:   "E",
    transclude: true,
    template:   '<div class="body">' + 
                  time.getHours() + ':' +
                  time.getMinutes() + ':' +
                  time.getSeconds() + ':' +
                  ' {{text}}' +
                '</div>'
  };
});
//########################END element#####################################
//########################################################################
