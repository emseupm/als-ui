'use strict';

describe('Controller: ShowAssemblyLineController', function () {

  // load the controller's module
  beforeEach(module('uiApp'));
  var mockObject = 
    {
      'id': 1,
      'name': 'Ford Focus',
      'stations': [
        {'id': 1, 'name': 'Engine Assembly', 'estimated_time': 400},
        {'id': 2, 'name': 'Door Assembly', 'estimated_time': 200}
      ]
    };

  var ShowAssemblyListController,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, AssemblyFactory, $httpBackend, $rootScope) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.expect(
      'GET', 'http://localhost:3000/v1/assembly_lines/1.json'
    ).respond(200,
      mockObject
    );

    ShowAssemblyListController = $controller('ShowAssemblyLineController', {
      $scope: scope,
      AssemblyFactory: AssemblyFactory,
      $routeParams: {id: '1'}
    });
  }));

  it('should attach an assembly line object to the scope', function () {
    httpBackend.flush();
    console.log(scope.assemblyLineInfo);
    expect(scope.assemblyLineInfo.name).toBe('Ford Focus');
  });
});
