<template>
  <div class="container mx-auto">
    <QuizCard :card="cards[0]" @clickOnAnswer="onClickOnAnswer">
      <template v-slot:header>
        <h2>Question #1 over {{ cards.length }}</h2>
      </template>

      <template v-slot:score>
        <p><strong>Score:</strong> {{ score }} / {{ cards.length }}</p>
      </template>

      <template v-slot:nextQuestion="data">
        <button
          v-if="data.questionAnswerd"
          type="button"
          class="btn btn-primary"
        >
          Next question
        </button>
      </template>
    </QuizCard>
  </div>
</template>

<script>
import QuizCard from '@/components/QuizCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Quiz',

  components: {
    QuizCard,
  },

  data() {
    return {
      score: 0,
    }
  },

  computed: {
    ...mapGetters(['cards']),
  },

  beforeMount() {
    this.shuffleCardsAndAnswersAsync()
  },

  methods: {
    ...mapActions(['shuffleCardsAndAnswersAsync']),
    onClickOnAnswer(correct) {
      if (correct) {
        this.score = this.score + 1
      }
    },
  },
}
</script>

<style></style>
