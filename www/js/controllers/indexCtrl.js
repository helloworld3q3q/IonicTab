define(['mainCtrl'], function () {
    'use strict';
    function ctrl($scope, $mainServices, $indexServices, $ionicTabsDelegate, $ionicSlideBoxDelegate) {
        $mainServices.showLoading();
        $indexServices.get(function(data){

            if(data !== null && data !== undefined){
                $mainServices.hideLoding();
            }
            $scope.bannerList = data.banner.item;
            $scope.couponList = data.coupon.item;
            $scope.dazheList = data.tejia.item;
        });
    }

    ctrl.$inject = ['$scope', '$mainServices', '$indexServices', '$ionicTabsDelegate', '$ionicSlideBoxDelegate'];
    return ctrl;
    
});