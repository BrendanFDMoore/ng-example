var exampleApp = angular.module('exampleApp', []);

exampleApp.controller('ExampleCtrl', function ($scope) {
  $scope.switchIsOn = false;
  $scope.flipSwitch = function(){
  	$scope.switchIsOn = !$scope.switchIsOn;
  }
});