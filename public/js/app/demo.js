(function () {

  var appModule = angular.module('demoApp', ['chart.js', 'btford.socket-io']);


  appModule.controller('TitleController', function ($scope) {
    $scope.title = "Welcome to this angular demo App";
  });

  appModule.factory('mySocket', function(socketFactory){
    return socketFactory();
  });

  appModule.controller('ChartController', function ($scope, mySocket){
    $scope.labels = ['Yes', 'No', 'Dunno'];
    $scope.resetText = 'Reset';
    $scope.data;

    mySocket.on('poll', function(data){
      $scope.data = data;
      console.log(data);
    });

    $scope.sendChoice = function(choice){
      mySocket.emit('vote', choice);
    }

    $scope.reset = function(){
      mySocket.emit('reset');
    }
  })
})();

