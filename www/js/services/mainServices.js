define(function(){
    'use strict'
    var factory = function($ionicLoading,$timeout){
        return {
            showLoading: function(){
                $ionicLoading.show({
                    template: '<div class="icon ion-loading-a"></div> Loading... ',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 500,
                    showDelay: 100
                });
            },
            hideLoding: function(){
                 $timeout(function(){
                    $ionicLoading.hide();
                }, 500);
            }
        }
    }
    factory.$inject = ['$ionicLoading', '$timeout'];
    return factory;
});