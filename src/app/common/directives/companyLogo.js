/**
 * Created by rares on 04/09/15.
 */
angular
    .module('chat')
    .directive('companyLogo', companyLogoFunc);

function companyLogoFunc() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/common/templates/companyLogo.html'
    }
}

