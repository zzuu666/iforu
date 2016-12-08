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
@import "index";
.i-col {
  position: relative;
  float: left;
  box-sizing: border-box;
  flex: 0 0 auto;
}
@columns: 24;

// generate normal class
.generate-classes(@columns);
// generate col, offset, order, pull, push function
.generate-classes (@n, @size: ~'',@i: 1) when (@i <= @n) {
  .i-col@{size}-@{i} {
    width: (@i * 100% / @n);
  }
  .i-col@{size}-offset-@{i} {
    margin-left: (@i * 100% / @n);
  }
  .i-col@{size}-pull-@{i} {
    right: (@i * 100% / @n);
  }
  .i-col@{size}-push-@{i} {
    left: (@i * 100% / @n);
  }
  .i-col@{size}-order-@{i} {
    order: @i;
  }
  .generate-classes(@n, @size, (@i + 1));
}
// generate media query

// Extra small grid width < 768px
//
// Columns, offsets, pushes, and pulls for extra small devices like
// smartphones.

.generate-classes(@columns, -xs);

// Small grid width >= 768px
//
// Columns, offsets, pushes, and pulls for the small device range, from phones
// to tablets.

@media (min-width: @screen-sm-min) {
  .generate-classes(@columns, -sm);
}

// Medium grid width >= 992px
//
// Columns, offsets, pushes, and pulls for the desktop device range.

@media (min-width: @screen-md-min) {
  .generate-classes(@columns, -md);
}

// Large grid width >= 1200px
//
// Columns, offsets, pushes, and pulls for the large desktop device range.

@media (min-width: @screen-lg-min) {
  .generate-classes(@columns, -lg);
}

</style>
