define(function(){
    'use strict'
    var service = function($http){
        return {
            get:function(callback){
                $http.get('http://192.168.2.246:8080/angularTest/www/json/index.json').success(function(data){
                   return callback(data);
                });
            }
        }
    };
    service.$inject = ['$http'];
    return service;
});