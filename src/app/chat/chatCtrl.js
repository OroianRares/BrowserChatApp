/**
 * Created by rares on 07/09/15.
 */
(function chatCtrlIIFE() {
    'use strict';

  angular
    .module('AlgoTechChat.chat')
    .controller('chatCtrl', chatCtrlFunc);

  chatCtrlFunc.$inject = ['$scope', 'dataService', 'tokenService'];

  /* @ngInject */
  function chatCtrlFunc($scope, dataService, tokenService) {
    $scope.message = 'hello!';

    activate();



    function activate() {
      var token = tokenService.getToken();

      //dataService.getUser(token).then(
      //  function(userObj) {
      //    $scope.user = userObj;
      //  }, function(err) {
      //    $scope.getUserFailMsg = err.message;
      //  });

      //$scope.users = dataService.getUsers(token);
    }

    function logout() {
      var token = tokenService.getToken();
      dataService.logout(token);
    }
  }

 })();
