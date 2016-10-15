'use strict';

angular.module('uiApp')
  .controller('AngularCtrl', function ($scope, NgTableParams) {
    $scope.message = 'Hello';

    var vm = this;
    //var data = [{}];
    var data = [{name: "Moroni", age: 50}, {name: "Diego", age: 51}, {name: "Andres", age: 52} ];
    vm.tableParams = new NgTableParams({}, {dataset: data});

  });
