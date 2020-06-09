import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    cards: state => state.cards,
  },

  state: {
    cards: [
      {
        question: 'Question #1',
        rightAnswer: 'Right answer',
        wrongAnswer1: 'Wrong Answer #1',
        wrongAnswer2: 'Wrong Answer #2',
      },
      {
        question: 'Question #2',
        rightAnswer: 'Right answer',
        wrongAnswer1: 'Wrong Answer #1',
        wrongAnswer2: 'Wrong Answer #2',
      },
      {
        question: 'Question #3',
        rightAnswer: 'Right answer',
        wrongAnswer1: 'Wrong Answer #1',
        wrongAnswer2: 'Wrong Answer #2',
      },
      {
        question: 'Question #4',
        rightAnswer: 'Right answer',
        wrongAnswer1: 'Wrong Answer #1',
        wrongAnswer2: 'Wrong Answer #2',
      },
      {
        question: 'Question #5',
        rightAnswer: 'Right answer',
        wrongAnswer1: 'Wrong Answer #1',
        wrongAnswer2: 'Wrong Answer #2',
      },
    ],
  },

  mutations: {
    addNewCard(state, card) {
      state.cards.push(card)
    },
    shuffleCards(state) {
      shuffleArray(state.cards)
    },
  },

  actions: {
    addNewCardAsync({ commit }, card) {
      commit('addNewCard', card)
    },

    shuffleCardsAsync({ commit }) {
      commit('shuffleCards')
    },
  },
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
