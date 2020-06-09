<template>
  <input
    v-model="newValue"
    :class="isInvalid ? 'is-invalid' : ''"
    @keyup="onChange"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      newValue: this.value,
      isInvalid: false,
    }
  },

  methods: {
    onChange() {
      this.isInvalid = false
      this.$emit('input', this.newValue)
    },
  },
}
</script>

<style></style>
