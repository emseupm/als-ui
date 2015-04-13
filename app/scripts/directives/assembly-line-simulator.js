/**
 * Created by hmontero on 22/03/15.
 */
'use strict';
angular.module('uiApp').directive('assemblyLineSimulator', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/assembly-line-simulator.html',
    controller: function ($scope, $element, AssemblyFactory, $routeParams, SimulationFactory, $rootScope) {
      $scope.assemblyLineId = $routeParams.id;
      $scope.assemblyLineInfo = AssemblyFactory.get({id: $scope.assemblyLineId}, function () {
        $scope.stationCount = $scope.assemblyLineInfo.stations.length;

      });

      $scope.timerRunning = false;
      $scope.simulationRegistered = false;
      $scope.stationNumber = -1;
      $scope.stationCount = 0;
      $scope.stationResults = [];
      $scope.simulation = {};
      $scope.simulationProgress = 0;

      var simulationTimer = $element[0].getElementsByTagName('timer')[0];
      //Start the simulation
      $scope.startTimer = function () {
        simulationTimer.start();
        $scope.timerRunning = true;
        $scope.stationNumber = 0;
        $scope.simulationProgress = 100 * ($scope.stationNumber + 1) / $scope.stationCount;
      };
      //Ends the simulation
      $scope.stopTimer = function () {
        //Stopping the general timer
        simulationTimer.stop();
        $scope.timerRunning = false;
        //Stopping the current station timer
        stopCurrentStation();
        $scope.stationNumber = $scope.stationCount;
        //Prepare and register the simulation object
        $scope.simulation = ({'elapsed_time': timerMillis(simulationTimer), 'station_results': $scope.stationResults});
        //Resetting defaults
        $scope.timerRunning = false;
        $scope.simulationRegistered = false;
        $scope.stationNumber = -1;
        registerSimulationData();
      };

      $scope.$on('timer-stopped', function (event, data) {
        /*console.log('Timer Stopped - data = ', data);*/
      });
      //Selects the current station timer
      var stationTimer = function (number) {
        return $element.find('#station-timer-' + number).get(0);
      };
      //Gets the time (milliseconds) of the current station timer
      var timerMillis = function (timer) {
        return angular.element(timer).isolateScope().millis;
      };
      //Stops the current timer and register its results.
      var stopCurrentStation = function () {
        var timer = stationTimer($scope.stationNumber);
        timer.stop();
        var station = $scope.assemblyLineInfo.stations[$scope.stationNumber];
        $scope.stationResults[$scope.stationNumber] = {
          'station_id': station.id,
          'elapsed_time': timerMillis(timer),
          'delay_time': 0
        };
      };

      //Check if all elements in the inventory have been checked, in order to enable Next button
      //Get stations id list

      //Listen for part clicked event
      $rootScope.$on('partClicked', function (event, args) {
        /*     console.log(args.id);
         console.log($scope.stationNumber);*/

        //Check if the part clicked is a piece of the station.
        console.log("$scope.assemblyLineInfo.stations[" + $scope.stationNumber + "].parts.indexOf(" + args.id + ");");
        var positionOfId = $scope.assemblyLineInfo.stations[$scope.stationNumber].parts.indexOf(args.id);
        $scope.canGoToNext = false;
        if (positionOfId != -1) {
          /*console.log("Entra");*/
          $scope.canGoToNext = true;
          //stationPiecesIds.splice(positionOfId, 1);
        }
        //if(stationPiecesIds.length = 0){
        //  $scope.canGoToNext = true;
        //}
      });


      //Changes from one station to the next one
      $scope.nextStation = function () {
        stopCurrentStation();
        $scope.canGoToNext = false;
        $scope.stationNumber++;
        $scope.simulationProgress = 100 * ($scope.stationNumber + 1) / $scope.stationCount;
      };
      //Connects with the API and register all the simulation data.
      var registerSimulationData = function () {
        $scope.simulation.assemblyLineId = $scope.assemblyLineId;
        SimulationFactory.save($scope.simulation, function (data) {
          //Show result button
          $scope.simulationRegistered = true;
          $scope.simulation = data;
        });
      };
    }
  };
});
