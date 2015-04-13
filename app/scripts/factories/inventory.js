/**
 * Created by ludste on 21/03/15.
 */
'use strict';


angular.module('uiApp').factory('InventoryFactory', function ($resource) {

  return $resource('http://localhost:3000/v1/inventories/:id.json', null,
    /*
     return $resource('mocks/inventories.json', null,
     */
    {
      upStock: {method: 'GET', url: 'http://localhost:3000/v1/inventories/:id/upStock.json'},
      downStock: {method: 'GET', url: 'http://localhost:3000/v1/inventories/:id/downStock.json'}

    });
});
