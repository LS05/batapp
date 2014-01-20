var batApp = angular.module('batapp', ['ionic', 'ngRoute']);

batApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/sezassoc/:sezione', {
        templateUrl: '/sezione.html',
        controller: 'SezioneController'
      }).
      when('/sezassoc/:sezione/:comune', {
        templateUrl: '/listaassociazioni.html',
        controller: 'ListaComController'
      }).
      when('/sezassoc/:sezione/:comune/:associazione', {
        templateUrl: '/associazione.html',
        controller: 'AssociazioneController'
      }).
      when('/', {
        templateUrl: '/main.html',
        controller: 'mainCtrl'
      })
  }]);

batApp.filter('capitalize', function() {
   return function(input, scope) {
            if (input!=null)
              input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
   }
});

batApp.filter('lwnowhitespace', function() {
   return function(input, scope) {
            if (input != null)
              input = input.toLowerCase().replace(/ /g, '');
            return input;
   }
});


batApp.controller('SezioneController', function($scope, $routeParams) {
    $scope.sezione = $routeParams.sezione;
    if( $scope.sezione == 'imprenditoriagiovanile' )
      $scope.impgiov = 'Imprenditoria Giovanile';
});

batApp.controller('ListaComController', function($scope, $routeParams) {
    $scope.comune = $routeParams.comune;
    $scope.sezione = $routeParams.sezione;
    console.log($scope);
});

batApp.controller('AssociazioneController', function($scope, $routeParams) {
    $scope.comune = $routeParams.comune;
    $scope.sezione = $routeParams.sezione;
    console.log($scope);
});

batApp.controller('ListaCultController', function($scope, $routeParams) {
    $scope.comune = $routeParams.comune;
    $scope.sezione = 'wrapcultura';
    console.log($scope);
});

batApp.controller('ListaAmbController', function($scope, $routeParams) {
    $scope.comune = $routeParams.comune;
    $scope.sezione = 'wrapambiente';
});

batApp.controller('ImpGiovController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

batApp.controller('ListaImpGiovController', function($scope, $routeParams) {
    $scope.comune = $routeParams.comune;
    $scope.sezione = 'wrapimpgiov';
    console.log($scope);
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