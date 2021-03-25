import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';


importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

workbox.routing.registerRoute(
	({request}) => request.destination === 'image',
	new workbox.strategies.NetworkFirst()
	
);
registerRoute(
	({url}) => url.origin === 'https://sad-mcclintock-8c1c7b.netlify.app' &&
			   url.pathname.startsWith('/images/'),
	new CacheFirst({
	  cacheName: 'image-cache',
	  plugins: [
		new CacheableResponsePlugin({
		  statuses: [0, 200],
		})
	  ]
	})
  );