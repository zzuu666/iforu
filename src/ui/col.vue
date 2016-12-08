<template>
  <div
    class="i-col"
    :class="[
      'i-col-' + span,
      offset ? 'i-col-offset-' + offset : '',
      order ? 'i-col-offset-' + order : '',
      pull ? 'i-col-pull-' + pull : '',
      push ? 'i-col-push-' + push: ''
    ]"
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
      required: true
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
      var ret = {}
      if (this.gutter) {
        ret.paddingLeft = this.gutter / 2 + 'px'
        ret.paddingRight = ret.paddingLeft
      }
      return ret
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
// generate col, offset, pull, push classes
.generate-classes(24);
.generate-classes(@n, @i: 1) when (@i < @n) {
  .i-col-@{i} {
    width: (@i * 100% / @n);
  }
  .i-col-offset-@{i} {
    margin-left: (@i * 100% / @n);
  }
  .i-col-pull-@{i} {
    right: (@i * 100% / @n);
  }
  .i-col-push-@{i} {
    left: (@i * 100% / @n);
  }
  .i-col-order-@{i} {
    order: @i;
  }
  .generate-classes(@n, (@i + 1));
}
// generate offset classes
</style>
