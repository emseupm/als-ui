/**
 * Created by ludste on 21/03/15.
 */
'use strict';
angular.module('uiApp').directive('simulationInventory', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/simulationInventory.html',
    controller: ['$scope', 'InventoryFactory', '$rootScope', function ($scope, InventoryFactory, $rootScope) {
      var init = function () {
        $scope.inventory = InventoryFactory.query();
      };

      $scope.assemblePart = function (partId) {
        $rootScope.$broadcast('partClicked', {id: partId});
      };

      init();
    }]
  };
});
