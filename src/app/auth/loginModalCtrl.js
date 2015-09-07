/**
 * Created by rares on 04/09/15.
 */
(function loginModalCtrlIIFE() {
    'use strict';

  angular
    .module('AlgoTechChat.auth')
    .controller('loginModalCtrl', loginModalCtrlFunc);

  loginModalCtrlFunc.$inject = ['$scope', '$modal', '$log'];

  /* @ngInject */
  function loginModalCtrlFunc($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.animationsEnabled = true;

    $scope.open = function (size) {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/auth/loginModalTemplate.html',
        controller: 'loginModalCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result
        .then(function (selectedItem) {
          // passes through here when the modal is closed
          $log.info('Modal closed');
        }, function () {
          // passes through there when the modal is dismissed
           $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.dismiss = function() {
      $scope.$dismiss();
    };

    $scope.close = function() {
      $scope.$close();
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  }

 })();
