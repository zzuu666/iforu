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
    defaultOpen () {
      return this.$parent.defaultOpen
    },
    clickItem () {
      return this.$parent.clickItem
    },
    open () {
      return this.$parent.open
    },
    close () {
      return this.$parent.close
    },
    uniqueOpen () {
      return this.$parent.uniqueOpen
    }
  },
  created () {
    this.initStatus()
  },
  methods: {
    initStatus () {
      if (this.defaultOpen.indexOf(this.index) !== -1) {
        this.hidden = false
      } else {
        this.hidden = true
      }
    },
    handleMouseenter () {
      if (this.mode === 'inline') return
      this.timer && clearTimeout(this.timer)
      this.hidden = false
      this.handleFadeack()
    },
    handleMouseleave () {
      if (this.mode === 'inline') return
      this.timer = setTimeout(() => {
        this.hidden = true
        this.handleFadeack()
      }, 100)
    },
    handleClick () {
      if (this.mode === 'horizontal') return
      this.hidden = !this.hidden
      this.handleFadeack()
    },
    handleFadeack () {
      if (this.hidden) {
        this.close(this.index, this.path)
      } else {
        this.open(this.index, this.path)
      }
    }
  },
  watch: {
    uniqueOpen (value) {
      if (this.level > 1) return
      if (this.index === value) {
        this.hidden = false
      } else {
        this.hidden = true
      }
    },
    defaultOpen () {
      if (this.defaultOpen.indexOf(this.index) !== -1) {
        this.hidden = false
      } else {
        this.hidden = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
