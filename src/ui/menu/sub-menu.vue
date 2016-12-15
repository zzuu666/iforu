<template>
  <li
    class="i-menu-submenu"
    :class="[
      `i-menu-submenu-${mode}`,
      disabled ? 'i-menu-submenu-disabled' : ''
    ]"
    @mouseover="handleMouseover"
    @mouseout="handleMouseout">
    <span class="i-menu-submenu-title" v-if="$slots.title">
      <slot name="title"></slot>
    </span>
    <transition name="slide-up">
    <ul
      class="i-menu i-menu-sub i-menu-vertical"
      v-show="!hidden"
      v-if="$slots.default">
      <slot></slot>
    </ul>
   </transition>
  </li>
</template>

<script>
export default {
  name: 'iMenuSubMenu',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hidden: true
    }
  },
  computed: {
    mode () {
      return this.$parent.mode
    }
  },
  methods: {
    handleMouseover () {
      this.hidden = false
    },
    handleMouseout () {
      this.hidden = true
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
