<template>
  <div></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Quiz',

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
