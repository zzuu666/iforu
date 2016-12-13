<template>
  <button
    :disabled="disabled"
    class="i-button"
    :class="[
      `i-button-${this.type}`,
      size ? `i-button-${this.size}` : '',
      shape === 'circle' ? 'i-button-circle' : '',
      {
        'i-button-clicked': isClicked,
        'i-button-loading': loading
      }
    ]"
    :type="htmlType"
    @click="handleClick"
    @mouseup="handleMouseUp">
    <icon :type="loading ? 'loading' : icon" v-if="icon || loading"></icon>
    <span v-if="$slots.default && shape !== 'circle'">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'iButton',
  data () {
    return {
      isClicked: false,
      timeout: null
    }
  },
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    shape: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean
  },
  methods: {
    handleClick (e) {
      this.isClicked = false
      setTimeout(() => {
        this.isClicked = true
      }, 10)
      this.timeout && clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.isClicked = false
      }, 500)

      this.$emit('click', e)
    },
    // Handle auto focus when click button in Chrome
    handleMouseUp (e) {
      e.currentTarget.blur()
    }
  }
}
</script>

<style lang="less">
@import "./style/index";
</style>
