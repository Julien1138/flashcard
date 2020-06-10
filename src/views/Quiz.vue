<template>
  <div class="container mx-auto">
    <QuizCard :card="cards[0]" />
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

  computed: {
    ...mapGetters(['cards']),
  },

  beforeMount() {
    this.shuffleCardsAndAnswersAsync()
  },

  methods: {
    ...mapActions(['shuffleCardsAndAnswersAsync']),
  },
}
</script>

<style></style>
