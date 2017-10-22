import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import manga from './modules/manga'


export const store= new Vuex.Store({

  state: {
    msg: "pika3x"
  },


  modules: {
    manga
  },

  strict: process.env.NODE_ENV !== 'production'
});



