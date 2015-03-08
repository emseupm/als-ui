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
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
