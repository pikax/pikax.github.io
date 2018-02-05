importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pikax.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d7641e6d2c81438ba75e.js",
    "revision": "152d1f5520549c70287e90aa92a3985a"
  },
  {
    "url": "/_nuxt/layouts__default.4f184cf87cff9e522edb.js",
    "revision": "5f5f00e08491650be593268d35e414f5"
  },
  {
    "url": "/_nuxt/layouts_default.9d0858a34a30924b4721.js",
    "revision": "ee5330530deb43fcaf4d532011b21ccd"
  },
  {
    "url": "/_nuxt/manifest.653408470621c0a52ad3.js",
    "revision": "a088e0521be3e2f0ef73208b06e5361a"
  },
  {
    "url": "/_nuxt/pages_ginmanga__id.502d38d787caeaf80be3.js",
    "revision": "c667777e72f5e1124543876883638bb3"
  },
  {
    "url": "/_nuxt/pages_ginmanga_index.a36b0330b3028dc7306d.js",
    "revision": "a3a46a033e4cba8e3d62b3bad5fcaff4"
  },
  {
    "url": "/_nuxt/pages_index.0c9461c0bd77a5b39d75.js",
    "revision": "ed1fb082aeb4ef06eeb1ac8b8d0fbc55"
  },
  {
    "url": "/_nuxt/pages_inspire.660df247a369c755bb4b.js",
    "revision": "f9511fca8eecb5708dd87da223a4047b"
  },
  {
    "url": "/_nuxt/vendor.703ea3b6defd565b8bc1.js",
    "revision": "8f38d016783686f3653a74c71236d597"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

