<template>
  <div class="demo">
    <div class="demo-show">
      <slot></slot>
    </div>
    <div class="demo-intro">
      <span v-text="title" class="demo-intro-title"></span>
      <pre v-text="intro" class="demo-intro-text"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-grid',
  props: {
    title: String,
    intro: String
  }
}
</script>

<style lang="less" scoped>
.demo {
  position: relative;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  margin-top: 16px;
  .demo-show {
    padding: 20px;
  }
  .demo-intro {
    position: relative;
    border-top: 1px solid #dfdfdf;
    padding: 18px 8px;
    .demo-intro-title {
      position: absolute;
      background: #fff;
      top: -9px;
      left: 22px;
      padding: 0 8px;
    }
  }
}
</style>
