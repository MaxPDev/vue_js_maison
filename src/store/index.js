import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lumieres: {
      salon : false,
      chambre : false,
    }
  },
  mutations: {
    // payload : piece
    TOGGLE_LUMIERE(state, piece) {
      state.lumieres[piece] = !state.lumieres[piece]
    }
  },
  actions: {
  },
  modules: {
  }
})
