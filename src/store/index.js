import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    cards: state => state.cards,
  },

  state: {
    cards: [],
  },

  mutations: {
    addNewCard(state, card) {
      state.cards.push(card)
    },
  },

  actions: {
    addNewCardAsync({ commit }, card) {
      commit('addNewCard', card)
    },
  },
})
