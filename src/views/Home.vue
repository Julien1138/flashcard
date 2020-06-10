<template>
  <div>
    <div class="row justify-content-md-center">
      <h1>Welcome to the flashcard app</h1>
    </div>
    <div class="row justify-content-md-center">
      <h3>You have {{ cardsCount }} cards in your deck</h3>
    </div>
    <div class="row justify-content-md-center mt-2">
      <router-link :to="{ name: 'NewCard' }" class="btn btn-secondary mr-5">
        Add a flashcard
      </router-link>
      <router-link :to="{ name: 'Quiz' }" class="btn btn-success ml-5">
        Start the quizz
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapGetters(['cardsCount']),
  },
}
</script>
