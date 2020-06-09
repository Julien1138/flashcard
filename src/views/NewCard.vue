<template>
  <div class="container mx-auto">
    <div class="row justify-content-md-center">
      <h1>Add a new card to the deck</h1>
    </div>
    <form>
      <div class="form-group">
        <label for="questionInput" class="text-primary">
          Type the question
        </label>
        <formInput
          id="questionInput"
          ref="questionInput"
          v-model="question"
          class="form-control"
          placeholder="What's the name of Han Solo's spaceship?"
        />
        <small class="form-text text-muted">You better know the answer !</small>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="rightAnswerInput" class="text-success">
              Give the right answer
            </label>
            <formInput
              id="rightAnswerInput"
              ref="rightAnswerInput"
              v-model="rightAnswer"
              class="form-control"
              placeholder="Millennium Falcon"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="wrongAnswer1Input" class="text-danger">
              Give 2 wrong answers
            </label>
            <formInput
              id="wrongAnswer1Input"
              ref="wrongAnswer1Input"
              v-model="wrongAnswer1"
              class="form-control"
              placeholder="Millennium Eagle"
            />
          </div>
          <div class="form-group">
            <formInput
              id="wrongAnswer2Input"
              ref="wrongAnswer2Input"
              v-model="wrongAnswer2"
              class="form-control"
              placeholder="Millennium raven"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mx-auto mt-3">
        <router-link :to="{ name: 'Home' }" class="btn btn-danger mr-3">
          Cancel
        </router-link>
        <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import formInput from '@/components/formInput'

export default {
  name: 'NewCard',

  components: {
    formInput,
  },

  data() {
    return {
      question: '',
      rightAnswer: '',
      wrongAnswer1: '',
      wrongAnswer2: '',
    }
  },
  methods: {
    validate() {
      if (this.question.length === 0) {
        this.$refs.questionInput.isInvalid = true
      }
      if (this.rightAnswer.length === 0) {
        this.$refs.rightAnswerInput.isInvalid = true
      }
      if (this.wrongAnswer1.length === 0) {
        this.$refs.wrongAnswer1Input.isInvalid = true
      }
      if (this.wrongAnswer2.length === 0) {
        this.$refs.wrongAnswer2Input.isInvalid = true
      }
    },
    onSubmit() {
      this.validate()
    },
  },
}
</script>
