'use strict';

angular.module('uiApp').factory('AssemblyFactory', function ($resource) {
  return $resource('http://localhost:3000/v1/assembly_lines/:id.json');
});
