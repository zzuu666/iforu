<template>
  <li
    class="i-menu-item"
    :class="[
      disabled ? 'i-menu-item-disabled' : ''
    ]">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'iMenuItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
