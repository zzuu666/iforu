<template>
  <div
    class="i-radio-group"
    :class="[
      size ? `i-radio-group-${size}` : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iRadioGroup',
  props: {
    value: [String, Number],
    size: String,
    mode: String
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
