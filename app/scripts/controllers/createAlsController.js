/**
 * Created by hmontero on 7/03/15.
 */
'use strict';
angular.module('uiApp')
  .controller('CreateAlsController', ['$scope', '$location', '$timeout', '$anchorScroll','AssemblyFactory', function ($scope, $location, $timeout, $anchorScroll, AssemblyFactory) {
    $scope.isSaved = false;
    $scope.newAls = {
      name: '',
      stations: []
    };
    $scope.createAls = function(){

      AssemblyFactory.save($scope.newAls, function () {
        //Show success message
        $scope.isSaved = true;
        //Scroll to the success message
        $('html, body').animate({
          scrollTop: $("#success-anchor").offset().top
        }, 500);
        //Redirect to the ALS list view after 4 seconds
        $timeout(function(){$location.path('/');}, 4000);
      });
    };
  }
  ]);
