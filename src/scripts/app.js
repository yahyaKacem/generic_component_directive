'use strict';
//########################################################################
var app = angular.module('plunker', ['placeholders.img']);
//########################################################################
//######injecting the dependencies########################################
controllers.MainCtrl.$inject        = ['$scope', 'Slides', 'Items', 'Logger'];
directives.componentFactory.$inject = ['$compile', 'Logger'];
//########################################################################
//###assigning the controllers & the direcitves to the application########
app.directive(directives);
app.controller(controllers);
//########################################################################
