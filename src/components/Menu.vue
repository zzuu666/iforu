<template>
  <div class="guide">
    <demo title="顶部导航" :intro="demo">
      <i-menu mode="horizontal" @click="clickItem" :selected-index="index1">
        <item index="1"><icon type="mail" />
          Navigation One
        </item>
        <item :disabled="true" index="2">
          <icon type="appstore" />Navigation Two
        </item>
        <sub-menu index="sub1">
          <template slot="title">
            <icon type="setting" /> Navigation Three - Submenu
          </template>
          <item-group title="Item1">
            <item index="3">Option 1</item>
            <item index="4">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="5">Option 3</item>
            <item index="6">Option 4</item>
          </item-group>
        </sub-menu>
        <item index="7">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </item>
      </i-menu>
    </demo>
    <demo title="内嵌菜单" :intro="demo">
      <i-menu
        mode="inline"
        class="menu-inline"
        @click="clickItem2"
        @open="open2"
        @close="close2"
        :selected-index="index2">
        <sub-menu index="sub1">
          <template slot="title">
            <icon type="mail" /> Navigation One
          </template>
          <item-group title="Item1">
            <item index="1">Option 1</item>
            <item index="2">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="3">Option 3</item>
            <item index="4">Option 4</item>
          </item-group>
        </sub-menu>
        <sub-menu index="sub2">
          <template slot="title">
            <icon type="appstore" /> Navigation Two
          </template>
          <item index="5">Option 5</item>
          <item index="6">Option 6</item>
          <sub-menu index="sub3">
            <template slot="title">
              Sub menu
            </template>
            <item-group title="Item1">
              <item index="7">Option 1</item>
              <item index="8">Option 2</item>
            </item-group>
            <item-group title="Item2">
              <item index="9">Option 3</item>
              <item index="10">Option 4</item>
            </item-group>
          </sub-menu>
        </sub-menu>
        <sub-menu index="sub4">
          <template slot="title">
            <icon type="setting" /> Navigation One
          </template>
          <item index="11">Option 7</item>
          <item index="12">Option 8</item>
          <item index="13">Option 9</item>
          <item index="14">Option 10</item>
        </sub-menu>
        <item index="15"><icon type="mail" />
          Navigation Four
        </item>
      </i-menu>
    </demo>
    <demo title="只展开当前父级菜单" :intro="demo">
      <i-menu :unique="true" @click="clickItem3" :selected-index="index3" mode="inline" class="menu-inline">
        <sub-menu index="sub1">
          <template slot="title">
            <icon type="mail" /> Navigation One
          </template>
          <item-group title="Item1">
            <item index="1">Option 1</item>
            <item index="2">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="3">Option 3</item>
            <item index="4">Option 4</item>
          </item-group>
        </sub-menu>
        <sub-menu index="sub2">
          <template slot="title">
            <icon type="appstore" /> Navigation Two
          </template>
          <item index="5">Option 5</item>
          <item index="6">Option 6</item>
          <sub-menu index="sub4">
            <template slot="title">
              Sub menu
            </template>
              <item index="7">Option 1</item>
              <item index="8">Option 2</item>
          </sub-menu>
        </sub-menu>
        <sub-menu index="sub3">
          <template slot="title">
            <icon type="setting" /> Navigation One
          </template>
          <item>Option 7</item>
          <item>Option 8</item>
          <item>Option 9</item>
          <item>Option 10</item>
        </sub-menu>
      </i-menu>
    </demo>
    <demo title="垂直菜单" :intro="demo">
      <i-menu class="menu-inline" @click="clickItem4" :selected-index="index4">
        <sub-menu index="sub1">
          <template slot="title">
            <icon type="mail" /> Navigation One
          </template>
          <item-group title="Item1">
            <item index="1">Option 1</item>
            <item index="2">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="3">Option 3</item>
            <item index="4">Option 4</item>
          </item-group>
        </sub-menu>
        <sub-menu index="sub2">
          <template slot="title">
            <icon type="appstore" /> Navigation Two
          </template>
          <item index="5">Option 5</item>
          <item index="6">Option 6</item>
          <sub-menu>
            <template slot="title">
              Sub menu
            </template>
            <item-group title="Item1">
              <item index="7">Option 1</item>
              <item index="8">Option 2</item>
            </item-group>
            <item-group title="Item2">
              <item index="9">Option 3</item>
              <item index="10">Option 4</item>
            </item-group>
          </sub-menu>
        </sub-menu>
        <sub-menu index="sub3">
          <template slot="title">
            <icon type="setting" /> Navigation One
          </template>
          <item index="11">Option 7</item>
          <item index="12">Option 8</item>
          <item index="13">Option 9</item>
          <item index="14">Option 10</item>
        </sub-menu>
      </i-menu>
    </demo>
    <demo title="主题" :intro="demo">
      <div class="demo-row">
        <i-switch :default-checked="true" on-text="Dark" off-text="Light" @change="changeTheme"></i-switch>
      </div>
      <i-menu
        mode="inline"
        class="menu-inline"
        @open="open2"
        @close="close2"
        @click="clickItem5"
        :selected-index="index5"
        :default-open="defaultSub"
        :theme="theme">
        <sub-menu index="sub1">
          <template slot="title">
            <icon type="mail" /> Navigation One
          </template>
          <item-group title="Item1">
            <item index="1">Option 1</item>
            <item index="2">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="3">Option 3</item>
            <item index="4">Option 4</item>
          </item-group>
        </sub-menu>
        <sub-menu index="sub2">
          <template slot="title">
            <icon type="appstore" /> Navigation Two
          </template>
          <item index="5">Option 5</item>
          <item index="6">Option 6</item>
          <sub-menu>
            <template slot="title">
              Sub menu
            </template>
              <item index="7">Option 1</item>
              <item index="8">Option 2</item>
              <item index="9">Option 3</item>
              <item index="10">Option 4</item>
          </sub-menu>
        </sub-menu>
        <sub-menu index="sub3">
          <template slot="title">
            <icon type="setting" /> Navigation One
          </template>
          <item index="11">Option 7</item>
          <item index="12">Option 8</item>
          <item index="13">Option 9</item>
          <item index="14">Option 10</item>
        </sub-menu>
      </i-menu>
    </demo>
    <demo title="切换菜单类型" :intro="demo">
      <div class="demo-row">
        <i-switch on-text="Vertical" off-text="Inline" @change="changeMode"></i-switch>
      </div>
      <i-menu
        mode="inline"
        class="menu-inline"
        @click="clickItem6"
        :selected-index="index6"
        :mode="mode"
        :default-open="defaultSub2">
        <sub-menu index="sub1">
          <template slot="title">
            <icon type="mail" /> Navigation One
          </template>
          <item-group title="Item1">
            <item index="1">Option 1</item>
            <item index="2">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="3">Option 3</item>
            <item index="4">Option 4</item>
          </item-group>
        </sub-menu>
        <sub-menu index="sub2">
          <template slot="title">
            <icon type="appstore" /> Navigation Two
          </template>
          <item index="5">Option 5</item>
          <item index="6">Option 6</item>
          <sub-menu>
            <template slot="title">
              Sub menu
            </template>
            <item-group title="Item1">
              <item index="7">Option 1</item>
              <item index="8">Option 2</item>
            </item-group>
            <item-group title="Item2">
              <item index="9">Option 3</item>
              <item index="10">Option 4</item>
            </item-group>
          </sub-menu>
        </sub-menu>
        <sub-menu index="sub3">
          <template slot="title">
            <icon type="setting" /> Navigation One
          </template>
          <item index="11">Option 7</item>
          <item index="12">Option 8</item>
          <item index="13">Option 9</item>
          <item index="14">Option 10</item>
        </sub-menu>
      </i-menu>
    </demo>
  </div>
</template>

<script>
import iMenu from '../ui/menu'
import Icon from '../ui/icon'
import Demo from './demo/grid'
import iSwitch from '../ui/switch'

const Item = iMenu.Item
const SubMenu = iMenu.SubMenu
const ItemGroup = iMenu.ItemGroup
export default {
  name: 'MenuGuide',
  components: {
    iSwitch,
    iMenu,
    Item,
    Icon,
    SubMenu,
    ItemGroup,
    Demo
  },
  data () {
    return {
      demo: '水平的顶部导航菜单。',
      index1: '',
      index2: '',
      index3: '',
      index4: '',
      index5: '1',
      index6: '',
      defaultSub: ['sub1'],
      defaultSub2: ['sub1'],
      theme: 'dark',
      mode: 'inline'
    }
  },
  methods: {
    clickItem (index, path) {
      this.index1 = index
      console.log(path)
    },
    clickItem2 (index, path) {
      this.index2 = index
    },
    clickItem3 (index, path) {
      this.index3 = index
    },
    clickItem4 (index, path) {
      this.index4 = index
    },
    clickItem5 (index, path) {
      this.index5 = index
    },
    clickItem6 (index, path) {
      this.index6 = index
    },
    open2 () {
      console.log('open')
    },
    close2 () {
      console.log('close')
    },
    changeTheme (flag) {
      if (flag) {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
    },
    changeMode (flag) {
      if (flag) {
        this.mode = 'vertical'
        this.defaultSub2.splice(0, 1, '')
      } else {
        this.mode = 'inline'
        this.defaultSub2.splice(0, 1, 'sub1')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
.menu-inline {
  width: 240px
}
</style>
