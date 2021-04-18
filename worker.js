const filesToCache = [
	"Jigsaw.htm",
	"Jigsaw.json",
	"Jigsaw.png",
	"JigsawFavIcon_16x16.png",
	"JigsawFavIcon_192x192.png",
	"JigsawFavIcon_512x512.png",
	"JigsawGame.htm",
	"JigsawGame.js",
	"JigsawShare.png"
];

const staticCacheName = "jigsaw-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});