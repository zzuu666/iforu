<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" class="logo">
      <span class="title">ANT DESIGN x SAWYER x Vue 2.0</span>
    </header>
    <row class="content">
      <i-col :span="4">
        <i-menu mode="inline" @click="selectItem" :default-open="defaultOpen" :selected-index="currentSelected">
          <item index="0"><router-link to="/">Read Me</router-link></item>
          <sub-menu index="sub1">
            <template slot="title">Components</template>
            <item-group title="General">
              <item index="1"><router-link to="/button">Button 按钮</router-link></item>
            </item-group>
            <item-group title="Layout">
              <item index="2"><router-link to="/grid">Grid 栅格</router-link></item>
            </item-group>
            <item-group title="Navigation">
              <item index="3"><router-link to="/menu">Menu 菜单</router-link></item>
            </item-group>
            <item-group title="Data Entry">
              <item index="4"><router-link to="/switch">Switch 开关</router-link></item>
              <item index="5"><router-link to="/input">Input 输入框</router-link></item>
              <item index="6"><router-link to="/radio">Radio 单选框</router-link></item>
              <item index="8"><router-link to="/select">Select 选择器</router-link></item>
            </item-group>
            <item-group title="Data Display">
              <item index="7"><router-link to="/tag">Tag 标签</router-link></item>
            </item-group>
          </sub-menu>
        </i-menu>
      </i-col>
      <i-col :span="20" class="content-right">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </i-col>
    </row>
  </div>
</template>

<script>
import Row from './ui/row'
import iCol from './ui/col'
import iMenu from './ui/menu'

const Item = iMenu.Item
const SubMenu = iMenu.SubMenu
const ItemGroup = iMenu.ItemGroup

export default {
  name: 'app',
  components: {
    Row,
    iCol,
    iMenu,
    Item,
    SubMenu,
    ItemGroup
  },
  data () {
    return {
      currentSelected: '',
      defaultOpen: ['sub1']
    }
  },
  methods: {
    selectItem (index) {
      // this.currentSelected = index
    }
  }
}
</script>

<style lang="less">
@import "./ui/style/index";

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #fff;
  z-index: 10;
  font-size: 14px;
  border-bottom: 1px solid #dfdfdf;
  .logo {
    position: relative;
    display: inline-block;
    top: 20px;
    height: 40px;
    margin-left: 40px;
    margin-right: 20px;
  }
  .title {
    position: relative;
    top: 6px;
    color: @primary-color;
  }
}
.content {
  position: relative;
  top: 90px;
  width: 90%;
  margin: 0 5%;
  a {
    display: block;
  }
  .content-right {
    padding-left: 5%;
  }
}
</style>
