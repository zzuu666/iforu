<template>
  <div
    class="i-select"
    :class="[
      size ? `i-select-${size}` : '',
      open ? 'i-select-open' : '',
      disabled ? 'i-select-disabled' : '',
      showSearch ? 'i-select-show-search' : ''
    ]"
    ref="select">
    <div
      class="i-select-selection"
      :class="[
        multiple ? 'i-select-selection--multiple' : 'i-select-selection--single'
      ]"
      @click="handleClick">
      <div class="i-select-selection__rendered">
        <div class="i-select-selection__placeholder" v-text="placeholder" v-show="!filter && !selected.length">
        </div>
        <div
          class="i-select-selection-selected-value"
          :class="[
            showSearch && open ? 'i-select-selection-selected-opacity' : ''
          ]"
          v-text="selected"
          v-show="!filter"
          v-if="!multiple">
        </div>
        <div v-if="showSearch" class="i-select-search i-select-search--inline">
          <div class="i-select-search__field__wrap">
            <input :value="filter" @input="handleSearch" class="i-select-search__field" ref="search">
            <span class="i-select-search__field__mirror" v-text="filter"></span>
          </div>
        </div>
        <ul v-if="multiple">
          <li class="i-select-selection__choice" v-for="item in selected">
            <div class="i-select-selection__choice__content" v-text="item.label"></div>
            <span class="i-select-selection__choice__remove" @click.stop="removeChoice(item.label)"></span>
          </li>
          <li class="i-select-search i-select-search--inline">

          </li>
        </ul>
      </div>
      <span class="i-select-arrow"></span>
    </div>
    <transition name="slide-up">
    <div
      v-show="open"
      :style="style"
      class="i-select-dropdown i-select-dropdown--single i-select-dropdown-placement-bottomLeft"
      :class="[
        multiple ? 'i-select-dropdown--multiple' : 'i-select-dropdown--single'
      ]">
      <ul class="i-select-dropdown-menu i-select-dropdown-menu-vertical i-select-dropdown-menu-root">
        <slot></slot>
      </ul>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'iSelect',
  props: {
    size: String,
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Array],
    disabled: Boolean,
    placeholder: [String, Number],
    showSearch: Boolean
  },
  data () {
    return {
      style: {},
      open: false,
      selected: {},
      filter: ''
    }
  },
  mounted () {
    this.initStyle()
    this.initData()
  },
  methods: {
    initStyle () {
      let select = this.$refs.select.getBoundingClientRect()
      let res = {
        width: `${select.width}px`,
        left: 0,
        top: `${select.height + 4}px`
      }
      this.style = res
    },
    initData () {
      if (this.multiple) {
        this.selected = []
      } else {
        this.selected = {}
      }
    },
    handleClick () {
      if (this.disabled) return
      this.open = !this.open
      if (!this.showSearch) return
      if (this.open) {
        this.$refs.search.focus()
      } else {
        this.$refs.search.blur()
      }
      this.filter = ''
    },
    changeSelectedMultiple (label, value) {
      this.selected.push({
        label: label || value,
        value: value
      })
    },
    handleSearch (e) {
      this.filter = e.target.value
      this.$emit('search', this.filter)
    },
    changeSelected (label, value) {
      this.selected.label = label || value
      this.selected.value = value
      this.filter = ''
    },
    removeChoice (label) {
      let index = -1
      for (let i = 0, len = this.selected.length; i < len; i++) {
        if (this.selected[i].label === label) {
          index = i
        }
      }
      if (index > -1) {
        this.selected.splice(index, 1)
      }
    }
  },
  watch: {
    selected (value) {
      if (this.multiple) {
        let arr = []
        for (let i = 0, len = value.length; i < len; i++) {
          arr.push(value[i].value)
        }
        this.$emit('input', arr)
      } else {
        this.$emit('input', value.value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
