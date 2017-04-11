<template>
  <div class="guide">
    <h1>Button Guide</h1>
    <demo title="按钮类型" :intro="demo1">
      <div class="demo-row">
        <i-button type="primary">Primary</i-button>
        <i-button>Default</i-button>
        <i-button type="ghost">Ghost</i-button>
        <i-button type="dashed">Dashed</i-button>
      </div>
    </demo>
    <demo title="图标按钮" :intro="demo1">
      <div class="demo-row">
        <i-button type="primary" icon="search" shape="circle"></i-button>
        <i-button type="primary" icon="search">Search</i-button>
        <i-button icon="search" shape="circle"></i-button>
        <i-button icon="search">Search</i-button>
      </div>
      <div class="demo-row">
        <i-button type="ghost" icon="search" shape="circle"></i-button>
        <i-button type="ghost" icon="search">Search</i-button>
        <i-button type="dashed" icon="search" shape="circle"></i-button>
        <i-button type="dashed" icon="search">Search</i-button>
      </div>
    </demo>
    <demo title="按钮尺寸" :intro="demo1">
      <div class="demo-row">
        <i-button-group>
          <i-button type="ghost" @click="setSize('lg')">Large</i-button>
          <i-button type="ghost" @click="setSize('')">Default</i-button>
          <i-button type="ghost" @click="setSize('sm')">Small</i-button>
        </i-button-group>
      </div>
      <div class="demo-row">
        <i-button type="primary" :size="size">Primary</i-button>
        <i-button :size="size">Default</i-button>
        <i-button type="ghost" :size="size">Ghost</i-button>
        <i-button type="dashed" :size="size">Dashed</i-button>
      </div>
    </demo>
    <demo title="不可用状态" :intro="demo1">
      <div class="demo-row">
        <i-button type="primary">Primary</i-button>
        <i-button type="primary" :disabled="true">Primary(disabled)</i-button>
      </div>
      <div class="demo-row">
        <i-button>Default</i-button>
        <i-button :disabled="true">Default(disabled)</i-button>
      </div>
      <div class="demo-row">
        <i-button type="ghost">Ghost</i-button>
        <i-button type="ghost" :disabled="true">Ghost(disabled)</i-button>
      </div>
      <div class="demo-row">
        <i-button type="dashed">Dashed</i-button>
        <i-button type="dashed" :disabled="true">Dashed(disabled)</i-button>
      </div>
    </demo>
    <demo title="加载中状态" :intro="demo1">
      <div class="demo-row">
        <i-button type="primary" :loading="true">Loading</i-button>
        <i-button type="primary" size="sm" :loading="true">Loading</i-button>
      </div>
      <div class="demo-row">
        <i-button type="primary" :loading="isLoading1" @click="loading1"> Click me </i-button>
        <i-button type="primary" icon="poweroff" :loading="isLoading2" @click="loading2"> Click me </i-button>
      </div>
    </demo>
    <demo title="按钮组" :intro="demo1">
      <div class="demo-row">
        <h3>Basic</h3>
        <i-button-group>
          <i-button>Cancel</i-button>
          <i-button type="primary">OK</i-button>
        </i-button-group>
        <i-button-group>
          <i-button :disabled="true">L</i-button>
          <i-button :disabled="true">M</i-button>
          <i-button :disabled="true">R</i-button>
        </i-button-group>
      </div>
      <div class="demo-row">
        <h3>With Icon</h3>
        <i-button-group>
          <i-button type="primary" icon="left">Go back</i-button>
          <i-button type="primary">
            Go forward <icon type="right" />
          </i-button>
        </i-button-group>
        <i-button-group>
          <i-button type="primary" icon="cloud" />
          <i-button type="primary" icon="cloud-download" />
        </i-button-group>
      </div>
      <div class="demo-row">
        <h3>Group Size</h3>
        <i-button-group size="sm">
          <i-button type="primary">L</i-button>
          <i-button>M</i-button>
          <i-button type="ghost">M</i-button>
          <i-button type="dashed">R</i-button>
        </i-button-group>
        <i-button-group>
          <i-button type="primary">L</i-button>
          <i-button>M</i-button>
          <i-button type="ghost">M</i-button>
          <i-button type="dashed">R</i-button>
        </i-button-group>
        <i-button-group size="lg">
          <i-button type="primary">L</i-button>
          <i-button>M</i-button>
          <i-button type="ghost">M</i-button>
          <i-button type="dashed">R</i-button>
        </i-button-group>
      </div>
    </demo>
  </div>
</template>

<script>
import Icon from '../ui/icon'
import iButton from '../ui/button'
import Demo from './demo/grid'

const iButtonGroup = iButton.Group

export default {
  name: 'GridButton',
  components: {
    Icon,
    iButton,
    iButtonGroup,
    Demo
  },
  data () {
    return {
      isLoading1: false,
      isLoading2: false,
      size: '',
      demo1: '按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。\n通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 type 值则为次按钮。不同的样式可以用来区别其重要程度。\n主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。'
    }
  },
  methods: {
    loading1 () {
      this.isLoading1 = true
    },
    loading2 () {
      this.isLoading2 = true
    },
    setSize (size) {
      this.size = size
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "index";
.show-box {
  margin: 10px auto;
}
</style>
