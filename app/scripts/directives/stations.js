/**
 * Created by hmontero on 7/03/15.
 */
'use strict';
angular.module('uiApp').directive('alsStations',['InventoryFactory', function(InventoryFactory){
  return {
    restrict: 'E',
    templateUrl: 'views/als-stations.html',
    scope : {
      stations: '='
    },
    controller: function($scope){
      var init = function() {
      $scope.name = '';
      $scope.time = '';
      $scope.componentName = 'select a component for the station';
      $scope.components = [];
      updateInvList();
      };
      $scope.addStation = function(){
          $scope.stations.push({'name': $scope.name, 'estimated_time': $scope.time, 'component': $scope.componentSelected.id});
          $scope.name = '';
          $scope.time = '';
          $scope.componentSelected = null;
          console.log($scope.stations);
      };

      var updateInvList = function () {
        $scope.components= InventoryFactory.query();
      };

      $scope.selectComponent = function(component) {
        $scope.componentSelected = component;
        $scope.componentName = $scope.componentSelected.name;
      };

      init();
    }
  };
}]);
