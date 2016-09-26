/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $mapServices) {
        $mapServices.goFunc();
    }

    ctrl.$inject = ['$scope', '$mapServices'];
    return ctrl;
    
});