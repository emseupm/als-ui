/**
 * Created by hmontero on 7/03/15.
 */
'use strict';
angular.module('uiApp')
  .controller('CreateAlsController', ['$scope', 'AssemblyFactory', function ($scope, AssemblyFactory) {
    $scope.newAls = {
      name: '',
      stations: []
    };
    $scope.createAls = function(){
      console.log($scope.newAls);
      AssemblyFactory.save($scope.newAls);
    };
  }
  ]);
