<template>
  <div
    :style="style"
    :class="[
      justify !== 'start' ? 'i-justify-' + justify : '',
      align !== 'top' ? 'i-align-' + align : '',
      type === 'flex' ? 'i-row-flex' : 'i-row'
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iRow',
  props: {
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style () {
      let ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./style/index";
</style>
