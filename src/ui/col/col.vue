<template>
  <div
    class="i-col"
    :class="classList"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iColu',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    order: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  computed: {
    gutter () {
      return this.$parent.gutter
    },
    style () {
      let ret = {}
      if (this.gutter) {
        ret.paddingLeft = this.gutter / 2 + 'px'
        ret.paddingRight = ret.paddingLeft
      }
      return ret
    },
    classList () {
      let res = []
      ;[
        'span',
        'offset',
        'order',
        'pull',
        'push'
      ].forEach(prop => {
        if (this[prop]) {
          res.push(
            prop !== 'span' ? `i-col-${prop}-${this[prop]}` : `i-col-${this[prop]}`
          )
        }
      })

      ;[
        'xs',
        'sm',
        'md',
        'lg'
      ].forEach(size => {
        if (typeof this[size] === 'number') {
          res.push(`i-col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            res.push(
              prop !== 'span' ? `i-col-${size}-${prop}-${props[prop]}` : `i-col-${size}-${props[prop]}`
            )
          })
        }
      })

      return res
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./style/index";
</style>
