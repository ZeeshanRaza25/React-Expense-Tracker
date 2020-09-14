let self = this;
let cacheData = 'app1';
// var urlsToCache = [
//   '/',
//   '/styles/main.css',
//   '/script/main.js'
// ];

var urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/1.chunk.js',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/manifest.json',
  '/favicon.ico',
  'index.html',
  'icon-192x192.png',
  '/images/icons/icon-192x192.png',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        // console.log('result', result);
        if (result) {
          // console.log(result);
          return result;
        }
      })
    );
  }
});
