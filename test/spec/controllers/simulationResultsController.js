/**
 * Created by roxy on 23/03/15.
 */

'use strict';

describe('Controller: SimulationResultsController', function () {

  // load the controller's module
  beforeEach(module('uiApp'));
  var mockObject =
  {
    "elapsed_time": 100,
    "station_results": [{
      "name": "Door Assembly",
      "elapsed_time": 200,
      "delay_time": 5
    },
      {
        "name": "Wheel Assembly",
        "elapsed_time": 234,
        "delay_time": 45
      }]
  };

  var ShowSimulationResultsController,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, SimulationFactory, $httpBackend, $rootScope) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.expect(
      'GET', 'http://localhost:3000/v1/assembly_lines/:assemblyLineId/simulations.json'
    ).respond(200,
      mockObject
    );

    ShowSimulationResultsController = $controller('SimulationResultsController', {
      $scope: scope,
      SimulationFactory: SimulationFactory,
      $routeParams: {id: '1'}
    });
  }));

  it('should attach an simulation result object to the scope', function () {
    httpBackend.flush();
    console.log(scope.simulationResults);
    expect(scope.simulationResults.elapsed_time).toBe('100');
  });
});
