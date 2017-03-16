<template>
  <div class="guide">
    <demo title="三种大小">
      <i-select class="demo-select" size="lg" v-model="value" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
      <i-select class="demo-select" v-model="value" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
      <i-select class="demo-select" size="sm" v-model="value" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
    </demo>
    <demo title="基本用法">
      <i-select class="demo-select" v-model="value" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
      <i-select class="demo-select" disabled v-model="value" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
    </demo>
    <demo title="搜索框">
      <i-select class="demo-select" show-search @search="filterOptions" v-model="value" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
    </demo>
    <demo title="多选">
      <i-select class="demo-select" multiple v-model="valueArr" placeholder="请选择">
        <i-option
          v-for="item in options"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"></i-option>
      </i-select>
    </demo>
  </div>
</template>

<script>
import Demo from './demo/grid'
import iSelect from '../ui/select'

const iOption = iSelect.Option
export default {
  name: 'GuideSelect',
  components: {
    Demo,
    iSelect,
    iOption
  },
  data () {
    return {
      value: '',
      valueArr: [],
      options: [
        {
          label: '清炸排骨',
          value: 'A'
        },
        {
          label: '爆炒肉片',
          value: 'B'
        },
        {
          label: '跳水兔',
          value: 'C',
          disabled: true
        }
      ]
    }
  },
  methods: {
    filterOptions (filter) {
      this.options2 = this.options.filter(this.filterFunction(filter))
    },
    filterFunction (filter) {
      return (element) => element.label.indexOf(filter) > -1
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
.demo-select {
  width: 200px;
}
</style>
