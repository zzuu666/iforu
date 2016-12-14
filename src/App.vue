<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" class="logo">
      <span class="title">ANT DESIGN x SAWYER x Vue 2.0</span>
    </header>
    <row class="content">
      <i-col :span="4">
        <div>
          <router-link to="/grid">Grid 栅栏</router-link>
          <router-link to="/button">Button 按钮</router-link>
          <router-link to="/switch">Switch 开关</router-link>
          <router-link to="/menu">Menu 菜单</router-link>
        </div>
      </i-col>
      <i-col :span="20">
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

export default {
  name: 'app',
  components: {
    Row,
    iCol
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
}
</style>
