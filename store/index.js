import Vuex from 'vuex';
import manga from "./modules/manga";
import user from "./modules/user";




const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },

    modules:[
      manga,
      user,
    ]
  })
}

export default createStore
