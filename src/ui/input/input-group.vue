<template>
  <span
    class="i-input-group"
    :class="[
      size ? `i-input-group-${size}` : ''
    ]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'iInputGropu',
  props: {
    size: String
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
