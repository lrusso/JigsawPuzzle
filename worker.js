const filesToCache = [
	"JigsawPuzzle.htm",
	"JigsawPuzzle.json",
	"JigsawPuzzle.png",
	"JigsawPuzzleFavIcon_16x16.png",
	"JigsawPuzzleFavIcon_192x192.png",
	"JigsawPuzzleFavIcon_512x512.png",
	"JigsawPuzzleGame.htm",
	"JigsawPuzzleGame.js",
	"JigsawPuzzleShare.png"
];

const staticCacheName = "jigsawpuzzle-v1";

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