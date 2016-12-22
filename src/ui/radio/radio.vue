<template>
  <label
    class="i-radio-wrapper"
    :class="[
      mode ? `i-radio-wrapper-${mode}` : ''
    ]">
    <span
      class="i-radio"
      :class="[
        model ===  label ? 'i-radio-checked' : '',
        disabled ? 'i-radio-button-disabled' : ''
      ]">
      <span class="i-radio-inner"></span>
      <input
        type="radio"
        @click="handleClick"
        :value="label"
        class="i-radio-input">
    </span><span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'iRadio',
  props: {
    label: [String, Number],
    value: [String, Number],
    disabled: Boolean
  },
  computed: {
    isGroup () {
      return this.$parent.$options.name === 'iRadioGroup'
    },
    model () {
      if (this.isGroup) {
        return this.$parent.value
      } else {
        return this.value
      }
    },
    mode () {
      this.$parent.mode && console.log(this.$parent.mode)
      return this.$parent.mode
    }
  },
  methods: {
    handleClick (e) {
      if (this.disabled) return
      if (this.isGroup) {
        this.$parent.$emit('input', e.target.value)
      } else {
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
