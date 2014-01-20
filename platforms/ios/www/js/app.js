var batApp = angular.module('batapp', ['ionic', 'ngRoute']);

batApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cultura', {
        templateUrl: '/cultura.html',
        controller: 'CulturaController'
      }).
      when('/ambiente', {
        templateUrl: '/ambiente.html',
        controller: 'AmbienteController'
      }).
      when('/impgiov', {
        templateUrl: '/impgiov.html',
        controller: 'ImpGiovController'
      }).
      when('/associazioni', {
        templateUrl: '/listaassociazioni.html',
        controller: 'CulturaController'
      }).
      when('/', {
        templateUrl: '/main.html',
        controller: 'mainCtrl'
      })
  }]);

batApp.controller('ImpGiovController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

batApp.controller('AmbienteController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

batApp.controller('CulturaController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

batApp.controller('mainCtrl', function($scope, $ionicPlatform) {

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
    { title: 'Canosa' },
    { title: 'Margherita' },
    { title: 'Ginosa' }
  ];

  $scope.associazioni = [
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    }
  ];

});