/**
 * Created by roxy on 22/03/15.
 */
'use strict';

angular.module('uiApp').controller('SimulationResultsController',function($scope, $log, $routeParams, SimulationFactory, AssemblyFactory){

  $scope.assemblyLineId = $routeParams.assemblyLineId;
  $scope.simulationId = $routeParams.id;

  $scope.simulationResults = SimulationFactory.get({ id: $scope.simulationId, assemblyLineId:$scope.assemblyLineId });

  $scope.assemblyLineInfo = AssemblyFactory.get({id:$scope.assemblyLineId});


});
