'use strict';

angular.module('chat', ['ngTouch', 'restangular', 'ui.router', 'ui.bootstrap', 'chat.auth'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'chatCtrl'
      })
      .state('signup', {
        url: '/signup/',
        templateUrl: 'app/auth/signupView.html',
        controller: 'signupCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
