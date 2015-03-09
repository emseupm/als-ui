/**
 * Created by hmontero on 7/03/15.
 */
'use strict';
angular.module('uiApp')
  .controller('CreateAlsController', ['$scope', '$location', 'AssemblyFactory', function ($scope, $location, AssemblyFactory) {
    $scope.newAls = {
      name: '',
      stations: []
    };
    $scope.createAls = function(){
      console.log($scope.newAls);
      AssemblyFactory.save($scope.newAls, function () {
        $location.path('/');
      });
    };
  }
  ]);
