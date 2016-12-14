<template>
  <li
    class="i-menu-item-group">
    <div class="i-menu-item-group-title" v-if="title" v-text="title"></div>
    <ul class="i-menu-item-group-list" v-if="$slots.default">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'iMenuItemGroup',
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
