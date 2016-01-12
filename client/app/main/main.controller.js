'use strict';

angular.module('nearbyApp')
  .controller('MainCtrl', function($scope, $http, uiGmapGoogleMapApi, $timeout) {
    $scope.places = [];
    $scope.filters = [];

    uiGmapGoogleMapApi.then(function(maps) {
      setMap();
      getPlaces();
      createCircle();

      $scope.$watch('filteredPlaces', function(nv, ov) {
        createMarkers($scope.filteredPlaces);
      }, true);
    });

    /*
    Map
     */
    function setMap() {
      $scope.map = {
        center: {
          latitude: 45.5017,
          longitude: -73.5673
        },
        zoom: 12,
        markers: []
      };
    };

    /*
    Places
     */

    function getPlaces(circle) {
      var longitude = (circle != null) ? circle.getCenter().lng() : $scope.map.center.longitude;
      var latitude = (circle != null) ? circle.getCenter().lat() : $scope.map.center.latitude;
      var maxdistance = (circle != null) ? circle.getRadius() : 5000;
      $http.get('/api/places', {
        params: {
          longitude: longitude,
          latitude: latitude,
          maxdistance: maxdistance
        }
      }).success(function(result) {
        $scope.places = result;
        createMarkers();
      });
    };

    /*
    Markers
     */
    function createMarker(place) {
      var marker = new google.maps.Marker({
        id: place._id,
        longitude: place.location[0],
        latitude: place.location[1],
        title: place.name,
        show: false,
        events: {
          click: function() {
            console.log('click');
          }
        }
      });
      return marker;
    };

    function createMarkers(list) {
      $scope.map.markers = [];
      var places = (list != null) ? list : $scope.places;
      angular.forEach(places, function(place) {
        $scope.map.markers.push(createMarker(place));
      });
    };


    /*
    Circle
     */
    function createCircle() {
      $scope.circles = [{
        id: 1,
        center: {
          latitude: $scope.map.center.latitude,
          longitude: $scope.map.center.longitude
        },
        radius: 5000,
        stroke: {
          color: '#08B21F',
          weight: 2,
          opacity: 1
        },
        fill: {
          color: '#08B21F',
          opacity: 0.2
        },
        geodesic: true, // optional: defaults to false
        draggable: true, // optional: defaults to false
        clickable: true, // optional: defaults to true
        editable: true, // optional: defaults to false
        visible: true, // optional: defaults to true
        control: {},
        events: {
          radius_changed: function(circle) {
            getPlaces(circle);
          },
          dragend: function(circle) {
            getPlaces(circle);
          }
        }
      }];
    };
  });