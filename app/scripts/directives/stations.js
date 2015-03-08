/**
 * Created by hmontero on 7/03/15.
 */
'use strict';
angular.module('uiApp').directive('alsStations', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/als-stations.html',
    scope : {
      stations: '='
    },
    controller: function($scope){
      $scope.name = '';
      $scope.time = '';
      $scope.addStation = function(){
          $scope.stations.push({'name': $scope.name, 'estimated_time': $scope.time});
          $scope.name = '';
          $scope.time = '';
          console.log($scope.stations);
      };
    }
  };
});
