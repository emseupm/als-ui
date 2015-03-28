'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiApp
 */
angular.module('uiApp')
  .controller('ListALSController', ['$scope', 'AssemblyFactory', '$location', '$timeout', function ($scope, AssemblyFactory, $location, $timeout) {
    $scope.assemblyLines = [];
    $scope.message = '';
    var init = function () {
      $scope.updateALSList();
      $scope.showDeleteButton = false;
    };


    $scope.updateALSList = function () {
      $scope.assemblyLines = AssemblyFactory.query();
    };


    $scope.newALS = function () {
      $location.path('/newAls');
    };

    $scope.showDeleteButtons = function () {
      $scope.showDeleteButton = !$scope.showDeleteButton;
      console.log($scope.showDeleteButton);
    };

    $scope.showDeleteDialog = function (line, index) {
      $scope.lineToDelete = line;
      $scope.lineIndex = index;
      $('#deleteConfirm').modal('toggle');
    };
    $scope.deleteALS = function (line, index) {
      $('#deleteConfirm').modal('toggle');
      AssemblyFactory.delete({id: line.id}, function (response) {
        console.log(response);
        $scope.message = 'Your ALS have been deleted!';
      });
      $scope.assemblyLines.splice(index, 1);
      $timeout(function () {
        $scope.message = '';
      }, 3000);
    };
    init();

  }]);
