<template>
  <div class="guide">
    <demo class="input-example" title="基本使用" intro="基本使用。">
      <div class="demo-row">
        <i-input placeholder="basic" v-model="value"/>
      </div>
      <div class="demo-row">
        <p>input {{value}}</p>
      </div>
    </demo>
    <demo class="input-example" title="三种大小" intro="基本使用。">
      <div class="demo-row"><i-input size="lg" placeholder="This is large size" /></div>
      <div class="demo-row"><i-input placeholder="This is normal size" /></div>
      <div class="demo-row"><i-input size="sm" placeholder="This is small size" /></div>
    </demo>
    <demo class="input-example" title="前置/后置标签" intro="基本使用。">
      <div class="demo-row">
        <i-input placeholder="basic"><icon type="setting" slot="append" /></i-input>
      </div>
      <div class="demo-row">
        <i-input placeholder="basic"><icon type="setting" slot="prepend" /></i-input>
      </div>
      <div class="demo-row">
        <i-input placeholder="basic">
          <template slot="prepend">http://</template>
          <template slot="append">.com</template>
        </i-input>
      </div>
    </demo>
    <demo class="input-example" title="输入框组合" intro="基本使用。">
      <i-input-group size="lg">
        <i-col :span="4">
          <i-input placeholder="basic" />
        </i-col>
        <i-col :span="12">
          <i-input placeholder="basic" />
        </i-col>
      </i-input-group>
    </demo>
  </div>
</template>

<script>
import Icon from '../ui/icon'
import iInput from '../ui/input'
import Row from '../ui/row'
import iCol from '../ui/col'
import Demo from './demo/grid'

const iInputGroup = iInput.Group
export default {
  name: '',
  components: {
    Row,
    Demo,
    iCol,
    Icon,
    iInput,
    iInputGroup
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
.input-example {
  width: 600px;
}
</style>
