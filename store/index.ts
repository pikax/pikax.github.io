import Vuex from 'vuex';
import Vue from 'vue';


import state from '~/api/info';
import getters from './getters';



Vue.use(Vuex);






const createStore = () => {
  return new Vuex.Store({
    state,

    getters,
  })
}

export default createStore
