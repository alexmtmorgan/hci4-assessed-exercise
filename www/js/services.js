angular.module('glasgo.services', ['ng'])

  .factory('Shared', function() {

    var journey = {
      start: null,
      waypoints: [],
      end: null
    };

    var preferredTravelMode = "Environment";

    var currentLocation = {
      latitude: null,
      longitude: null
    };

    return {
      getStart: function() {
        return journey.start;
      },
      setStart: function(loc) {
        journey.start = loc;
      },

      getEnd: function() {
        return journey.end;
      },
      setEnd: function(loc) {
        journey.end = loc;
      },

      getWaypoints: function() {
        return journey.waypoints;
      },
      setWaypoints: function(points) {
        journey.waypoints = points;
      },

      getPreferredTravelMode: function() {
        return preferredTravelMode;
      },
      setPrefferedTravelMode: function(mode) {
        preferredTravelMode = mode;
      },

      getCurrentLocation: function() {
        return currentLocation;
      },
      setCurrentLocation: function(currentLoc) {
        currentLocation = currentLoc;
      }
    }
  });
