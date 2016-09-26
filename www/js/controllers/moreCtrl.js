/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $mainServices, $moreServices) {
        $moreServices.get(function(data){
            $scope.addr = data.addr;
        });
    }

    ctrl.$inject = ['$scope', '$mainServices', '$moreServices'];
    return ctrl;
    
});