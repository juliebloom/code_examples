/* Controllers */angular.module("myApp.controllers",[]).controller("NullCtrl",[function(){"use strict";}]).controller("DogListCtrl",["$scope","$http","$route",function(e,t,n){e.query={};e.queryBy="$";t.get("data/dogs.json").success(function(t,n,r,i){e.dogs=t;if(typeof localStorage!="undefined")var s=localStorage.getItem("mod")}).error(function(e,t,n,r){});e.$route=n}]);