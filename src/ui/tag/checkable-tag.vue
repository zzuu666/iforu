<template>
  <div
    class="i-tag i-tag-checkable"
    :class="[
      checked ? 'i-tag-checkable-checked' : ''
    ]"
    @click="handleClick">
    <span class="i-tag-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'iTag',
  props: {
    checked: Boolean,
    index: Number
  },
  methods: {
    handleClick () {
      this.$emit('change', !this.checked, this.index)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
