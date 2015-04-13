/**
 * Created by hmontero on 22/03/15.
 */
'use strict';
angular.module('uiApp').directive('stationTimer', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/station-timer.html',
    controller: function($scope, $element) {
      var timer = $element[0].getElementsByTagName("timer")[0];
      $scope.startTimer = function() {
        timer.start();
      };
    }
  };
});
