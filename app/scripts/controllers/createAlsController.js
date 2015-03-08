/**
 * Created by hmontero on 7/03/15.
 */
angular.module('uiApp')
  .controller('createAlsController', ['$scope', 'AssemblyFactory', function ($scope, AssemblyFactory) {
    var numAls = 1;
    $scope.newAls = {
      id: '',
      name: '',
      stations: []
    };
    $scope.createAls = function(){
      $scope.newAls.id = numAls;
      numAls++;
      console.log($scope.newAls);
      //AssemblyFactory.save($scope.newAls);
    };
  }
  ]);
