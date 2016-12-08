<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>区块间隔</h2>
    <row :gutter="16">
      <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
      <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
      <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
      <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
    </row>
    <h2>左右偏移</h2>
    <row>
      <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
      <i-col :span="6" :offset="6"><div class="gutter-box">col-6</div></i-col>
      <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
    </row>
    <h2>栅格排序</h2>
    <row>
      <i-col :span="6" :push="18"><div class="gutter-box">col-6 col-pull-18</div></i-col>
      <i-col :span="18" :pull="6"><div class="col-box">col-18 col-push-6</div></i-col>
    </row>
    <h2>Flex 布局</h2>
    <row type="flex">
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
    </row>
    <row type="flex" justify="center">
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
    </row>
    <row type="flex" justify="end">
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
    </row>
    <row type="flex" justify="space-between">
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
    </row>
    <row type="flex" justify="space-around">
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
      <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
      <i-col :span="4"><div class="col-box">col-4</div></i-col>
    </row>
  </div>
</template>

<script>
import Row from '../ui/row'
import iCol from '../ui/col'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Row,
    iCol
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "index";
.base-box {
  height: 40px;
  line-height: 40px;
  color: #fff;
}
.gutter-box {
  .base-box;
  background: @blue-3;
}
.col-box {
  .base-box;
  background: @blue-4;
}
</style>
