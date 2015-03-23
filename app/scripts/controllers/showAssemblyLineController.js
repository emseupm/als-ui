'use strict';

angular.module('uiApp').controller('ShowAssemblyLineController', function ($log, $scope, $routeParams, AssemblyFactory, $rootScope) {

  $scope.assemblyLineId = $routeParams.id;
  $scope.assemblyLineInfo = AssemblyFactory.get({id: $scope.assemblyLineId}, function (data) {
    $log.info(data);
  });

  /*
   $rootScope.$on('partClicked', function (event, args) {
   console.log('Event received ' + args.id);
   });
   */
});
