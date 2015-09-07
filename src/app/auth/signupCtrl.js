/**
 * Created by rares on 04/09/15.
 */
(function signupCtrlIIFE() {
    'use strict';

  angular
    .module('chat.auth')
    .controller('signupCtrl', signupCtrlFunc);

  signupCtrlFunc.$inject = ['$scope'];

  /* @ngInject */
  function signupCtrlFunc($scope) {

    $scope.send = function(username, password, passwordRe) {
      if (!username) {
        $scope.invalidationMessage = "You must enter a valid username";
        return;
      }

      if (!password) {
        $scope.invalidationMessage = "You must enter a valid password";
        return;
      }

      if (!passwordRe) {
        $scope.invalidationMessage = "You must repeat your password";
        return;
      }

      if (password != passwordRe) {
        $scope.invalidationMessage = "Password do NOT match!";
        user.password = "";
        user.passwordRe = "";
        return;
      }

      console.log('send call');
    }
  }

 })();
