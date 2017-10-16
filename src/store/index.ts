import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);


export const store= new Vuex.Store({

  state: {
    msg: "pika3x"
  },



  strict: process.env.NODE_ENV !== 'production'
});



