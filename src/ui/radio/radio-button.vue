<template>
  <label
    class="i-radio-button-wrapper"
    :class="[
      value ===  label ? 'i-radio-button-wrapper-checked' : '',
      disabled ? 'i-radio-button-wrapper-disabled' : ''
    ]">
    <span class="i-radio-button">
      <input
        type="radio"
        @click="handleClick"
        :value="label"
        class="i-radio-button-input">
    </span><span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'iRadioButton',
  props: {
    label: [String, Number],
    value: [String, Number],
    disabled: Boolean
  },
  computed: {
    value () {
      return this.$parent.value
    }
  },
  methods: {
    handleClick (e) {
      console.log(e.target.value)
      if (this.disabled) return
      this.$parent.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
