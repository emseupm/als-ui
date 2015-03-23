
'use strict';
angular.module('uiApp')
  .controller('InventoryController', ['$scope', '$location', 'InventoryFactory', function ($scope, $location, InventoryFactory) {

  $scope.addComponent = function(){
      console.log($scope.newComponent);
      InventoryFactory.save($scope.newComponent, function () {
        updateInvList();
      });
    };

    var init = function () {
      $scope.newComponent = {
        name: '',
        stock:0
      };
      $scope.components= [];
      updateInvList();
    };

      var updateInvList = function () {
        $scope.components= InventoryFactory.query();
      };

      $scope.increaseComponent = function(partId) {
        InventoryFactory.upStock({id:partId}, function(){
          updateInvList();
        });
      };

      $scope.decreaseComponent = function(partId) {
        InventoryFactory.downStock({id:partId}, function(){
          updateInvList();
        });
      };

      $scope.deleteComponent = function(partId) {
        InventoryFactory.delete({id:partId}, function(){
          updateInvList();
        });
      };

      init();

  }]);
