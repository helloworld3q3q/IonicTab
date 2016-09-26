/*global define */

define(['app','services','mainDirective'], function(app){
    'use strict';

    var directives = angular.module('app.directives', ['app.services']);

    directives.directive('goaddr',[function(){
        return {
            restrict: 'A',
            replace: false,
            link:function(scope, element, attrs){
                
            }
        }
    }]);
    
    return directives;

});