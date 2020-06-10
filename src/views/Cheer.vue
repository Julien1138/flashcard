<template>
  <div>
    <div class="row justify-content-md-center">
      <h1>{{ message.header }}</h1>
    </div>
    <div class="row justify-content-md-center">
      <h4>{{ message.text }}</h4>
    </div>
    <div class="row justify-content-md-center mt-5">
      <router-link :to="{ name: 'Home' }" class="btn btn-primary">
        Home
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QuizResult',

  props: {
    score: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    ...mapGetters(['cardsCount']),
    percentageOfRightAnswers() {
      return Number(this.score) / this.cardsCount
    },
    message() {
      if (this.percentageOfRightAnswers === 0) {
        return {
          header: "You don't know anything!",
          text: 'I guess everyone has to start somewhere...',
        }
      } else if (this.percentageOfRightAnswers <= 0.2) {
        return {
          header: 'I suppose you got lucky on one or two answers...',
          text: 'You should get to work!',
        }
      } else if (this.percentageOfRightAnswers <= 0.5) {
        return {
          header: "You're on the right track",
          text: 'Keep up the good work.',
        }
      } else if (this.percentageOfRightAnswers <= 0.8) {
        return {
          header: 'Almost there!',
          text: 'Your hard work is paying off.',
        }
      } else {
        return {
          header: 'Perfect!',
          text:
            "You're the best! Now you should add more cards to learn new stuff.",
        }
      }
    },
  },
}
</script>

<style></style>
