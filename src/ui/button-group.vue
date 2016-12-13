<template>
  <div
    class="i-button-group"
    :class="[
      `i-button-group-${size}`
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iButtonGroup',
  props: {
    size: String
  }
}
</script>

<style lang="less" scoped>
</style>
