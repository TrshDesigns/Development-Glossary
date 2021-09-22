importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

workbox.routing.registerRoute(
	({request}) => request.destination === 'html',
	new workbox.strategies.NetworkFirst()
	
);
workbox.routing.registerRoute(
	({request}) => request.destination === 'css',
	new workbox.strategies.NetworkFirst()
	
);
workbox.routing.registerRoute(
	({request}) => request.destination === 'image',
	new workbox.strategies.NetworkFirst()
	
);
