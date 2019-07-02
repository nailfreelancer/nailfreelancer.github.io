importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/users'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
    new workbox.cacheableResponse.Plugin({
      statuses: [0, 200],
    }),
    new workbox.expiration.Plugin({
      maxAgeSeconds: 60 * 60 * 24 * 365,
      maxEntries: 30,
    }),
    ],
  })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "794353e1d122905668fe082196829a9a"
  },
  {
    "url": "index.html",
    "revision": "13830b4cab5f91820a29c734327c2dc5"
  },
  {
    "url": "js/app.js",
    "revision": "90e23ebc7d0ce63836d7aa94c9a6e08e"
  }
]);