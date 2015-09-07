/**
 * Created by rares on 07/09/15.
 */
(function chatCtrlIIFE() {
    'use strict';

  angular
    .module('AlgoTechChat.chat')
    .controller('chatCtrl', chatCtrlFunc);

  chatCtrlFunc.$inject = ['$scope', 'dataService'];

  /* @ngInject */
  function chatCtrlFunc($scope, dataService) {
    $scope.message = 'hello!';
    dataService.getUsers();
  }

 })();
