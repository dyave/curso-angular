'use strict';

angular.module('uiApp')
  .controller('AngularCtrl', function ($scope, NgTableParams, $http, Course, lodash) {
    $scope.message = 'Hello';

    var vm = this;
    //var data = [{}];
    /*var data = [{name: "Moroni", age: 50}, {name: "Diego", age: 51}, {name: "Andres", age: 52} ];
    vm.tableParams = new NgTableParams({}, {dataset: data});*/

    // Simple GET request example: (Ejemplo de llamada get con $http)
    $http({
        method: 'GET',
        url: '/api/cursos/angular'
    }).then(function successCallback(response) {
        //console.log(response);
        var d = response.data;
        console.log("Course: " + d.id + " " + d.name + " " + d.key + " ");
        console.log("- Student");
        angular.forEach(d.students, function (value, key){
            console.log(key + ": " + value.name);
        });
    }, function errorCallback(response) {
        //
    });

    //for course.service.js
    vm.getAge = getAge;
    activate();
    function activate() {
        vm.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            getData: getData
        });
    }
    
    function getData() {
        return Course.get('angular').then(function (response) {
            lodash.map(response.students, function(s){
                s.age = getAge(s.birthDate);
            });

            return response.students;
        });
    }

    function getAge(birthDate) {
        return '25';
    }


  });
