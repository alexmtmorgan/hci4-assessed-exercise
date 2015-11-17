angular.module('starter.controllers', [])

  .controller('TravelCtrl', function($scope) {
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

        $scope.travelMode = 'Environment'

      } else if(id === 'exercise') {
        $scope.selectedButton.exercise = !$scope.selectedButton.exercise;

        $scope.travelMode = 'Exercise';

      } else {
        console.log('invalid choice');
      }
    }

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
