'use strict';

/**
 * @ngdoc overview
 * @name uiApp
 * @description
 * # uiApp
 *
 * Main module of the application.
 */
angular
  .module('uiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/listAls.html',
        controller: 'ListALSController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/showAssemblyLine/:id',{
        templateUrl: 'views/showAssemblyLine.html',
        controller: 'ShowAssemblyLineController'
      })
      .when('/assemblyLines/:id/simulate',{
        templateUrl: 'views/simulateAssemblyLine.html',
        controller: 'SimulateAssemblyLineController'
      })
      .when('/newAls', {
        templateUrl: 'views/newAls.html',
        controller: 'CreateAlsController'
      })
      .when('/assemblyLine/:assemblyLineId/simulationResults/:id',{
        templateUrl: 'views/simulationResults.html',
        controller: 'SimulationResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
