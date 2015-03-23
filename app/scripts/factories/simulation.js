/**
 * Created by roxy on 22/03/15.
 */

'use strict';

angular.module('uiApp').factory('SimulationFactory', function($resource){

 return $resource('http://localhost:3000/v1/assembly_lines/:assemblyLineId/simulations.json', {assemblyLineId:'@assemblyLineId'});
  //return $resource('mocks/simulations/:assemblyLineId.json');
});
