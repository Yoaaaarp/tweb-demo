(function () {

  var appModule = angular.module('demoApp', ['chart.js']);


  appModule.controller('TitleController', function ($scope) {
    $scope.title = "Welcome to this angular demo App";
  });

  appModule.controller('ChartController', function ($scope){
    $scope.labels = ['Yes', 'No', 'Dunno'];
    $scope.data = [400,300,125];
  })

})();

