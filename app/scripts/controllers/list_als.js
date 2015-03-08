'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiApp
 */
angular.module('uiApp')
  .controller('ListALSController', ['$scope', 'AssemblyFactory', function ($scope, AssemblyFactory) {
    $scope.assemblyLines = AssemblyFactory.get();
  }]);
