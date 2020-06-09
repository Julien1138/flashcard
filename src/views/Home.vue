<template>
  <div class="container mx-auto">
    <div class="row justify-content-md-center">
      <h1>Welcome to the flashcard app</h1>
    </div>
    <div class="row justify-content-md-center">
      <router-link :to="{ name: 'NewCard' }" class="btn btn-secondary mr-5">
        Add a flashcard
      </router-link>
      <router-link :to="{ name: 'Quiz' }" class="btn btn-success ml-5">
        Start the quizz
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
