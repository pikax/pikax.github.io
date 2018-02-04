import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate'


import manga from './modules/manga'
import user from "./modules/user";


export const store= new Vuex.Store({

  state: {
    msg: "pika3x"
  },


  modules: {
    manga,
    user,
  },



  plugins:[createPersistedState()],

  strict: process.env.NODE_ENV !== 'production'
});



