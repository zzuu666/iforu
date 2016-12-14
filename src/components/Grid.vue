<template>
  <div class="guide">
    <h1>Grid 栅格</h1>
    <p>24 栅格系统。</p>
    <h2>代码展示</h2>
    <demo title="区块间隔" :intro="demo1">
      <row :gutter="16">
        <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
        <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
        <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
        <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
      </row>
    </demo>
    <demo title="左右偏移" :intro="demo2">
      <row>
        <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
        <i-col :span="6" :offset="6"><div class="col-box">col-6</div></i-col>
        <i-col :span="6"><div class="gutter-box">col-6</div></i-col>
      </row>
    </demo>
    <demo title="栅格排序" :intro="demo3">
      <row>
        <i-col :span="6" :push="18"><div class="gutter-box">col-6 col-pull-18</div></i-col>
        <i-col :span="18" :pull="6"><div class="col-box">col-18 col-push-6</div></i-col>
      </row>
    </demo>
    <demo title="Flex 布局" :intro="demo4">
      <p class="demo-p">sub-element align left</p>
      <row type="flex">
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
      </row>
      <p class="demo-p">sub-element align center</p>
      <row type="flex" justify="center">
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
      </row>
      <p class="demo-p">sub-element align right</p>
      <row type="flex" justify="end">
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
      </row>
      <p class="demo-p">sub-element monospaced arrangement</p>
      <row type="flex" justify="space-between">
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
      </row>
      <p class="demo-p">sub-element align full</p>
      <row type="flex" justify="space-around">
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
        <i-col :span="4"><div class="gutter-box">col-4</div></i-col>
        <i-col :span="4"><div class="col-box">col-4</div></i-col>
      </row>
    </demo>
    <demo title="Flex 排序" :intro="demo5">
      <row type="flex">
        <i-col :span="6" :order="4"><div class="gutter-box">1st col-order-4</div></i-col>
        <i-col :span="6" :order="3"><div class="col-box">2nd col-order-3</div></i-col>
        <i-col :span="6" :order="2"><div class="gutter-box">3rd col-order-2</div></i-col>
        <i-col :span="6" :order="1"><div class="col-box">4th col-order-1</div></i-col>
      </row>
    </demo>
    <demo title="响应式布局" :intro="demo6">
      <row type="flex">
        <i-col :xs="2" :sm="4" :md="6" :lg="8"><div class="gutter-box"> Col </div></i-col>
        <i-col :xs="20" :sm="16" :md="12" :lg="8"><div class="col-box"> Col </div></i-col>
        <i-col :xs="2" :sm="4" :md="6" :lg="8"><div class="gutter-box"> Col </div></i-col>
      </row>
    </demo>
    <demo title="其他属性的响应式" :intro="demo7">
      <row type="flex">
        <i-col :xs="{span: 5, offset: 1}" :lg="{span: 6, offset: 2}"><div class="gutter-box"> Col </div></i-col>
        <i-col :xs="{span: 11, offset: 1}" :lg="{span: 6, offset: 2}"><div class="col-box"> Col </div></i-col>
        <i-col :xs="{span: 5, offset: 1}" :lg="{span: 6, offset: 2}"><div class="gutter-box"> Col </div></i-col>
      </row>
    </demo>
  </div>
</template>

<script>
import Row from '../ui/row'
import iCol from '../ui/col'
import Demo from './demo/grid'

export default {
  name: 'GridGuide',
  components: {
    Row,
    iCol,
    Demo
  },
  data () {
    return {
      demo1: '栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。',
      demo2: '列偏移。\n使用 offset 可以将列向右侧偏。例如，:offset="4" 将元素向右侧偏移了 4 个列（column）的宽度。',
      demo3: '列排序。\n通过使用 push 和 pull 类就可以很容易的改变列（column）的顺序。',
      demo4: 'Flex 布局基础。\n使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。',
      demo5: '通过 Flex 布局的 Order 来改变元素的排序。',
      demo6: '参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg。',
      demo7: 'span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs="6" 相当于 :xs="{span: 6}"。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "index";

.demo-p {
  position: relative;
  margin: 5px auto;
  padding: 6px 16px;
  border-bottom: 1px solid #dfdfdf;
  font-size: 14px;
}
.base-box {
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
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
