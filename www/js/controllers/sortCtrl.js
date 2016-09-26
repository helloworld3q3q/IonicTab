define(function () {
    'use strict';
    function ctrl($scope, $mainServices) {
        $mainServices.showLoading();
        $mainServices.hideLoding();
    }

    ctrl.$inject = ['$scope', '$mainServices'];
    return ctrl;
    
});