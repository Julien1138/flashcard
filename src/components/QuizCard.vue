<template>
  <div class="card text-center mx-auto" style="width: 45rem;">
    <div class="card-body">
      <h3 class="card-title">{{ card.question }}</h3>
      <button
        v-for="(answer, idx) in answers"
        :key="idx"
        type="button"
        class="btn btn-lg btn-block"
        :class="buttonVariant(answer)"
        :disabled="disableButtons"
        @click="onClickOnAnswer(answer)"
      >
        {{ answer.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      answers: this.card.answers.map(answer => {
        return {
          ...answer,
          selected: false,
        }
      }),
      disableButtons: false,
      revealRightAnswer: false,
    }
  },

  methods: {
    buttonVariant(answer) {
      if (answer.selected) {
        if (answer.correct) {
          return 'btn-success'
        } else {
          return 'btn-danger'
        }
      } else if (this.revealRightAnswer && answer.correct) {
        return 'btn-success'
      } else {
        return 'btn-outline-secondary'
      }
    },

    onClickOnAnswer(answer) {
      answer.selected = true
      this.disableButtons = true
      this.revealRightAnswer = true
      this.$emit('clickOnAnswer', answer.correct)
    },
  },
}
</script>

<style></style>
