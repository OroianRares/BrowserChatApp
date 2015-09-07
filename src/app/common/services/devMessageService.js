/**
 * Created by rares on 07/09/15.
 */
(function devMessageServiceIIFE() {
    'use strict';

  angular
    .module('common.services')
    .factory('devMessageService', devMessageServiceFunc);

  devMessageServiceFunc.$inject = ['$log'];

  /* @ngInject */
  function devMessageServiceFunc($log) {
    var service = {
      message: message,
      warning: warning,
      info: info,
      error: error,
      debug: debug
    };

    return service;


    function message(msg, sender) {
      $log.log(adjustSender(sender), msg);
    }

    function warning(msg, sender) {
      $log.warn(adjustSender(sender), msg);
    }

    function error(msg, sender) {
      $log.error(adjustSender(sender), msg);
    }

    function info(msg, sender) {
      $log.info(adjustSender(sender), msg);
    }

    function debug(msg, sender) {
      $log.debug(adjustSender(sender), msg);
    }

    function adjustSender(sender) {
      if (sender) {
        return sender+': ';
      } else {
        return '';
      }
    }
  }

})();
