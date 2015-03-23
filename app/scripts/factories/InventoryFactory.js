'use strict';

angular.module('uiApp').factory('InventoryFactory', function ($resource) {
  return $resource('http://localhost:3000/v1/inventories/:id.json', null, {
    upStock:{method:'GET', url:'http://localhost:3000/v1/inventories/:id/upStock'},
    downStock:{method:'GET', url:'http://localhost:3000/v1/inventories/:id/downStock'},
  });
});
