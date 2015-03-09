/**
 * Created by hmontero on 8/03/15.
 */
'use strict';

describe('Controller: createAlsController', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var CreateAlsController,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, AssemblyFactory, $httpBackend, $rootScope) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    CreateAlsController = $controller('CreateAlsController', {
      $scope: scope,
      AssemblyFactory: AssemblyFactory
    });
  }));

  it('should get a successful creation response', function () {
    httpBackend.expect(
      'POST', 'http://localhost:3000/v1/assembly_lines.json', {'name': 'Station', 'stations':[{name: 'Station', 'estimated_time': 'Time'}] }
    ).respond(201,
      {'id': 1, 'name': 'Station', 'stations':[{'id':1, 'name': 'Station', 'estimated_time': 'Time'}] }
    );
    scope.newAls ={
      'name': 'Station',
      'stations':[{
                    name: 'Station',
                    'estimated_time': 'Time'
                }]
    };
    scope.createAls();
    httpBackend.flush();
  });
});
