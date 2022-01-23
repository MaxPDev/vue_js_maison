import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lumieres: {
      salon : false,
      chambre : false,
    },
    objetLieu : ''
  },
  mutations: {
    // payload : piece
    TOGGLE_LUMIERE(state, piece) {
      state.lumieres[piece] = !state.lumieres[piece]
    },

    SET_OBJETLIEU(state,piece) {
      state.objetLieu = piece;
      alert("Vous l'avez trouvé au " + piece + " !")
    }
  },
  actions: {
  },
  modules: {
  }
})
