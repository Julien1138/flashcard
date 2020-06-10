import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    cards: state => state.cards,
    cardsCount: state => state.cards.length,
  },

  state: {
    cards: [
      {
        question: 'In the saga, Luke and Leia are:',
        answers: [
          {
            text: 'Brother and sister',
            correct: true,
          },
          {
            text: 'A couple',
            correct: false,
          },
          {
            text: 'Father and daughter',
            correct: false,
          },
        ],
      },
      {
        question: 'What is order 66?',
        answers: [
          {
            text: 'The order given to the clones to kill every Jedi',
            correct: true,
          },
          {
            text:
              'The order given to the clones to free Anakin and Padme on Geonosis',
            correct: false,
          },
          {
            text: 'The order given to the rebels to destroy the black star',
            correct: false,
          },
        ],
      },
      {
        question: 'Where does Luke Skywalker meet Yoda for the first time?',
        answers: [
          {
            text: 'Coruscant',
            correct: false,
          },
          {
            text: 'Dagobah',
            correct: true,
          },
          {
            text: 'Yavin IV',
            correct: false,
          },
        ],
      },
      {
        question: 'Which actor plays Mace Windu?',
        answers: [
          {
            text: 'Laurence Fishburn',
            correct: false,
          },
          {
            text: 'Harisson Ford',
            correct: false,
          },
          {
            text: 'Samuel L. Jackson',
            correct: true,
          },
        ],
      },
      {
        question: 'Lightsabers work thanks to:',
        answers: [
          {
            text: 'A diamond',
            correct: false,
          },
          {
            text: 'The Force',
            correct: false,
          },
          {
            text: 'A crystal',
            correct: true,
          },
        ],
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

    shuffleAllAnswers(state) {
      state.cards.forEach(card => {
        shuffleArray(card.answers)
      })
      shuffleArray(state.cards)
    },
  },

  actions: {
    addNewCardAsync({ commit }, card) {
      commit('addNewCard', card)
    },

    shuffleCardsAndAnswersAsync({ commit }) {
      commit('shuffleCards')
      commit('shuffleAllAnswers')
    },
  },
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
