'use strict';

angular.module('uiApp')
  .controller('JavaCtrl', function ($scope) {
    $scope.message = 'Hello';
      var vm = this;
      vm.myData = [{name: "MoroniX", age: 50}, {name: "DiegoX", age: 51}, {name: "AndresX", age: 52} ];
  });
