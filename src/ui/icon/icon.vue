<template>
  <i
    class="anticon"
    :class="[
      `anticon-${type}`,
      {
        'anticon-spin': spin || type === 'loading'
      }
    ]"></i>
</template>

<script>
  export default {
    name: 'iIcon',
    props: {
      type: String,
      spin: Boolean
    }
  }
</script>
<style lang="less" scoped>
@import "./style/index";
</style>
