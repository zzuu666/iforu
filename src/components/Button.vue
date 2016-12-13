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
    <h2>图标按钮</h2>
    <div class="show-box">
      <i-button type="primary" size="lg" icon="search" shape="circle"></i-button>
      <i-button type="primary" size="lg" icon="search">Search</i-button>
      <i-button icon="search" size="lg" shape="circle"></i-button>
      <i-button icon="search" size="lg">Search</i-button>
      <i-button type="ghost" size="lg" icon="search" shape="circle"></i-button>
      <i-button type="ghost" size="lg" icon="search">Search</i-button>
      <i-button type="dashed" size="lg" icon="search" shape="circle"></i-button>
      <i-button type="dashed" size="lg" icon="search">Search</i-button>
    </div>
    <div class="show-box">
      <i-button type="primary" icon="search" shape="circle"></i-button>
      <i-button type="primary" icon="search">Search</i-button>
      <i-button icon="search" shape="circle"></i-button>
      <i-button icon="search">Search</i-button>
      <i-button type="ghost" icon="search" shape="circle"></i-button>
      <i-button type="ghost" icon="search">Search</i-button>
      <i-button type="dashed" icon="search" shape="circle"></i-button>
      <i-button type="dashed" icon="search">Search</i-button>
    </div>
    <h2>不可用状态</h2>
    <div class="show-box">
      <i-button type="primary">Primary</i-button>
      <i-button>Default</i-button>
      <i-button type="ghost">Ghost</i-button>
      <i-button type="dashed">Dashed</i-button>
    </div>
    <div class="show-box">
      <i-button type="primary" :disabled="true">Primary(disabled)</i-button>
      <i-button :disabled="true">Default(disabled)</i-button>
      <i-button type="ghost" :disabled="true">Ghost(disabled)</i-button>
      <i-button type="dashed" :disabled="true">Dashed(disabled)</i-button>
    </div>
    <h2>加载中状态</h2>
    <div class="show-box">
      <i-button type="primary" :loading="true">Loading</i-button>
      <i-button type="primary" size="sm" :loading="true">Loading</i-button>
    </div>
    <div class="show-box">
      <i-button type="primary" :loading="isLoading1" @click="loading1"> Click me </i-button>
      <i-button type="primary" icon="poweroff" :loading="isLoading2" @click="loading2"> Click me </i-button>
    </div>
    <h2>按钮组合</h2>
    <div>
      <i-button-group>
        <i-button>Cancel</i-button>
        <i-button type="primary">OK</i-button>
      </i-button-group>
      <i-button-group>
        <i-button :disabled="true">L</i-button>
        <i-button :disabled="true">M</i-button>
        <i-button :disabled="true">R</i-button>
      </i-button-group>
      <i-button-group>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">M</i-button>
        <i-button type="dashed">R</i-button>
      </i-button-group>
    </div>
    <div>
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
  </div>
</template>

<script>
import Icon from '../ui/icon'
import iButton from '../ui/button'
import iButtonGroup from '../ui/button-group'

export default {
  name: 'GridGuide',
  components: {
    Icon,
    iButton,
    iButtonGroup
  },
  data () {
    return {
      isLoading1: false,
      isLoading2: false
    }
  },
  methods: {
    loading1 () {
      this.isLoading1 = true
    },
    loading2 () {
      this.isLoading2 = true
    }
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
