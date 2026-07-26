/* Service worker: keeps the game playable with no internet once it has been
   opened. Bump CACHE when files change — old caches are cleaned on activate. */

const CACHE = "dressup-v2";

const SHELL = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/backgrounds.js",
  "./js/characters.js",
  "./js/wardrobe.js",
  "./js/photo.js",
  "./js/main.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Fresh-first: use the network when it answers quickly (so updates to the game
   show up immediately), fall back to the cached copy when it is slow or the
   device is offline. The whole game is ~200 KB, so this stays snappy. */
const NET_TIMEOUT = 2500;

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;

  e.respondWith((async () => {
    const cached = await caches.match(e.request);

    const network = fetch(e.request).then((res) => {
      if (res && res.status === 200 && res.type === "basic") {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return res;
    });

    if (!cached) return network;

    // whichever is ready first, but never wait long for a dead network
    const timeout = new Promise((resolve) => setTimeout(() => resolve(null), NET_TIMEOUT));
    const winner = await Promise.race([network.catch(() => null), timeout]);
    return winner || cached;
  })());
});
