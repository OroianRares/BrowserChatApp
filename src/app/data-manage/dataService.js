/**
 * Created by rares on 07/09/15.
 */
(function dataServiceIIFE() {
    'use strict';

  angular
    .module('AlgoTechChat.data.manage')
    .factory('dataService', dataServiceFunc);

  dataServiceFunc.$inject = ['Restangular'];

  /* @ngInject */
  function dataServiceFunc(Restangular) {
    var baseUsers = Restangular.all('users');
    var service = {
      login: login,
      logout: logout,
      createAccount: createAccount,

      getUser: getUser,
      updateUser: updateUser,
      getUsers: getUsersList
    };

    return service;


    function login(email, password) {

    }

    function logout(token) {

    }

    function updateUser(user) {
      return user.save();
    }

    function getUsersList(token) {
      return baseUsers.all('').getList().$object;
    }

    function createAccount(newAccount) {
      return baseUsers.post(newAccount);
    }

    function getUser(token) {

    }


  }


})();
