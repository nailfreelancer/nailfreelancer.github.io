window.onload = e => {
    'use strict';

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}