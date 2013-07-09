'use strict';

angular.module('angularSPMApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/topup',{
        templateUrl: 'views/topup.html',
        controller: 'TopUpCtrl'
      })
      .when('/topup/truemove',{
        templateUrl: 'views/topup-truemove.html',
        controller: 'TopUpTrueMoveCtrl'
      })
      .when('/topup/result',{
        templateUrl: 'views/topup-result.html',
        controller: 'TopUpResultCtrl'
      })
      .when('/back/:firstpage',{template: " ",controller: 'BackCtrl'})
      .when('/back/:firstpage/:secondpage',{template: " ",controller: 'BackCtrl'})
      .otherwise({
        redirectTo: '/'
      });
  });
