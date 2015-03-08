'use strict';

describe('Controller: ListALSController', function () {

  // load the controller's module
  beforeEach(module('uiApp'));
  var mockArray = [
    {
      'id': 1,
      'name': 'Ford Focus',
      'stations': [
        {'id': 1, 'name': 'Engine Assembly', 'estimated_time': 400},
        {'id': 2, 'name': 'Door Assembly', 'estimated_time': 200}
      ]
    },

    {
      'id': 2,
      'name': 'LG Washing Machine',
      'stations': [
        {'id': 1, 'name': 'Case Assembly', 'estimated_time': 800},
        {'id': 2, 'name': 'Door Assembly', 'estimated_time': 400}
      ]
    }

  ];

  var ListALSController,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, AssemblyFactory, $httpBackend, $rootScope) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.expect(
      'GET', 'mocks/assembly_lines.json'
    ).respond(200,
      mockArray
    );

    ListALSController = $controller('ListALSController', {
      $scope: scope,
      AssemblyFactory: AssemblyFactory
    });
  }));

  it('should attach a list of assemblyLines to the scope', function () {
    httpBackend.flush();
    console.log(scope.assemblyLines);
    expect(scope.assemblyLines.length).toBe(2);
  });
});
