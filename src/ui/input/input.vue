<template>
  <input
    v-if="!$slots.prepend && !$slots.append"
    class="i-input"
    :class="[
      `i-input-${size}`
    ]"
    :value="value"
    :placeholder="placeholder"
    :type="type"
    @input="handleInput">

  <span class="i-input-wrapper i-input-group" v-else>
    <span class="i-input-group-addon" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </span>
    <input
      class="i-input"
      :class="[
        `i-input-${size}`
      ]"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus">
      <span class="i-input-group-addon" v-if="$slots.append">
        <slot name="append"></slot>
      </span>
  </span>
</template>

<script>
export default {
  name: 'iInput',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    size: String,
    placeholder: String
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleFocus (e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
