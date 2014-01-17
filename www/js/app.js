var batApp = angular.module('batapp', ['ionic']);

batApp.controller('mainCtrl', function($scope, $location, $ionicPlatform) {

  Platform = $ionicPlatform;

  Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });

	//toggle nav menu thingy
	//

	$scope.openLeft = function() {
      $scope.sideMenuController.toggleLeft();
  };

  $scope.comuni = [
    { title: 'Andria' },
    { title: 'Barletta' },
    { title: 'Trani' },
    { title: 'Canosa' }
  ];

});