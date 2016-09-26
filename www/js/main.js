/*global requirejs, document, cordova, window, navigator, console */

require.config({
   // baseUrl:'../',
    paths:{
        fastclick:'../lib/fastclick',
    /*    cordova:'../cordova',
        cordovaDevice:'../plugins/cordova-plugin-device/www/device',
        cordovaSplashScreen:'../plugins/cordova-plugin-splashscreen/www/splashscreen',
        cordovaStatusbar:'../plugins/cordova-plugin-statusbar/www/statusbar',
        cordovaKeyboard:'../plugins/ionic-plugin-keyboard/www/android/keyboard',*/
        async:'../lib/async',
        domReady:'../lib/domReady',
        BMap:'http://api.map.baidu.com/api?v=2.0&ak=A796271dae48229367c041db82735a4c&services=false',

        
        angular:'../lib/ionic/js/angular/angular',
        angularAnimate:'../lib/ionic/js/angular/angular-animate',
        angularSanitize:'../lib/ionic/js/angular/angular-sanitize',
        uiRouter:'../lib/ionic/js/angular-ui/angular-ui-router',
        ngResource:'../lib/ionic/js/angular/angular-resource',

        ionic:'../lib/ionic/js/ionic',
        ionicAngular:'../lib/ionic/js/ionic-angular',

        app:'app',
        config:'config',

        services:'services/services',
        mainServices:'services/mainServices',
        indexServices:'services/indexServices',
        mapServices:'services/mapServices',
        moreServices:'services/moreServices',
        backButtonServices:'services/backButtonServices',

        mainCtrl:'controllers/mainCtrl',
        indexCtrl:'controllers/indexCtrl',
        sortCtrl:'controllers/sortCtrl',
        memberCtrl:'controllers/memberCtrl',
        cartCtrl:'controllers/cartCtrl',
        moreCtrl:'controllers/moreCtrl',
        mapCtrl:'controllers/mapCtrl',
        controllers:'controllers/controllers',

        directives:'directives/directives',
        mainDirective:'directives/mainDirective',
    },
    waitSeconds: 40,
    shim:{
        cordova:{exports: 'cordova'},  
        cordovaDevice:{deps: ['cordova'], exports: 'cordovaDevice'},
        cordovaSplashScreen:{deps: ['cordova'], exports: 'cordovaSplashScreen'},
        cordovaStatusbar:{deps: ['cordova'], exports: 'cordovaStatusbar'},
        cordovaKeyboard:{deps: ['cordova'], exports: 'cordovaKeyboard'},
        angular : {exports : 'angular'},
        app : {exports : 'app'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        ngResource: {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        /*ionicAngular: {deps: ['angular', 'ionic','uiRouter', 
                              'angularAnimate', 'angularSanitize',
                              'ngResource','cordovaDevice','cordovaSplashScreen',
                              'cordovaStatusbar','cordovaKeyboard'],exports: 'ionicAngular'}*/
         ionicAngular: {deps: ['angular', 'ionic','uiRouter', 
                              'angularAnimate', 'angularSanitize',
                              'ngResource'],exports: 'ionicAngular'}                      
    },
    priority:['angular','ionic'],
    deps:['bootstrap']
});
