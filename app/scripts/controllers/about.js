'use strict';

/**
 * @ngdoc function
 * @name myfirstappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myfirstappApp
 */
angular.module('myfirstappApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('about js');
  });
