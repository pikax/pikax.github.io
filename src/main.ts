// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App.vue'
import {sync} from 'vuex-router-sync'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// Vue.use(VueMaterial);
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)



import router, {routes} from './router/index'
import {store} from "./store";

sync(store, router)


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  computed: {
    routes: () => {
      return routes;
    }
  },
  template: '<App :routes="routes"/>',
  components: {App}
});
