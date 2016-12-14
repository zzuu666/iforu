<template>
  <div class="guide">
    <h1>Switch 开关</h1>
    <demo title="基本" :intro="demo1">
      <i-switch @change="switchTest"></i-switch>
    </demo>
    <demo title="默认状态" :intro="demo1">
      <i-switch :default-checked="true" @change="switchTest2"></i-switch>
    </demo>
    <demo title="不可用" :intro="demo1">
      <i-switch :disabled="true"></i-switch>
    </demo>
    <demo title="文字和图标" :intro="demo1">
      <div class="demo-row">
        <i-switch on-text="开" off-text="关"></i-switch>
      </div>
      <div class="demo-row">
        <i-switch>
          <icon type="check" slot="checked"/>
          <icon type="cross" slot="unchecked"/>
        </i-switch>
      </div>
    </demo>
    <demo title="设置色彩" :intro="demo1">
      <i-switch on-color="#87d068" off-color="#f50" on-text="开" off-text="关"></i-switch>
    </demo>
    <demo title="两种大小" :intro="demo1">
      <div class="demo-row">
        <i-switch></i-switch>
      </div>
      <div class="demo-row">
        <i-switch size="sm"></i-switch>
      </div>
    </demo>
  </div>

</template>

<script>
import iSwitch from '../ui/switch'
import Icon from '../ui/icon'
import Demo from './demo/grid'

export default {
  name: 'SwitchGuide',
  components: {
    iSwitch,
    Icon,
    Demo
  },
  data () {
    return {
      demo1: '最简单的用法。'
    }
  },
  methods: {
    switchTest (flag) {
      if (flag) {
        console.log('Switch status is True')
      } else {
        console.log('Switch status is False')
      }
    },
    switchTest2 (flag) {
      if (flag) {
        console.log('Switch default is True status is True')
      } else {
        console.log('Switch default is True status is False')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
</style>
