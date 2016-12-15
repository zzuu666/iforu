<template>
  <li
    class="i-menu-submenu"
    :class="[
      `i-menu-submenu-${mode}`,
      disabled ? 'i-menu-submenu-disabled' : '',
      hidden ? '' : 'i-menu-submenu-open'
    ]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @click="handleClick">
    <span class="i-menu-submenu-title" :style="style" v-if="$slots.title">
      <slot name="title"></slot>
    </span>
    <transition name="slide-up">
    <ul
      class="i-menu i-menu-sub"
      :class="[
        `i-menu-${subMode}`
      ]"
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
      hidden: true,
      timer: null
    }
  },
  computed: {
    mode () {
      return this.$parent.mode
    },
    subMode () {
      return this.$parent.mode === 'horizontal' ? 'vertical' : this.$parent.mode
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
  },
  methods: {
    handleMouseenter () {
      if (this.mode !== 'horizontal') return
      this.timer && clearTimeout(this.timer)
      this.hidden = false
    },
    handleMouseleave () {
      if (this.mode !== 'horizontal') return
      this.timer = setTimeout(() => {
        this.hidden = true
      }, 100)
    },
    handleClick () {
      if (this.mode === 'horizontal') return
      this.hidden = !this.hidden
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
