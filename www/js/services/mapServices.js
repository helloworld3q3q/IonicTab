define(['domReady','async!BMap'], function(domReady){
    'use strict'
    var factory = function(){
        var map = new BMap.Map("bmap");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
        map.enableScrollWheelZoom();
        var start = "魏公村" ,end = "百度大厦";
        var transit = new BMap.TransitRoute(map, {
            renderOptions: {map: map}
        });
        transit.search(start,end);
        var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/location.gif", new BMap.Size(14,23));
        return {
            goFunc:function(){
                //设置起终点图标
                transit.setMarkersSetCallback(function(result){
                    result[0].marker.setIcon(myIcon);
                    result[1].marker.setIcon(myIcon);
                })
            }
        }
    }
    factory.$inject = [];
    return factory;
});