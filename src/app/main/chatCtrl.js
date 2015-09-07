angular
  .module('AlgoTechChat')
  .controller('chatCtrl', chatCtrlFunc);

chatCtrlFunc.$inject = ['$scope'];

/* @ngInject */
function chatCtrlFunc($scope) {
  /* jshint validthis: true */
  $scope.hello="hello!";
}
