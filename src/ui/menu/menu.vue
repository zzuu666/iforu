<template>
  <ul
    class="i-menu i-menu-root"
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
  },
  data () {
    return {
      level: 0,
      indent: 24
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
