<template>
  <li
    class="i-menu-item"
    :class="[
      disabled ? 'i-menu-item-disabled' : '',
      selected ? 'i-menu-item-selected' : ''
    ]"
    :style="style"
    @click="handleClick">
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
    },
    index: String
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
    },
    path () {
      let path = this.$parent.path.slice()
      path.push(this.index)
      return path
    },
    selectedIndex () {
      return this.$parent.selectedIndex
    },
    selected () {
      return this.selectedIndex === this.index
    }
  },
  methods: {
    handleClick () {
      this.$parent.clickItem(this.index, this.path)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
