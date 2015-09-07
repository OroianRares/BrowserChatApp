/**
 * Created by rares on 07/09/15.
 */
(function chatCtrlIIFE() {
    'use strict';

  angular
    .module('AlgoTechChat.chat')
    .controller('chatCtrl', chatCtrlFunc);

  chatCtrlFunc.$inject = ['$scope'];

  /* @ngInject */
  function chatCtrlFunc($scope) {
    $scope.message = 'hello!';
  }

 })();
