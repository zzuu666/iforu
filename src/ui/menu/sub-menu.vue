<template>
  <li
    class="i-menu-submenu"
    :class="[
      `i-menu-submenu-${mode}`,
      disabled ? 'i-menu-submenu-disabled' : '',
      hidden ? '' : 'i-menu-submenu-open'
    ]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <span class="i-menu-submenu-title" :style="style" @click="handleClick" v-if="$slots.title">
      <slot name="title"></slot>
    </span>
    <transition :name="animitionName" v-if="$slots.default">
      <ul
        class="i-menu i-menu-sub"
        :class="[
          `i-menu-${subMode}`,
        ]"
        v-show="!hidden">
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
    },
    index: String
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
    path () {
      let path = this.$parent.path.slice()
      path.push(this.index)
      return path
    },
    animitionName () {
      if (this.mode === 'horizontal') {
        return 'slide-up'
      } else {
        return ''
      }
    },
    style () {
      let res = {}
      if (this.mode === 'inline') {
        res['padding-left'] = this.level * this.indent + 'px'
      }
      return res
    },
    selectedIndex () {
      return this.$parent.selectedIndex
    },
    clickItem () {
      return this.$parent.clickItem
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
