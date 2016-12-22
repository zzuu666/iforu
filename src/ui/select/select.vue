<template>
  <div
    class="i-select"
    :class="[
      size ? `i-select-${size}` : '',
      open ? 'i-select-open' : '',
      disabled ? 'i-select-disabled' : ''
    ]"
    ref="select">
    <div
      class="i-select-selection"
      :class="[
        multiple ? 'i-select-selection--multiple' : 'i-select-selection--single'
      ]"
      @click="handleClick">
      <div class="i-select-selection__rendered">
        <div class="i-select-selection-selected-value" v-text="selected || placeholder">
        </div>
      </div>
      <span class="i-select-arrow"></span>
    </div>
    <transition name="slide-up">
    <div v-show="open" :style="style" class="i-select-dropdown i-select-dropdown--single i-select-dropdown-placement-bottomLeft">
      <ul class="i-select-dropdown-menu i-select-dropdown-menu-vertical i-select-dropdown-menu-root">
        <slot></slot>
      </ul>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'iSelect',
  props: {
    size: String,
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    disabled: Boolean,
    placeholder: [String, Number]
  },
  data () {
    return {
      style: {},
      open: false,
      selected: ''
    }
  },
  mounted () {
    this.initStyle()
  },
  methods: {
    initStyle () {
      let select = this.$refs.select.getBoundingClientRect()
      let res = {
        width: `${select.width}px`,
        left: 0,
        top: `${select.height + 4}px`
      }
      this.style = res
    },
    handleClick () {
      if (this.disabled) return
      this.open = !this.open
    },
    changeSelected (text) {
      this.selected = text
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
