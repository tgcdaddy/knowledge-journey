const CACHE='knowledge-v4';
const ASSETS=['./','/knowledge-journey/','/knowledge-journey/index.html','/knowledge-journey/manifest.json','/knowledge-journey/icon-192.png','/knowledge-journey/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>caches.match('/knowledge-journey/index.html'))));});
