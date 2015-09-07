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
      updateUser: updateUser,
      getUsers: getUsersList,
      createAccount: createAccount,
      getUser: getUser
    };

    return service;


    function updateUser(user) {
      return user.save();
    }

    function getUsersList() {
      return baseUsers.all('').getList().$object;
    }

    function createAccount(newAccount) {
      return baseUsers.post(newAccount);
    }

    function getUser(token) {

    }


  }


})();
