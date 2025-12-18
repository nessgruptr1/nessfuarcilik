// Minimal no-op service worker to avoid 404 errors for /sw.js requests.
// This does not change network behavior; all requests go to the network as usual.

self.addEventListener("install", () => {
  // Activate immediately after installation
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Take control of uncontrolled clients as soon as possible
  event.waitUntil(self.clients.claim());
});

// No fetch handler: the browser will use the default network behavior.


