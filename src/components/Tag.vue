<template>
  <div class="guide">
    <demo title="基本">
      <i-tag>Tag 1</i-tag>
      <i-tag :closeable="true">Tag 2</i-tag>
      <i-tag :closeable="true" @close="handleClose" @after="handleAfter">Tag 3</i-tag>
    </demo>
    <demo title="色彩">
      <i-tag color="#f50" :closeable="true">#f50</i-tag>
      <i-tag color="#87d068">#87d068</i-tag>
      <i-tag color="#108ee9">#108ee9</i-tag>
    </demo>
    <demo title="可选择">
      <i-check-tag v-for="(item, index) in checkTags"
        :index="index"
        @change="handleChange"
        :checked="item.status">{{item.item}}</i-check-tag>
    </demo>
  </div>
</template>

<script>
import Demo from './demo/grid'
import iTag from '../ui/tag'

const iCheckTag = iTag.CheckableTag
export default {
  name: 'GuideTag',
  data () {
    return {
      checkTags: [
        {
          item: 'Movie',
          status: true
        },
        {
          item: 'Books',
          status: false
        },
        {
          item: 'Music',
          status: false
        }
      ]
    }
  },
  components: {
    Demo,
    iTag,
    iCheckTag
  },
  methods: {
    handleClose () {
      console.log('Close Tag 3')
    },
    handleAfter () {
      console.log('Animition finish')
    },
    handleChange (flag, index) {
      this.checkTags[index].status = flag
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
</style>
