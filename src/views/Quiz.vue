<template>
  <div>
    <transition name="quiz-card" mode="out-in">
      <QuizCard
        :key="questionNumber"
        :card="cards[questionNumber - 1]"
        @clickOnAnswer="onClickOnAnswer"
      >
        <template v-slot:header>
          <h2>Question #{{ questionNumber }} over {{ cards.length }}</h2>
        </template>

        <template v-slot:score>
          <p><strong>Score:</strong> {{ score }} / {{ cards.length }}</p>
        </template>

        <template v-slot:nextQuestion="data">
          <button
            v-if="data.questionAnswerd"
            type="button"
            class="btn btn-primary"
            @click="onClickOnNext"
          >
            {{ nextButtonText }}
          </button>
        </template>
      </QuizCard>
    </transition>
    <div class="row justify-content-md-center mt-2">
      <router-link :to="{ name: 'Home' }" class="btn btn-warning">
        Give up
      </router-link>
    </div>
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
      questionNumber: 1,
      score: 0,
    }
  },

  computed: {
    ...mapGetters(['cards']),

    lastQuestion() {
      return this.questionNumber === this.cards.length
    },

    nextButtonText() {
      if (this.lastQuestion) {
        return 'How did I perform ?'
      } else {
        return 'Next question'
      }
    },
  },

  beforeMount() {
    this.shuffleCardsAndAnswersAsync()
  },

  methods: {
    ...mapActions(['shuffleCardsAndAnswersAsync']),
    onClickOnAnswer(correct) {
      if (correct) {
        this.score++
      }
    },
    onClickOnNext() {
      if (this.lastQuestion) {
        this.$router.push({ name: 'Cheer', params: { score: this.score } })
      }
      this.questionNumber++
    },
  },
}
</script>

<style>
.quiz-card-enter-active,
.quiz-card-leave-active {
  transition: all 0.4s;
}
.quiz-card-enter {
  opacity: 0;
  transform: translateX(500px);
}
.quiz-card-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}
</style>
