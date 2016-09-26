/*global define, require, console, cordova, navigator */

define(['ionic', 'angular', 'routes', 'app'], function (ionic, angular,routes, app) {
    'use strict';
    var $html,
        onDeviceReady = function () {
            angular.bootstrap(document, [app['name']]);
        };
   
    if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) {
        // URL: Running in Cordova/PhoneGap
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    if (typeof cordova === 'undefined') {
        $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function () {
            try {
                angular.bootstrap(document, [app['name']]);
            } catch (e) {
                console.error(e.stack || e.message || e);
            }
        });
    }
});
