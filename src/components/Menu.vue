<template>
  <div class="guide">
    <demo title="顶部导航" :intro="demo">
      <i-menu mode="horizontal" @click-item="clickItem" :selectedIndex="index1">
        <item index="1"><icon type="mail" />
          Navigation One
        </item>
        <item :disabled="true">
          <icon type="appstore" />Navigation Two
        </item>
        <sub-menu index="2">
          <template slot="title">
            <icon type="setting" /> Navigation Three - Submenu
          </template>
          <item-group title="Item1">
            <item index="2-1">Option 1</item>
            <item index="2-2">Option 2</item>
          </item-group>
          <item-group title="Item2">
            <item index="2-3">Option 3</item>
            <item index="2-4">Option 4</item>
          </item-group>
        </sub-menu>
        <item>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </item>
      </i-menu>
    </demo>
    <demo title="内嵌菜单" :intro="demo">
      <i-menu mode="inline" class="menu-inline" @click-item="clickItem2" :selectedIndex="index2">
        <sub-menu>
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
        <sub-menu>
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
              <item>Option 1</item>
              <item>Option 2</item>
            </item-group>
            <item-group title="Item2">
              <item>Option 3</item>
              <item>Option 4</item>
            </item-group>
          </sub-menu>
        </sub-menu>
        <sub-menu>
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
  </div>
</template>

<script>
import iMenu from '../ui/menu'
import Icon from '../ui/icon'
import Demo from './demo/grid'

const Item = iMenu.Item
const SubMenu = iMenu.SubMenu
const ItemGroup = iMenu.ItemGroup
export default {
  name: 'MenuGuide',
  components: {
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
      index2: ''
    }
  },
  methods: {
    clickItem (index, path) {
      this.index1 = index
      console.log(path)
    },
    clickItem2 (index, path) {
      this.index2 = index
    }
  }
}
</script>

<style lang="less" scoped>
.menu-inline {
  width: 240px
}
</style>
