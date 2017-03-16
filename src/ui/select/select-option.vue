<template>
  <li
    class="i-select-dropdown-menu-item"
    :class="[
      disabled ? 'i-select-dropdown-menu-item-disabled' : '',
      selected ? 'i-select-dropdown-menu-item-selected' : ''
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
      if (this.multiple) {
        return this.$parent.value.indexOf(this.value) > -1
      } else {
        return this.$parent.value === this.value
      }
    },
    multiple () {
      return this.$parent.multiple
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      if (this.multiple) {
        if (this.selected) {
          let label = this.label || this.value
          this.$parent.removeChoice(label)
        } else {
          this.$parent.changeSelectedMultiple(this.label, this.value)
        }
      } else {
        this.changeSelected()
      }
      this.$parent.handleClick()
    },
    changeSelected () {
      this.$parent.changeSelected(this.label, this.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
