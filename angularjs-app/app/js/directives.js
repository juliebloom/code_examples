(function(){
'use strict';

/* Directives */



angular.module('myApp.directives', [])
  .directive('searchBox', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/searchbox.html',
      controller: 'DogListCtrl'
    };
  }])
  .directive('draggable', [function(){
    return {
      restrict: "C",
      replace: false,
      link: function (scope, elem, attr) {
        $(this).draggable({
          connectToSorttable: ".grid-view",
          helper: "clone",
          revert: "invalid"
        });
        $('.grid-view').sortable({
          revert: true,
          update: function(event,ui) {
            var dogOrder = [];
            $('.grid-view .draggable .dog-name').each(function(index){
              var dKey = $(this).html();
              dogOrder.push(dKey);
            }); 
            localStorage.setItem('dogList',dogOrder);
            console.log(localStorage.getItem('dogList'));
          }
        });
      }
    };
  }])
}());
