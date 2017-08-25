/**
 * Setup service worker
 */
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function() {
        // success
    }).catch(function(err) {
        console.error(err);
    });
}
