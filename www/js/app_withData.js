var batApp = angular.module('batapp', ['ionic']);

batApp.factory('dataFactory', function() {
  var res;
  var comuni = [ {title: 'Andria'}, {title: 'Trani'} ];

  var associazioni = [
    { 
      id: '1',
      nome: 'Teatro Sospeso',
      posizione: 'Via Castel del Monte, 80',
      descrizone: ''
    },
    { 
      id: '2',
      nome: 'Associazione Trani',
      posizione: 'Via Trani, 54',
      descrizone: ''
    }
  ];

  var eventi = [
    { 
      id: '1',
      nome: 'La storia di Andria',
      posizione: 'Via Castel del Monte, 80',
      orario: '20:30',
      idassociazione: '1',
      descrizone: ''
    },
    { 
      id: '2',
      nome: 'Associazione Trani',
      posizione: 'Via Trani, 54',
      idassociazione: '1',
      descrizone: ''
    }
  ];

  return {
      getData: function(type){
          if (type == 'associazioni')
            res = associazioni;
          else if (type == 'eventi')
            res = eventi;
          if (type == 'comuni')
            res = comuni;
          return res;
      }
  };
});

batApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "main.html",
      controller: 'mainCtrl'
    })
    .state('seyf', {
      url: "/seyf",
      templateUrl: "seyf.html",
      controller: 'mainCtrl'
    })
    .state('impgiov', {
      url: "/sezassoc/imprenditoriagiovanile",
      templateUrl: "impgiov.html",
      controller: 'ImpGiovController'
    })
    .state('templib', {
      url: "/sezassoc/tempolibero",
      templateUrl: "templib.html",
      controller: 'TempLibController'
    })
    .state('sezione', {
      url: "/sezassoc/:sezione",
      templateUrl: "sezione.html",
      controller: 'SezioneController'
    })
    .state('listaimpgiov', {
      url: "/sezassoc/imprenditoriagiovanile/:comune",
      templateUrl: "listaassociazioni.html",
      controller: 'ListaImpGiovController'
    })
    .state('associazioni', {
      url: "/sezassoc/:sezione/:comune",
      templateUrl: "listaassociazioni.html",
      controller: 'ListaComController'
    })
    .state('associazione', {
      url: "/sezassoc/:sezione/:comune/:associazione/:idass",
      templateUrl: "associazione.html",
      controller: 'AssociazioneController'
    })
    .state('info', {
      url: "/sezassoc/:sezione/:comune/:associazione/:idass/info",
      templateUrl: "infoass.html",
      controller: 'InfoController'
    })
    .state('eventiass', {
      url: "/sezassoc/:sezione/:comune/:associazione/:idass/eventi",
      templateUrl: "eventiass.html",
      controller: 'EventiAssController'
    })
    .state('eventoass', {
      url: "/sezassoc/:sezione/:comune/:associazione/:idass/eventi/:evento",
      templateUrl: "eventoass.html",
      controller: 'EventoAssController'
    })
    .state('eventi', {
      url: "/eventi",
      templateUrl: "eventi.html",
      controller: 'mainCtrl'
    })
    .state('evento', {
      url: "/eventi/:evento",
      templateUrl: "evento.html",
      controller: 'mainCtrl'
    })
    .state('curiosita', {
      url: "/curiosita",
      templateUrl: "curiosita.html",
      controller: 'CuriositaController'
    })
    .state('listacuriosita', {
      url: "/curiosita/:comune",
      templateUrl: "listacuriosita.html",
      controller: 'mainCtrl'
    })


    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/home");
})

batApp.directive('googleMap', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div id="map_canvas" style="width: 100%; height: 100%"></div>',
    scope: {
      location: '=',
      type: '='
    },
    link: function($scope, $element, $attrs) {
      
      drawMap($scope.location);
      
      function drawMap (addr) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'address': addr
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
  
            var mapOptions = {
              zoom: 15,
              center: results[0].geometry.location,
              mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
              },
              scrollwheel: false,
              disableDefaultUI: true,
              clickable:false
            };
  
            window.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  
            window.marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: window.map
            });
          }
        });
      }
      $scope.$watch('type', function(maptype) {
        switch(maptype) {
          case 'satellite': window.map.setMapTypeId(google.maps.MapTypeId.SATELLITE); break;
          case 'hybrid': window.map.setMapTypeId(google.maps.MapTypeId.HYBRID); break;
          case 'terrain': window.map.setMapTypeId(google.maps.MapTypeId.TERRAIN); break;
          default : window.map.setMapTypeId(google.maps.MapTypeId.ROADMAP); break;
        }
      });
      var watchTimer;
      $scope.$watch('location', function(location) {
        if (watchTimer) $timeout.cancel(watchTimer);
        
        watchTimer = $timeout(function () {
          drawMap(location);
        }, 1500);
      });
    }
  }
});

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

batApp.controller('CuriositaController', function($scope, $stateParams) {
    $scope.sezione = "curiosita";

    $scope.doTheBack = function() {
      window.history.back();
    };

});

batApp.controller('SezioneController', function($scope, $stateParams, dataFactory) {

    $scope.comuni = dataFactory.getData('comuni');
    $scope.sezione = $stateParams.sezione;
 

});

batApp.controller('ImpGiovController', function($scope, $stateParams, dataFactory) {
    $scope.sezione = 'imprenditoriagiovanile';
    $scope.titolo = 'Imprenditoria Giovanile';
    $scope.comuni = dataFactory.getData('comuni');

});

batApp.controller('TempLibController', function($scope, $stateParams) {
    $scope.sezione = 'tempolibero';
    $scope.titolo = 'Tempo Libero';
});

batApp.controller('ListaComController', function($scope, $stateParams, dataFactory) {
    $scope.comune = $stateParams.comune;
    $scope.sezione = $stateParams.sezione;
    $scope.associazioni = dataFactory.getData('associazioni');

    $scope.openLeft = function() {
      $scope.sideMenuController.toggleRight();
    };
});

batApp.controller('ListaImpGiovController', function($scope, $stateParams) {
    $scope.comune = $stateParams.comune;
    $scope.sezione = 'imprenditoriagiovanile';
    $scope.titolo = 'Imprenditoria Giovanile';
});

batApp.controller('AssociazioneController', function($scope, $stateParams) {
    $scope.sezione = $stateParams.sezione;
    $scope.comune = $stateParams.comune;
    $scope.associazione = $stateParams.associazione;
    $scope.idass = $stateParams.idass;
    $scope.address = "Andria, Puglia, Italy";
});

batApp.controller('InfoController', function($scope, $stateParams) {
  $scope.sezione = $stateParams.sezione;
  $scope.associazione = $stateParams.associazione;
});

batApp.controller('EventiAssController', function($scope, $stateParams, dataFactory) {
  $scope.sezione = $stateParams.sezione;
  $scope.comune = $stateParams.comune;
  $scope.associazione = $stateParams.associazione;
  $scope.idass = $stateParams.idass;
  $scope.eventi = dataFactory.getData('eventi')
});

batApp.controller('EventoAssController', function($scope, $stateParams) {
    $scope.sezione = $stateParams.sezione;
    $scope.comune = $stateParams.comune;
    $scope.associazione = $stateParams.associazione;
    $scope.idass = $stateParams.idass;
});

batApp.controller('mainCtrl', function($scope, $ionicPlatform, $state) {

  $scope.changeView = function(view){
    $state.go(view); // path not hash
  }

  $scope.address = "Via Andria 100, Barletta, Puglia, Italy";

  /*Platform = $ionicPlatform;

  Platform.ready(function() {
     hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });*/

  $scope.espActive = true;
  $scope.clActive = false;

  $scope.espandi = function(){
    $scope.espActive = !$scope.espActive;
    setTimeout(reloadMap, 1000);
    function reloadMap(){
      google.maps.event.trigger(map, 'resize');
    }
  }

  $scope.chiudi = function(){
    $scope.clActive = false;
    setTimeout(reloadMap, 400);
    function reloadMap(){
      google.maps.event.trigger(map, 'resize');
      var latLng = window.marker.getPosition(); // returns LatLng object
      window.map.panTo(latLng); // setCenter takes a LatLng object
    }
  }

  $scope.doTheBack = function() {
      window.history.back();
  };

});