'use strict';

angular
  .module('AlgoTechChat', [
    'ngTouch',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'AlgoTechChat.auth',
    'AlgoTechChat.chat',
    'common.services'
  ])
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
      })
      .state('chat', {
        url: '/chat/',
        templateUrl: 'app/chat/chatView.html',
        controller: 'chatCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
