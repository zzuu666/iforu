<template>
  <div class="hello">
    <h1>Button Guide</h1>
    <h2>Button Type</h2>
    <div class="show-box">
      <i-button type="primary">Primary</i-button>
      <i-button>Default</i-button>
      <i-button type="ghost">Ghost</i-button>
      <i-button type="dashed">Dashed</i-button>
    </div>
    <h2>Button Size</h2>
    <div class="show-box">
      <i-button type="primary" size="lg">Primary</i-button>
      <i-button size="lg">Default</i-button>
      <i-button type="ghost" size="lg">Ghost</i-button>
      <i-button type="dashed" size="lg">Dashed</i-button>
    </div>
    <div class="show-box">
      <i-button type="primary">Primary</i-button>
      <i-button>Default</i-button>
      <i-button type="ghost">Ghost</i-button>
      <i-button type="dashed">Dashed</i-button>
    </div>
    <div class="show-box">
      <i-button type="primary" size="sm">Primary</i-button>
      <i-button size="sm">Default</i-button>
      <i-button type="ghost" size="sm">Ghost</i-button>
      <i-button type="dashed" size="sm">Dashed</i-button>
    </div>
  </div>
</template>

<script>
import iButton from '../ui/button'

export default {
  name: 'GridGuide',
  components: {
    iButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "index";
@import "../ui/iconfont";
.show-box {
  margin: 10px auto;
}
</style>
