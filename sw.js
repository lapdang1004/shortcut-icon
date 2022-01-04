self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/shortcut-icon/',
      '/shortcut-icon/index.html',
      '/shortcut-icon/index.js',
      '/shortcut-icon/style.css',
      '/shortcut-icon/images/fox1.jpg',
      '/shortcut-icon/images/fox2.jpg',
      '/shortcut-icon/images/fox3.jpg',
      '/shortcut-icon/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
