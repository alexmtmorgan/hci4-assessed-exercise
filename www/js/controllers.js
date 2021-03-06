angular.module('glasgo.controllers', [])

  .controller('TravelCtrl', function($scope, $state, Shared) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.selectedButton = {
      time: false,
      environment: true,
      exercise: false
    };

    $scope.travelMode = 'Environment';

    $scope.toggle = function(id) {

      for(var key in $scope.selectedButton) {
        if($scope.selectedButton.hasOwnProperty(key)) {
          $scope.selectedButton[key] = false;
        }
      }

      if(id === 'time') {
        $scope.selectedButton.time = !$scope.selectedButton.time;

        $scope.travelMode = 'Time';

      } else if(id === 'environment') {
        $scope.selectedButton.environment = !$scope.selectedButton.environment;

        $scope.travelMode = 'Environment';

      } else if(id === 'exercise') {
        $scope.selectedButton.exercise = !$scope.selectedButton.exercise;

        $scope.travelMode = 'Exercise';

      } else {
        console.log('invalid choice');
      }
    };

    $scope.travel = function(travelForm) {
      Shared.setPrefferedTravelMode($scope.travelMode);

      Shared.setStart(travelForm.location.$viewValue);
      Shared.setEnd(travelForm.destination.$viewValue);

      Shared.setCurrentLocation($scope.currentLocation);

      $state.go('tab.travellist');
    };

    $scope.travels = {
      location: null,
      destination: null
    };

    $scope.currentLocation = {
      latitude: null,
      longitude: null
    };

    $scope.addLocation = function() {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          $scope.travels.location = "University of Glasgow";
          $scope.currentLocation.latitude = position.coords.latitude;
          $scope.currentLocation.longitude = position.coords.longitude;
        },
        function() {
          alert('Error getting location');
        });
      return false;
    };

  })

  .controller('TravelListCtrl', function($scope, Shared) {

    $scope.travelModes = ['Time','Environment', 'Exercise'];

    $scope.selectedButton = {
      time: false,
      environment: true,
      exercise: false
    };

    $scope.$on('$ionicView.enter', function(e) {

      $scope.travelMode = Shared.getPreferredTravelMode();
      switch($scope.travelMode) {
        case 'Time':
          $scope.selectedButton.time = true;
          $scope.selectedButton.environment = false;
          $scope.selectedButton.exercise = false;
          break;
        case 'Environment':
          $scope.selectedButton.time = false;
          $scope.selectedButton.environment = true;
          $scope.selectedButton.exercise = false;
          break;
        case 'Exercise':
          $scope.selectedButton.time = false;
          $scope.selectedButton.environment = false;
          $scope.selectedButton.exercise = true;
          break;
        default:
          console.log('Invalid');
          break;
      }

      $scope.startLocation = Shared.getStart();
      $scope.endLocation = Shared.getEnd();

      $scope.currentLocation = Shared.getCurrentLocation();

      $scope.initial();
    });

    $scope.routes = [
      {
        type: null
      },
      {
        type: null
      },
      {
        type: null
      }
    ];

    $scope.toggle = function(id) {

      for(var key in $scope.selectedButton) {
        if($scope.selectedButton.hasOwnProperty(key)) {
          $scope.selectedButton[key] = false;
        }
      }

      if(id === 'time') {
        $scope.selectedButton.time = !$scope.selectedButton.time;

        $scope.travelMode = 'Time';

      } else if(id === 'environment') {
        $scope.selectedButton.environment = !$scope.selectedButton.environment;

        $scope.travelMode = 'Environment';

      } else if(id === 'exercise') {
        $scope.selectedButton.exercise = !$scope.selectedButton.exercise;

        $scope.travelMode = 'Exercise';

      } else {
        console.log('invalid choice');
      }
    };

    $scope.initial = function() {
      $scope.routes[0].type = $scope.travelMode;

      if($scope.travelMode === 'Time') {
        $scope.routes[1].type = 'Exercise';
        $scope.routes[2].type = 'Environment';

      } else if($scope.travelMode === 'Environment') {
        $scope.routes[1].type = 'Exercise';
        $scope.routes[2].type = 'Time';

      } else if($scope.travelMode === 'Exercise') {
        $scope.routes[1].type = 'Environment';
        $scope.routes[2].type = 'Time';
      } else {
        console.log("Travel mode not selected");
      }
    };
  })

  .controller('SettingsCtrl', function($scope) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.settings = {
      enableFriends: true
    };
  });
