<template>
  <div class="guide">
    <i-menu mode="horizontal">
      <item><icon type="mail" />
        Navigation One
      </item>
      <item :disabled="true">
        <icon type="appstore" />Navigation Two
      </item>
      <sub-menu>
        <template slot="title">
          <icon type="setting" /> Navigation Three - Submenu
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
      <item>
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </item>
    </i-menu>
    <i-menu mode="inline" class="menu-inline">
      <item><icon type="mail" />
        Navigation One
      </item>
      <item :disabled="true">
        <icon type="appstore" />Navigation Two
      </item>
      <sub-menu>
        <template slot="title">
          <icon type="setting" /> Navigation Three - Submenu
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
      <item>
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </item>
    </i-menu>
  </div>
</template>

<script>
import iMenu from '../ui/menu'
import Icon from '../ui/icon'

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
    ItemGroup
  }
}
</script>

<style lang="less" scoped>
.menu-inline {
  width: 240px
}
</style>
