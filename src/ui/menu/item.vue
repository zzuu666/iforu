<template>
  <li
    class="i-menu-item"
    :class="[
      disabled ? 'i-menu-item-disabled' : ''
    ]"
    :style="style">
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
  },
  computed: {
    mode () {
      return this.$parent.mode
    },
    level () {
      return this.$parent.level + 1
    },
    indent () {
      return this.$parent.indent
    },
    style () {
      let res = {}
      if (this.mode === 'inline') {
        res['padding-left'] = this.level * this.indent + 'px'
      }
      return res
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
