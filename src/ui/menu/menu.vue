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
    },
    defaultOpen: {
      type: Array,
      default () {
        return []
      }
    },
    unique: Boolean
  },
  data () {
    return {
      level: 0,
      indent: 24,
      path: [],
      uniqueOpen: ''
    }
  },
  methods: {
    clickItem (index, path) {
      this.$emit('click', index, path)
    },
    open (index, path) {
      this.unique && (path.length === 1) && (this.uniqueOpen = index)
      this.$emit('open', index, path)
    },
    close (index, path) {
      this.$emit('close', index, path)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
