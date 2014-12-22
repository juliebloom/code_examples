(function() {
  'use strict';

  // Declare app level module which depends on views, and components

  var app = angular.module('myApp', ['ngRoute','myApp.controllers','myApp.directives','myApp.version']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/grid-view.html',
      controller: 'DogListCtrl',
      activeNav: 'grid'
    });
    $routeProvider.when('/grid-view', {
      templateUrl: 'partials/grid-view.html',
      controller: 'DogListCtrl',
      activeNav: 'grid'
    });
    $routeProvider.when('/list-view', {
      templateUrl: 'partials/list-view.html',
      controller: 'DogListCtrl',
      activeNav: 'list'
    });

  }]);
}());