'use strict';

angular.module('nearbyApp')
  .controller('MainCtrl', function($scope, $http, uiGmapGoogleMapApi) {
    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $scope.addThing = function() {
    //   if ($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', {
    //     name: $scope.newThing
    //   });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {
        center: {
          latitude: 45.5017,
          longitude: -73.5673
        },
        zoom: 12
      };
    });
  });