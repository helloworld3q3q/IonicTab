/*global define, require */

define(['app'], function(app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
            // setup an abstract state for the tabs directive
                .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            // Each tab has its own nav history stack:
            .state('tab.index', {
                url: '/index',
                views: {
                    'tab-index': {
                        templateUrl: 'templates/site/index.html',
                        controller: 'indexCtrl'
                    }
                }
            })
            .state('tab.sort', {
                url: '/sort',
                views: {
                    'tab-sort': {
                        templateUrl: 'templates/sort/index.html',
                        controller: 'sortCtrl'
                    }
                }
            })
            .state('tab.cart', {
                url: '/cart',
                views: {
                    'tab-cart': {
                        templateUrl: 'templates/cart/index.html',
                        controller: 'cartCtrl'
                    }
                }
            })
            .state('tab.member', {
                url: '/member',
                views: {
                    'tab-member': {
                        templateUrl: 'templates/member/index.html',
                        controller: 'memberCtrl'
                    }
                }
            })
            .state('tab.more', {
                url: '/more',
                views: {
                    'tab-more': {
                        templateUrl: 'templates/etc/more.html',
                        controller: 'moreCtrl'
                    }
                }
            })
            .state('map', {
                url: '/map',
                templateUrl: 'templates/etc/map.html',
                controller: 'mapCtrl'
            });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/index');
    }]);
});
