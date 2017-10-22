import * as api from 'src/api/manga';
import {MANGA} from "src/store/mutations"


// initial state
const state = {
  all: [],
  info: []
};

// getters
const getters = {
  allMangas: state => state.all,

  getMangaByTitle: (state, getters) => title => {
    return state.info.find(x=>x.title === title);
  }
};

// actions
const actions = {
  getAllMangas({commit}) {
    api.getAllMangas().then(mangas => {
      commit(MANGA.RECEIVED_MY, {mangas})
    })
  },
  getMangaInfo({commit}, {title}){
    api.getInfo(title).then(info=>{
      commit(MANGA.RECEIVED_INFO, {info});
    })
  }
};

// mutations
const mutations = {
  [MANGA.RECEIVED_MY](state, {mangas}) {
    state.all = mangas
  },

  [MANGA.RECEIVED_INFO](state, {info}){
    const prev = state.info.findIndex(x=>x.title === info.title);
    if(prev>=0){
      state.info.slice(prev)
    }

    state.info.push(info);
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}
