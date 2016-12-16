<template>
  <li
    class="i-menu-item-group">
    <div class="i-menu-item-group-title" :style="style" v-if="title" v-text="title"></div>
    <ul class="i-menu-item-group-list" v-if="$slots.default">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'iMenuItemGroup',
  props: {
    title: String
  },
  computed: {
    mode () {
      return this.$parent.mode
    },
    level () {
      return this.$parent.level
    },
    indent () {
      return this.$parent.indent
    },
    style () {
      let res = {}
      if (this.mode === 'inline' && this.level > 1) {
        res['padding-left'] = this.level * this.indent + 8 + 'px'
      }
      return res
    },
    path () {
      let path = this.$parent.path.slice()
      return path
    },
    selectedIndex () {
      return this.$parent.selectedIndex
    },
    clickItem () {
      return this.$parent.clickItem
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
