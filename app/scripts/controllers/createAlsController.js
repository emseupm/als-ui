/**
 * Created by hmontero on 7/03/15.
 */
angular.module('uiApp')
  .controller('createAlsController', ['$scope', function ($scope) {
    $scope.newAls = {
      id: '',
      name: '',
      stations: []
    };
  }
  ]);
