let cacheData = 'appv1';
// var urlsToCache = [
//   '/',
//   '/styles/main.css',
//   '/script/main.js'
// ];

this.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/',
        '/static/js/bundle.js',
        '/static/js/1.chunk.js',
        '/static/js/main.chunk.js',
        '/manifest.json',
        // '/favicon.ico',
        'index.html',
        'icon-192x192.png',
        '/images/icons/icon-192x192.png',
        // 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
        // 'localhost',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  // console.log('result');
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        console.log('result', result);
        if (result) {
          console.log(result);
          return result;
        }
      })
    );
  }
});
