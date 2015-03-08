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
    $scope.assemblyLines = [];

    var init = function () {
      $scope.updateALSList();
      console.log('Controller created');

    };


    $scope.updateALSList = function () {
      $scope.assemblyLines = AssemblyFactory.query();
    };


    init();

  }]);
