self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
    // good place to install static files
  });
self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    // to update the chache
  });

  // I'm a new service worker
  self.skipWaiting();

  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
  });