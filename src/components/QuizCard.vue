<template>
  <div class="mx-auto" style="width: 45rem;">
    <div class="d-flex justify-content-center mb-4">
      <slot name="header"></slot>
    </div>

    <div class="card text-center">
      <div class="card-body">
        <h3 class="card-title">{{ card.question }}</h3>
        <button
          v-for="(answer, idx) in answers"
          :key="idx"
          type="button"
          class="btn btn-lg btn-block"
          :class="buttonVariant(answer)"
          :disabled="questionAnswerd"
          @click="onClickOnAnswer(answer)"
        >
          {{ answer.text }}
        </button>
      </div>
    </div>

    <div class="d-flex flex-row justify-content-between mt-3">
      <slot name="score"><div></div></slot>
      <slot name="nextQuestion" :questionAnswerd="questionAnswerd"
        ><div></div
      ></slot>
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
      questionAnswerd: false,
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
      } else if (this.questionAnswerd && answer.correct) {
        return 'btn-success'
      } else {
        return 'btn-outline-secondary'
      }
    },

    onClickOnAnswer(answer) {
      answer.selected = true
      this.questionAnswerd = true
      this.$emit('clickOnAnswer', answer.correct)
    },
  },
}
</script>

<style></style>
