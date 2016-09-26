/*global define */

define(['app','config', 'mainServices', 'indexServices', 'mapServices', 'moreServices', 'backButtonServices'], 
    function (app) {
        'use strict';
        var config = require('config'),
            services = angular.module('app.services', ['app.config', 'ngResource']);
        
        services.factory('$mainServices', require('mainServices'));
        services.factory('$mapServices', require('mapServices'));
        services.service('$indexServices', require('indexServices'));
        services.service('$moreServices', require('moreServices'));
        services.factory('$backButtonServices', require('backButtonServices'));




    return services;
});