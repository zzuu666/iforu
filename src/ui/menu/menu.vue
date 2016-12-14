<template>
  <ul
    class="i-menu"
    :class="[
      `i-menu-${theme}`,
      `i-menu-${mode}`
    ]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'iMenu',
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
