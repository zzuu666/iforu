<template>
  <li
    class="i-menu-item-group">
    <div class="i-menu-item-group-title" v-if="title" v-text="title"></div>
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
