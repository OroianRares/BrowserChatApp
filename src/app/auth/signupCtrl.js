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

    $scope.send = function(username, password) {

    }
  }

 })();
