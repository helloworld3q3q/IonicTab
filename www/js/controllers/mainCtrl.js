/*global define*/

define(['ionicAngular'], function (ionicAngular) {
    'use strict';

    function ctrl($scope, $ionicPlatform, $ionicTabsDelegate, $ionicSideMenuDelegate, $templateCache) {
       /* $scope.tabmore = {
            show: false
        };
        $scope.header = {
            show: true
        };*/  
        $scope.showToggle = function(target){
            $scope[target].show = !$scope[target].show;
        };
   
        $scope.sideLeftMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        
        $scope.sideRightMenu = function () {
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.toggleLeftSideMenu = function() {
        //    $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.$watch(function () {
            return $ionicSideMenuDelegate.getOpenRatio();
        },function (ratio) {
            if(ratio === 1){
                $scope.isActive.leftActive = false;
            }else if(ratio == -1){
                $scope.isActive.rightActive = false;
            }else if(ratio === 0){
                $scope.isActive = {
                    leftActive: true,
                    rightActive: true
                };
            }
        });

        //监听back事件
      /*  var deregister = $ionicPlatform.registerBackButtonAction(function(event) {
    		
            if (!$ionicSideMenuDelegate.isOpen()) {

                console.log(12);
            } else {
                navigator.app.exitApp();
            }
            event.preventDefault();
    		event.stopPropagation();   
            return false;
        }, 100);
        $scope.$on('$destory', deregister);*/

    }

    ctrl.$inject = ['$scope', '$ionicPlatform', '$ionicTabsDelegate', '$ionicSideMenuDelegate', '$templateCache'];
    return ctrl;
    
});