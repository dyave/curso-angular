'use strict';

angular.module('uiApp')
  .controller('DirectivesCtrl', function ($scope, $filter) {
    var vm = this;

    vm.message = 'success';
    // vm.showMenu = true;
    vm.show = true;
    vm.showMenu = function(){
      vm.show = !vm.show;
      return vm.show;
    };
    
    //2016-10-05
    vm.timeNow = new Date();

    vm.myObject = {
      name: 'Diego',
      age: 25,
    };
    vm.price = 50;
    vm.users = [{name:"Juan"}, {name:"Andres"}, {name:"Diego"},{name:"Pedro"}, {name:"Brian"}, {name:"Rodrigo"}];
    
    vm.cadena = "Saludos mortal";

    vm.filtered = $filter('myFilter')(vm.message, 'M');
    vm.filteredDate = $filter('date')(vm.timeNow, 'dd-MM-yyyy HH:mm:ss', '-0400');
  });
