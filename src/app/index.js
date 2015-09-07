'use strict';

angular
  .module('AlgoTechChat', [
    'ngTouch',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'AlgoTechChat.auth',
    'AlgoTechChat.chat',
    'AlgoTechChat.data.manage',
    'common.services'
  ])
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
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


    RestangularProvider
      .setBaseUrl('http://10.0.1.15:7000/api/');


  })
;
