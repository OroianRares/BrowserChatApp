/**
 * Created by rares on 04/09/15.
 */

(function loginFormDirectiveIIFE() {
  'use strict';

  angular
    .module('chat')
    .directive('loginForm', loginFormFunc);

  function loginFormFunc() {
    return {
      restrict: 'E',
      scope: {
        postUrl: '='
      },
      templateUrl: 'app/common/templates/loginForm.html'
    }
  }

 })();
