/**
 * Workaround for loading cordova.js and its plugins
 * Note: you will see and 404 on cordova.js on android, this is pretty normal
 */
import {Platform} from 'quasar-framework';

var cordovajs = document.createElement('script');
var ua = navigator.userAgent;
var isCordova = !!ua.match(/Cordova/);

if(isCordova && Platform.is.android){
    cordovajs.src = 'cdvfile://localhost/assets/www/cordova.js';
}else if(isCordova && Platform.is.ios){
    cordovajs.src = 'cdvfile://localhost/bundle/www/cordova.js';
    // Workaround because quasar cannot detect if is cordova on ios due http protocol
    document.body.className += ' cordova';
}

setTimeout(() => document.body.appendChild(cordovajs));
