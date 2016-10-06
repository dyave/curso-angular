'use strict';


function myFilter1 () {
    return function (input, param) {
      if (param === 'm') {
        return input.toLowerCase();
      } else if(param === 'M'){
        return input.toUpperCase();
      }
      return input;
    };
}

angular.module('uiApp')
  .filter('myFilter', myFilter1);
