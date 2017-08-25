import Vue from 'vue';
import Quasar, * as All from 'quasar-framework';
import {Platform} from 'quasar-framework';

/**
 * This is not needed anymore due new cordova bootloader strategy
 */
// import './cordova.js';

/**
 * Service worker disabled due using cache manifest for compatibilty with iOS
 */
// import './worker.js';

/**
 * Styles
 */
import 'quasar-extras/material-icons/material-icons.css';
import 'quasar-extras/roboto-font/roboto-font.css';

/**
 * Platform theming
 */
if(Platform.is.ios){
    require('quasar-framework/dist/quasar.ios.css');
}else{
    require('quasar-framework/dist/quasar.mat.css');
}

/**
 * Load quasar
 */
Vue.use(Quasar, {
    components: All,
    directives: All
});

/**
 * Import application files
 */
import App from './app.vue';

/**
 * Bootstrap application
 */
Quasar.start(() => {
    new Vue({
        el: '#app',
        render: h => h(App)
    });
});
