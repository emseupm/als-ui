'use strict';
angular.module('uiApp').factory('AssemblyFactory', function ($resource) {
  return $resource('mocks/assembly_lines/:id.json');

});
