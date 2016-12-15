<template>
  <ul
    class="i-menu i-menu-root"
    :class="[
      `i-menu-${theme}`,
      `i-menu-${mode}`
    ]"
    @click-item="clickItem">
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
    },
    selectedIndex: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      level: 0,
      indent: 24,
      path: []
    }
  },
  methods: {
    clickItem (index, path) {
      this.$emit('click-item', index, path)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
