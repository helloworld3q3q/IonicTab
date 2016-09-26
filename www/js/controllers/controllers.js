/*global define, require */

define(['app', 'mainCtrl', 'indexCtrl', 'sortCtrl', 'memberCtrl', 'cartCtrl', 'mapCtrl', 'moreCtrl', 'services'], function(app){
    'use strict';
    var controllers = angular.module('app.controllers', ['app.services', 'app.config']);

    controllers.controller('mainCtrl', require('mainCtrl'));
    controllers.controller('indexCtrl', require('indexCtrl'));
    controllers.controller('sortCtrl', require('sortCtrl'));
    controllers.controller('memberCtrl', require('memberCtrl'));
    controllers.controller('cartCtrl', require('cartCtrl'));
    controllers.controller('mapCtrl', require('mapCtrl'));
    controllers.controller('moreCtrl', require('moreCtrl'));

    return controllers;

});
