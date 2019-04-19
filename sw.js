importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2df6fdc5cd08662f244a.js",
    "revision": "9c0f7864c69d6893d333a9ac4f3c40f9"
  },
  {
    "url": "/_nuxt/33c56b6ac8ac192043d6.js",
    "revision": "f2f28b4604b2257ff94c4189a6b41923"
  },
  {
    "url": "/_nuxt/415249d5c308ba0326c4.css",
    "revision": "f51f119b643a2ff9313f7744e561713e"
  },
  {
    "url": "/_nuxt/5fb194b57fcc394ad8e9.js",
    "revision": "52269d8da2bfa12bb5e13a1daecb6661"
  },
  {
    "url": "/_nuxt/6cdf3de1a3e464157447.js",
    "revision": "de7c0a909ac6389376f76fe2ce55dd44"
  },
  {
    "url": "/_nuxt/871d25be9905600f06af.css",
    "revision": "1a2af9f6677043f1a8d0e2bbf8d3cb43"
  },
  {
    "url": "/_nuxt/9cd72e78df694714ad45.css",
    "revision": "17ad3237a3730dec559b2ec7abd7e34b"
  },
  {
    "url": "/_nuxt/b2f7f2d3431d891bc05f.js",
    "revision": "5abdcf0bba7d0d494af6c1cac5e62f1f"
  },
  {
    "url": "/_nuxt/f1b0a39d598ec8746073.js",
    "revision": "909ca8561360617255443a58264a3ace"
  }
], {
  "cacheId": "fs19",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
