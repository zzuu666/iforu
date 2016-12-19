<template>
  <div class="guide">
    <i-select></i-select>
  </div>
</template>

<script>
import Demo from './demo/grid'
import iSelect from '../ui/select'

export default {
  name: 'GuideSelect',
  components: {
    Demo,
    iSelect
  }
}
</script>

<style lang="less" scoped>
@import "index";
</style>
