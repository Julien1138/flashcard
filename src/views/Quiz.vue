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
    this.shuffleCardsAsync()
  },

  methods: {
    ...mapActions(['shuffleCardsAsync']),
  },
}
</script>

<style></style>
