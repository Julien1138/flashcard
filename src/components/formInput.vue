<template>
  <input
    v-model="newValue"
    :class="isInvalid ? 'is-invalid' : ''"
    :autofocus="autofocus"
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
    autofocus: {
      type: Boolean,
      default: false,
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
