<template>
  <div
    class="i-row"
    :style="style"
    :class="[
      justify !== 'start' ? 'i-justify-' + justify : '',
      align !== 'top' ? 'i-align-' + align : '',
      type === 'flex' ? 'i-row-flex' : 'i-row-clearfix'
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
@import "index";
.i-row {
  position: relative;
  height: auto;
}
.i-row-clearfix {
  .clearfix;
}
.i-row-flex {
  display: flex;
}
.i-justify-start {
  justify-content: flex-start;
}
.i-justify-end {
  justify-content: flex-end;
}
.i-justify-center {
  justify-content: center;
}
.i-justify-space-between {
  justify-content: space-between;
}
.i-justify-space-around {
  justify-content: space-around;
}
.i-align-top {
  align-items: flex-start
}
.i-align-bottom {
  align-items: flex-end;
}
.i-align-middle {
  align-items: center;
}
.i-align-baseline {
  align-items: baseline;
}
.i-align-stretch {
  align-items: stretch;
}
</style>
