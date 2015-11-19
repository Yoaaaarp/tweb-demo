(function () {

  var appModule = angular.module('demoApp', ['chart.js', 'btford.socket-io', 'ui.router']);


  appModule.controller('TitleController', function ($scope) {
    $scope.title = "Welcome to this angular demo App";
  });

  appModule.factory('mySocket', function(socketFactory){
    return socketFactory();
  });

  appModule.config(function( $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('poll');

    $stateProvider.state('poll', {
      templateUrl: 'partials/poll',
      url: '/poll'
    });

    $stateProvider.state('chart', {
      templateUrl: 'partials/chart',
      url: '/chart'
    });

    $stateProvider.state('debug', {
      templateUrl: 'partials/debug',
      url: '/debug'
    });
  });

  appModule.controller('ChartController', function ($scope, mySocket){
    $scope.questionText = 'Do you like cats ?';
    $scope.labels = ['Yes', 'No', 'Dunno'];
    $scope.resetText = 'Reset';
    $scope.data;

    mySocket.on('poll', function(data){
      $scope.data = data;
      console.log(data);
    });

    $scope.sendChoice = function(choice){
      mySocket.emit('vote', choice);
    };

    $scope.reset = function(){
      mySocket.emit('reset');
    };
  });

})();

