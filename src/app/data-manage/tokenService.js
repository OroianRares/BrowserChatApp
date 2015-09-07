/**
 * Created by rares on 07/09/15.
 */
(function tokenServiceIIFE() {
  'use strict';

  angular
    .module('AlgoTechChat.data.manage')
    .factory('tokenService', tokenServiceFunc);

  tokenServiceFunc.$inject = [];

  /* @ngInject */
  function tokenServiceFunc() {
    var tokenSavePath = '#$?';

    return {
      setToken: setToken,
      getToken: getToken,
      existsToken: existsToken,
      deleteToken: deleteToken
    };


    function setToken(token) {
      localStorage[tokenSavePath] = token;
    }

    function getToken() {
      return localStorage[tokenSavePath];
    }

    function existsToken() {
      return getToken();
    }

    function deleteToken() {
      localStorage.removeItem(tokenSavePath);
    }
  }

})();
