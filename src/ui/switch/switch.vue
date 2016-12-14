<template>
<span
  class="i-switch"
  :class="[
    `i-switch-${size}`,
    {
      'i-switch-checked': flag,
      'i-switch-disabled': disabled
    }
  ]"
  @click="handleClick"
  :style="style">
  <span class="i-switch-inner" v-if="children || $slots.checked || $slots.checked">
    <span v-text="children" v-if="!$slots.checked && !$slots.checked"></span>
    <slot name="checked" v-if="flag"></slot>
    <slot name="unchecked" v-if="!flag"></slot>
  </span>
</span>
</template>

<script>
export default {
  name: 'iSwitch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    onText: String,
    offText: String,
    onColor: String,
    offColor: String,
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    children () {
      return this.flag ? this.onText : this.offText
    }
  },
  data () {
    return {
      flag: false,
      style: {}
    }
  },
  created () {
    this.initState()
  },
  methods: {
    initState () {
      this.flag = this.defaultChecked
      if (this.onColor || this.offColor) {
        this.setBackground(this.flag)
      }
    },
    handleClick () {
      if (this.disabled) {
        return
      }
      this.flag = !this.flag
      this.$emit('change', this.flag)
    },
    setBackground (value) {
      if (value) {
        this.style['background-color'] = this.onColor
        this.style['border-color'] = this.onColor
      } else {
        this.style['background-color'] = this.offColor
        this.style['border-color'] = this.offColor
      }
    }
  },
  // 不采用 watch flag 去触发change是因为defaultChecked若为True则会直接触发change事件
  watch: {
    checked (value) {
      this.flag = value
      this.$emit('change', this.flag)
    },
    flag (value) {
      if (this.onColor || this.offColor) {
        this.setBackground(value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
