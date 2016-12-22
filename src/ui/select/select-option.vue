<template>
  <li
    class="i-select-dropdown-menu-item"
    :class="[
      disabled ? 'i-select-dropdown-menu-item-disabled' : '',
      selected === value ? 'i-select-dropdown-menu-item-selected' : ''
    ]"
    v-text="label || value"
    @click="handleClick">
  </li>
</template>

<script>
export default {
  name: 'iSelectOption',
  props: {
    value: String,
    label: String,
    disabled: Boolean
  },
  computed: {
    selected () {
      return this.$parent.value
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.changeSelected()
      this.$parent.handleClick()
      this.$parent.$emit('input', this.value)
    },
    changeSelected () {
      let label = this.label || this.value
      this.$parent.changeSelected(label)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
