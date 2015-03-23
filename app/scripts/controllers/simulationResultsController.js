/**
 * Created by roxy on 22/03/15.
 */
'use strict';

angular.module('uiApp').controller('SimulationResultsController',function($scope, $log, $routeParams, SimulationFactory, AssemblyFactory){

  $scope.assemblyLineId = $routeParams.assemblyLineId;

  $scope.simulationResults = SimulationFactory.get({assemblyLineId:$scope.assemblyLineId});

  $scope.assemblyLineInfo = AssemblyFactory.get({id:$scope.assemblyLineId});


});
