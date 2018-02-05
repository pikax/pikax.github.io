import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1f14432a = () => import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */).then(m => m.default || m)
const _90c8610a = () => import('..\\pages\\ginmanga\\index.vue' /* webpackChunkName: "pages_ginmanga_index" */).then(m => m.default || m)
const _3d8516ba = () => import('..\\pages\\ginmanga\\_id.vue' /* webpackChunkName: "pages_ginmanga__id" */).then(m => m.default || m)
const _ff7ffaba = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/inspire",
			component: _1f14432a,
			name: "inspire"
		},
		{
			path: "/ginmanga",
			component: _90c8610a,
			name: "ginmanga"
		},
		{
			path: "/ginmanga/:id",
			component: _3d8516ba,
			name: "ginmanga-id"
		},
		{
			path: "/",
			component: _ff7ffaba,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
