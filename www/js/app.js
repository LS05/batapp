var batApp = angular.module('batapp', ['ionic', 'ngSanitize']);

batApp.factory('dataFactory', function() {
  var res;
  var comuni = [ {title: 'Andria'}, {title: 'Trani'} ];

  var curiosita = [
    { 
      id: '1',
      nome: 'Lo sapevate che...',
      comune: 'Andria',
      descrizione: "Il Castel del Monte, opera medievale risalente al 1240 circa, è dal 1996 Patrimonio dell’Unesco. Queste le parole del Comitato del Patrimonio Mondiale Unesco ha usato per motivare la propria scelta: <br /><b>“Castel del Monte possiede un valore universale eccezionale per la perfezione delle sue forme, l'armonia e la fusione di elementi culturali venuti dal Nord dell'Europa, dal mondo Musulmano e dall'antichità classica. È un capolavoro unico dell'architettura medievale, che riflette l'umanesimo del suo fondatore: Federico II di Svevia.”</b>"
    },
    { 
      id: '2',
      nome: 'Storia di un primato stravagante...',
      comune: 'Andria',
      descrizione: "Conteso il primato da Ripatransone, paesino nel Maceratese, che nel Guinness dei Pimati ci è entrato, pare che la verità risieda nella nostra Città: ebbene sì, la stradina più piccola del Mondo è ad Andria, 1° Vicolo San Bartolomeo, in piano Centro Antico. <br />Si deve a Padre Pinto la misurazione delle due Stradine succitate, e la conseguente scoperta: qui ad Andria si tratta di una straduzza che può essere percorsa da una persona sola per volta, non due di fianco, come succede a Ripatransone."
    },
    { 
      id: '3',
      nome: 'False friends',
      comune: 'Andria',
      descrizione: "Anche la lingua andriese vanta dei Falsefriends, come l’Inglese!<br />Uno dei primi consigli?!: bhè, diffidate dai DOLCI. <br />La parola Dolce, che in italiano denota una torta, qualcosa di zuccherino ma anche una qualità in una persona delicata nei modi e affabile nei modi ad Andria ribalta il proprio utilizzo.<br />Dolce ad andria, se riferito a persone, non è un complimento, tutt’altro: Dolce è la persona ingenua, sprovveduta, stupidotta, bonacciona (detto anche “alla bbòun” = alla buona), insomma, che non brilli per arguzia."
    },
    { 
      id: '4',
      nome: 'Tòpos',
      comune: 'Andria',
      descrizione: "Luoghi cult Andriesi: ad Andria, che si tratti dell'imprenditore milionario, o della “zecca- metallara” che trascorre il tempo IN VILLA con i cani, un modo per trovarli tutti raggruppati in una goliradica situazione conviviale c’è: si tratta dei Chioschetti allo Stadio (altrimenti detti “Z’ zzéus”= “sporchi”).<br />Ogni città con della vita giovanile ne è provvista! Nella città di Andria la più vasta scelta per abbinamenti culinari (gourmet e meno) arditi e impensabili li trovi nei Chioschetti Ambulanti che la sera, e solo di sera, costellano il perimentro dello Stadio. Non c’è soggetto che resista, di qualsiasi appartenenza sociale sia...qui da noi i luoghi sacri non sono solo le Chiese, ma anche questi Camioncini ambulanti spacciatori di ebrezze da cibo."
    },
    { 
      id: '5',
      nome: 'Le Colonne d’Ercole...',
      comune: 'Andria',
      descrizione: "La storia delle Colonne d’ Ercole la conosciamo: nell’ antichità si pensava che queste colonne, situate presso lo Stretto di Gibilterra, segnassero la “fine” del Mondo, ovvero oltre questo spazio si pensava ci fosse il Nulla.<br />Bene, un “dentro- fuori” ce l’ avevamo anche qua: non le famose “Porte della città” ma...il negozio BANANE.<br />Sì, ad Andria era, fino a un ventennio fa, il rivenditore di Banane, situato alla fine di Viale Venezia Giulia, verso via Barletta a delimitare il confine della città: Dentro-Banane la civiltà, Fuori-Banane l'ignoto, la periferia, il bhò."
    }
  ]

  var associazioni = [
    { 
      id: '1',
      nome: 'Teatro Sospeso',
      posizione: 'Andria',
      comune: 'Andria',
      categoria: ['cultura'],
      descrizione: "La compagnia teatrale Teatro Sospeso  nasce ad Andria nell’aprile 2010, dall’incontro tra il regista ed attore Domenico Tacchio e l’autore e poeta Francesco Di Niccolo. Data la comunione di obiettivi ed ideali, nel settembre 2010 danno vita all’Associazione di promozione culturale  ”Teatro Sospeso“, dedita all’organizzazione ed alla diffusione della conoscenza delle arti e nella specie del teatro. Attualmente sono membri soci dell’Associazione Teatro Sospeso: Dora Leonetti, presidente, e Domenico Tacchio, tesoriere,  coadiuvati da alcuni soci ordinari che amano il teatro: Raffaella Ardito, Annalisa Conversano e Mariangela Melo."
    },
    {
      id: '2',
      nome: "Carsica, l'associazione culturale",
      posizione: 'Via Corradino di Svevia, 10',
      comune: 'Andria',
      categoria: ['cultura'],
      descrizione: "Carsica simboleggia la permeabilità alle influenze, alla contaminazione, alle collaborazioni. Simbolo di trasversalità delle discipline, Carsica, l'associazione culturale è nata ad Andria nel 2011. Il suo scopo e quello di contribuire alla diffusione della cultura e delle pratiche artistiche, nonché alla creazione di momenti di formazione e riflessione a stretto contatto con il territorio pugliese (e in particolare murgiano) e le sue risorse."
    },
    { 
      id: '3',
      nome: 'C.A.T. Imprese Nord Baresi s.r.l.',
      posizione: 'Via Malcangi, 197',
      comune: 'Trani',
      categoria: ['cultura', 'ambiente', 'imprenditoria', 'salute'],
      descrizione: "<div id=\"telass\">Tel:0883 / 88.82.36</div><br />E’ una società di servizi alle imprese finalizzata a sviluppare e promuovere i processi di ammodernamento della rete distributiva, a sostenere e migliorare il rapporto tra le Piccole e Medie Imprese (PMI) e le Pubbliche Amministrazioni comunali, provinciali e regionali, nonché, attraverso convenzioni e delega, anche con professionisti specializzati, alla erogazione di servizi pubblici e privati.<br />A tali scopi il C.A.T. Imprese Nord Baresi s.r.l. fornisce, nel territorio della Regione Puglia, in particolare in quello della Provincia Barletta Andria Trani, a tutte le imprese esistenti o da  promuovere, che ne facciano richiesta, a parità di condizione e senza alcuna discriminazione di genere, a prescindere dell’appartenenza o meno a Confesercenti servizi di:<br />- Assistenza<br />- Formazione<br />- Consulenza<br />- Finanziamenti<br />- Internazionalizzazione"
    },
    { 
      id: '4',
      nome: 'Ambiente Sano',
      posizione: 'Via Giuseppe Giusti, 8',
      comune: 'Andria',
      categoria: ['ambiente'],
      descrizione: ''
    },
    { 
      id: '5',
      nome: 'RivaSu',
      posizione: 'Via Trani, 54',
      comune: 'Andria',
      categoria: ['imprenditoria'],
      descrizione: "RivaSu si occupa di rivalutare il mezzogiorno. Lo fa partendo da Andria, con un'ottica speciale per quanto riguarda imprese innovative e nuove tecnologie."
    },
    { 
      id: '6',
      nome: 'A.S.D. Andria',
      posizione: 'Via Morelli, 18',
      comune: 'Andria',
      categoria: ['tempolibero'],
      descrizione: "Ci occupiamo da anni di Sport. Organizziamo eventi e corsi sportivi di ogni genere: Nuoto, Calcio, Pallavolo e Basket. Oggi vantiamo anche un'ampia scelta di arti marziali."
    },
    { 
      id: '7',
      nome: 'Avis Andria',
      posizione: 'Via S. Jannuzzi, 7',
      comune: 'Andria',
      categoria: ['salute'],
      descrizione: 'La sezione AVIS di Andria è da 19 anni uno dei punti di riferimento territoriali per tutti coloro che volontariamente, gratuitamente e  periodicamente donano  il proprio sangue rispondendo fattivamente alle richieste di chi si trova in una situazione di bisogno e neccessità. <br /><br />Negli ultimi anni, la sezione ha riscosso sempre consenso, registrando un sensibile aumento delle quote sociali e, sopratutto,  delle donazioni, arruivando ad essere una delle sezioni più attive della regione. <br /><br />Uno degli obiettivi prefissati è il coinvolgimento  delle fasce più giovani della popolazione.'
    }

  ];

  var eventi = [
    { 
      id: '1',
      nome: "Laboratorio Teatrale: L\'avanguardia",
      posizione: 'Via Sandro Pertini, Ruvo di Puglia',
      data: ['27', 'Mar'],
      orario: '20:30',
      idassociazione: '1',
      descrizione: "...Ogni movimento, scuola, corrente artistica o ideologica che si pone fuori della tradizione propugnando concezioni nuove e rivoluzionarie. Via aspettiamo per discuterne a Ruvo."
    },
    { 
      id: '2',
      nome: "Laboratorio Teatrale: La tragedia Greca",
      posizione: 'Via Sandro Pertini, Ruvo di Puglia',
      data: ['28', 'Mar'],
      orario: '19:00',
      idassociazione: '1',
      descrizione: "La tragedia greca è un genere teatrale nato nell'antica Grecia, la cui messa in scena era, per gli abitanti della Atene classica, una cerimonia di tipo religioso con forti valenze sociali."
    },
    { 
      id: '3',
      nome: "Laboratorio Teatrale: Il teatro nel rinascimento",
      posizione: 'Corso Cavour 20, Andria',
      data: ['2', 'Apr'],
      orario: '21:00',
      idassociazione: '1',
      descrizione: "Il teatro rinascimentale è l'unione dei generi drammaturgici e delle diverse forme di rappresentazione teatrale scritti e praticati in Europa tra la fine del Medioevo e l'inizio dell'età moderna."
    }
  ];

  return {
      getCusCom: function(){
          var Set = function() {}
          Set.prototype.add = function(o) { this[o] = o; }
          Set.prototype.remove = function(o) { delete this[o]; }
          var cusCom = new Set();

          for (k in curiosita) {
              var ar = curiosita[k].comune;
              cusCom.add(ar);
          }

          return cusCom;
      },
      getListCus: function(comune){
          var listCus = []

          for (k in curiosita) {
              var ar = curiosita[k].comune;
              if(ar.toLowerCase() == comune){
                listCus.push(curiosita[k]);
              }
          }

          return listCus;
      },
      getCus: function(idCus){
          var cusRes;

          for (k in curiosita) {
              if(curiosita[k].id == idCus){
                cusRes = curiosita[k];
              }
          }

          return cusRes;
      },
      getComuneCat: function(cat){
          var Set = function() {}
          Set.prototype.add = function(o) { this[o] = o; }
          Set.prototype.remove = function(o) { delete this[o]; }
          var ret = new Set();

          for (k in associazioni) {
              var ar = associazioni[k].categoria;
              var c = ar.indexOf(cat);              
              if(c != -1)
                ret.add(associazioni[k].comune);
          }

          return ret;
      },
      getAssociazioni: function(cat, com){
          var ascs = [];
          for (k in associazioni) {
              var ar = associazioni[k].categoria;
              var c = ar.indexOf(cat);
              if(c != -1 && associazioni[k].comune.toLowerCase() == com)
                ascs.push(associazioni[k]);
          }

          return ascs;
      },
      getEventiAss: function(idAss){
          var evtarr = [];
          
          for(k in eventi){
            if(eventi[k].idassociazione == idAss)
              evtarr.push(eventi[k]);
          }


          return evtarr;
      },
      getAssociazione: function(idAss){
        var ass;

        for (k in associazioni) {
          if(associazioni[k].id == idAss)
            ass = associazioni[k];
        }

        return ass;
      },
      getEvento: function(idEvt){
        var evt;

        for (k in eventi) {
          if(eventi[k].id == idEvt){
            evt = eventi[k];
          }
        }

        return evt;
      },
      getEventoAss: function(idAss, idEvento){
        var evtRes;

        for (k in eventi) {
          if(eventi[k].id == idEvento && eventi[k].idassociazione == idAss){
            evtRes = eventi[k];
          }
        }
        return evtRes;

      },
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
      url: "/sezassoc/:sezione/:comune/:associazione/:idass/eventi/:evento/:idevento",
      templateUrl: "eventoass.html",
      controller: 'EventoAssController'
    })
    .state('eventi', {
      url: "/eventi",
      templateUrl: "eventi.html",
      controller: 'mainCtrl'
    })
    .state('evento', {
      url: "/eventi/:eventoid/:evento",
      templateUrl: "evento.html",
      controller: 'EventoCtrl'
    })
    .state('curiosita', {
      url: "/curiosita",
      templateUrl: "curiosita.html",
      controller: 'CuriositaController'
    })
    .state('listacuriosita', {
      url: "/curiosita/:comune",
      templateUrl: "listacuriosita.html",
      controller: 'ListaCuriositaController'
    })
    .state('infocuriosita', {
      url: "/curiosita/:comune/:curnome/:curid",
      templateUrl: "infocuriosita.html",
      controller: 'InfoCuriositaController'
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
              zoom: 16,
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

batApp.controller('CuriositaController', function($scope, $stateParams, dataFactory) {
    $scope.comuni = dataFactory.getCusCom();
    $scope.sezione = "curiosita";
    $scope.titleListCur = "Scegli un Comune"
});

batApp.controller('ListaCuriositaController', function($scope, $stateParams, dataFactory) {
    $scope.comune = $stateParams.comune;
    $scope.infoTitle = "Curiosità"
    $scope.curiosita = dataFactory.getListCus($stateParams.comune);
});

batApp.controller('InfoCuriositaController', function($scope, $stateParams, dataFactory) {
    $scope.comune = $stateParams.comune;
    $scope.curiosita = dataFactory.getCus($stateParams.curid);
});

batApp.controller('SezioneController', function($scope, $stateParams, $state, dataFactory) {
    $scope.comuni = dataFactory.getComuneCat($stateParams.sezione);
    $scope.sezione = $stateParams.sezione;
    $scope.titleSezione = "Scegli un Comune";
    console.log($scope);
 });

batApp.controller('ImpGiovController', function($scope, $stateParams, dataFactory) {
    $scope.sezione = 'imprenditoriagiovanile';
    $scope.titolo = 'Imprenditoria Giovanile';
    $scope.titleSezione = "Scegli un Comune"
    $scope.comuni = dataFactory.getComuneCat("imprenditoria");
});

batApp.controller('TempLibController', function($scope, $stateParams, dataFactory) {
    $scope.sezione = 'tempolibero';
    $scope.titolo = 'Tempo Libero';
    $scope.comuni = dataFactory.getComuneCat("tempolibero");
});

batApp.controller('ListaComController', function($scope, $stateParams, dataFactory) {
    $scope.comune = $stateParams.comune;
    $scope.sezione = $stateParams.sezione;
    $scope.titoloLista = "Associazioni";

    $scope.associazioni = dataFactory.getAssociazioni($stateParams.sezione, $stateParams.comune);

});

batApp.controller('ListaImpGiovController', function($scope, $stateParams, dataFactory) {
    $scope.comune = $stateParams.comune;
    $scope.sezione = 'imprenditoriagiovanile';
    $scope.titoloLista = "Associazioni";
    $scope.associazioni = dataFactory.getAssociazioni("imprenditoria", $stateParams.comune);
    console.log($scope.associazioni);
    $scope.titolo = 'Imprenditoria Giovanile';
});

batApp.controller('AssociazioneController', function($scope, $stateParams, dataFactory) {
    $scope.sezione = $stateParams.sezione;
    $scope.comune = $stateParams.comune;
    $scope.associazione = $stateParams.associazione;
    $scope.idass = $stateParams.idass;
    $scope.associazione = dataFactory.getAssociazione($stateParams.idass);
    $scope.address = $scope.associazione.posizione + ", " + $scope.associazione.comune;
    $scope.titleAss = "Associazione";
});

batApp.controller('InfoController', function($scope, $stateParams, dataFactory) {
  $scope.sezione = $stateParams.sezione;
  $scope.associazione = $stateParams.associazione;
  $scope.infoTitle = "Info Associazione"
  $scope.associazione = dataFactory.getAssociazione($stateParams.idass);
});

batApp.controller('EventiAssController', function($scope, $stateParams, dataFactory) {
  $scope.sezione = $stateParams.sezione;
  $scope.comune = $stateParams.comune;
  $scope.associazione = dataFactory.getAssociazione($stateParams.idass);
  $scope.idass = $stateParams.idass;
  $scope.eventi = dataFactory.getEventiAss($stateParams.idass);  
  $scope.titleEventi = "Eventi";
});

batApp.controller('EventoAssController', function($scope, $stateParams, dataFactory) {
    $scope.sezione = $stateParams.sezione;
    $scope.comune = $stateParams.comune;
    $scope.evento = dataFactory.getEventoAss($stateParams.idass, $stateParams.idevento);
    $scope.idass = $stateParams.idass;
    $scope.address = $scope.evento.posizione;
});

batApp.controller('EventoCtrl', function($scope, $stateParams, $state, dataFactory) {
  $scope.evento = dataFactory.getEvento($stateParams.eventoid);
  $scope.associazione = dataFactory.getAssociazione($scope.evento.idassociazione);
  $scope.address = $scope.evento.posizione;
});

batApp.controller('mainCtrl', function($scope, $stateParams, $ionicPlatform, $state, dataFactory) {

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

  $scope.eventi = dataFactory.getData('eventi');
  $scope.comuni = dataFactory.getData('comuni');
  $scope.associazioni = dataFactory.getData('associazioni');

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