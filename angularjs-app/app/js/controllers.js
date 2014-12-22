
/* Controllers */

angular.module('myApp.controllers', []).
  controller('NullCtrl', [function() {
    'use strict';

  }])
  .controller('DogListCtrl', ['$scope', '$http', '$route', function(scope, $http, $route) {
    scope.query = {};
    scope.queryBy = '$';
    $http.get('data/dogs.json').
      success(function(data, status, headers, config) {
      scope.dogs = data;
      if (typeof localStorage !== "undefined") {
          var x = localStorage.getItem('mod');
          //console.log('in there');
          
      } else {
         
      }
    }).
    error(function(data, status, headers, config) {
      // log error
    });

    scope.$route = $route;
    
  }]);