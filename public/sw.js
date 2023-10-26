
console.log('cahce my pwa');

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache-name').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico'
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(async function (cacheNames) {
      return await Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName !== 'my-cache-name';
        }).map(async function (cacheName) {
          return await caches.delete(cacheName);
        })
      );
    })
  );
});
