(function(){"use strict";angular.module("myApp.directives",[]).directive("searchBox",[function(){return{restrict:"E",replace:!0,templateUrl:"partials/searchbox.html",controller:"DogListCtrl"}}]).directive("draggable",[function(){return{restrict:"C",replace:!1,link:function(e,t,n){$(this).draggable({connectToSorttable:".grid-view",helper:"clone",revert:"invalid"});$(".grid-view").sortable({revert:!0,update:function(e,t){var n=[];$(".grid-view .draggable .dog-name").each(function(e){var t=$(this).html();n.push(t)});localStorage.setItem("dogList",n);console.log(localStorage.getItem("dogList"))}})}}}])})();