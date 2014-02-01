var batApp = angular.module('batapp', ['ionic', 'ui.router', 'ngRoute']);

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
    .state('sezione', {
      url: "/sezassoc/:sezione",
      templateUrl: "comingsoon.html",
      controller: 'mainCtrl'
    })
    .state('associazioni', {
      url: "/sezassoc/:sezione/:comune",
      templateUrl: "comingsoon.html",
      controller: 'mainCtrl'
    })
    .state('associazione', {
      url: "/sezassoc/:sezione/:comune/:associazione/:idass",
      templateUrl: "comingsoon.html",
      controller: 'mainCtrl'
    })
    .state('eventi', {
      url: "/eventi",
      templateUrl: "comingsoon.html",
      controller: 'mainCtrl'
    })
    .state('evento', {
      url: "/eventi/:evento",
      templateUrl: "comingsoon.html",
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
              disableDefaultUI: true
            };
  
            window.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  
            var marker = new google.maps.Marker({
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

batApp.controller('SezioneController', function($scope, $stateParams) {
    $scope.sezione = $stateParams.sezione;
    $scope.testFunction = function(elem){

      var s = document.getElementById(elem);

      /*for(var i = 0; i < 100; i++) {
        var li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = 'Item ' + i;
        s.firstElementChild.appendChild(li);
      }*/

      var scroll = new ionic.views.Scroll({
        el: s
      });



    };

    $scope.doTheBack = function() {
      window.history.back();
    };

    if( $scope.sezione == 'imprenditoriagiovanile' )
      $scope.impgiov = 'Imprenditoria Giovanile';
});

batApp.controller('ListaComController', function($scope, $stateParams) {
    $scope.comune = $stateParams.comune;
    $scope.sezione = $stateParams.sezione;

    $scope.openLeft = function() {
      $scope.sideMenuController.toggleRight();
    };

    $scope.doTheBack = function() {
      window.history.back();
    };
});

batApp.controller('AssociazioneController', function($scope, $stateParams) {
    $scope.sezione = $stateParams.sezione;
    $scope.comune = $stateParams.comune;
    $scope.associazione = $stateParams.associazione;
    $scope.idass = $stateParams.idass;
    $scope.address = "Andria, Puglia, Italy";
    $scope.doTheBack = function() {
      window.history.back();
    };
    console.log($scope);
});

batApp.controller('mainCtrl', function($scope, $ionicPlatform, $state) {

  $scope.leftButtons = [
    { 
      type: 'button-positive',
      content: '<i class="ion-arrow-left-c" id="back"></i>',
      tap: function(e) {
          $state.go("home");
      }
    }
  ];

  $scope.address = "Andria, Puglia, Italy";

  Platform = $ionicPlatform;

  Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });

  $scope.espandi = function(){
    $scope.animation = 'pullDown';
    $scope.mapsize = 'evtmap';
    $scope.mapdisp = 'hidmap'
  }

  $scope.doTheBack = function() {
      window.history.back();
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
      id: '1',
      nome: 'Associazione Modellistica Castel del Monte',
      posizione: 'Via Castel del Monte, 80'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    },
    { 
      id: '2',
      nome: 'Associazione Via Trani',
      posizione: 'Via Trani, 54'
    }


  ];

});