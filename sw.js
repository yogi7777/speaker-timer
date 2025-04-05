/*
 * Speaker Timer
 * Autor: yogi7777
 * Copyright © 2025 yogi7777 https://github.com/yogi7777. Alle Rechte vorbehalten.
 */
const CACHE_NAME = 'timer-v1.1';
const urlsToCache = [
  '/',
  '/index.html',
  '/fullscreen.html',
  '/styles.css',
  '/alarm.wav',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Cache geöffnet');
          return cache.addAll(urlsToCache);
        })
        .catch(err => {
          console.error('Fehler beim Cachen:', err);
        })
    );
  });

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});