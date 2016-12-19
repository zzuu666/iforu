<template>
  <transition name="zoom" @after-leave="handleAfter">
  <div
    class="i-tag"
    :class="[
      color ? 'i-tag-has-color' : ''
    ]"
    :style="style"
    v-if="!remove">
    <span class="i-tag-text">
      <slot></slot>
    </span>
    <i class="anticon anticon-cross" v-if="closeable" @click="removeThis"></i>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'iTag',
  data () {
    return {
      remove: false
    }
  },
  props: {
    color: String,
    closeable: Boolean
  },
  computed: {
    style () {
      return {
        'background-color': this.color
      }
    }
  },
  methods: {
    removeThis (e) {
      this.remove = true
      this.$emit('close', e)
    },
    handleAfter () {
      this.$emit('after')
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
