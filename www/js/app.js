var batApp = angular.module('batapp', ['ionic'])

batApp.controller('mainCtrl', function($scope) {
  
	//toggle nav menu thingy
	//
	$scope.openLeft = function() {
          $scope.sideMenuController.toggleLeft();
     };





  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];
});