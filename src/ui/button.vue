<template>
  <button
    :disabled="disabled"
    class="i-button"
    :class="[
      `i-button-${this.type}`,
      size ? `i-button-${this.size}` : '',
      shape === 'circle' ? 'i-button-circle' : '',
      {
        'i-button-clicked': isClicked,
        'i-button-loading': loading
      }
    ]"
    :type="htmlType"
    @click="handleClick"
    @mouseup="handleMouseUp">
    <icon :type="loading ? 'loading' : icon" v-if="icon || loading"></icon>
    <span v-if="$slots.default && shape !== 'circle'">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  name: 'iButton',
  data () {
    return {
      isClicked: false,
      timeout: null
    }
  },
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    shape: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean
  },
  methods: {
    handleClick (e) {
      this.isClicked = false
      setTimeout(() => {
        this.isClicked = true
      }, 10)
      this.timeout && clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.isClicked = false
      }, 500)

      this.$emit('click', e)
    },
    // Handle auto focus when click button in Chrome
    handleMouseUp (e) {
      e.currentTarget.blur()
    }
  }
}
</script>

<style lang="less">
@import "index";

.i-button {
  .btn;

  &-primary {
    .btn-primary;
  }
  &-default {
    .btn-default;
  }
  &-ghost {
    .btn-ghost;
  }
  &-dashed {
    .btn-dashed
  }
  &-circle,
  &-circle-outline {
    .btn-circle(i-button);
  }
  &&-loading {
    padding-left: 29px;
    pointer-events: none;
    position: relative;
    .@{iconfont-css-prefix} {
      margin-left: -14px;
      transition: all .3s @ease-in-out;
    }
    &:before {
      display: block;
    }
  }
  &-sm&-loading {
    padding-left: 24px;
    .@{iconfont-css-prefix} {
      margin-left: -17px;
    }
  }
  &-group {
    .btn-group(i-button);
  }
  &:not(&-circle):not(&-circle-outline)&-icon-only {
    padding-left: 8px;
    padding-right: 8px;
  }

  > .@{iconfont-css-prefix} + span,
  > span + .@{iconfont-css-prefix} {
    margin-left: 0.5em;
  }
}

@keyframes buttonEffect {
  to {
    opacity: 0;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
  }
}

// define base btn
.btn () {
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  font-weight: @btn-font-weight;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: @line-height-base;
  .button-size(@btn-padding-base; @font-size-base; @btn-border-radius-base);
  user-select: none;
  transition: all .3s @ease-in-out;

  &,
  &:active,
  &:focus {
    outline: 0;
  }

  &:not([disabled]):hover {
    text-decoration: none;
  }

  &:not([disabled]):active {
    outline: 0;
    transition: none;
  }

  &.disabled,
  &[disabled] {
    cursor: not-allowed;
    > * {
      pointer-events: none;
    }
  }
  &-lg {
    .button-size(@btn-padding-lg; @btn-font-size-lg; @btn-border-radius-base);
  }
  &-sm {
    .button-size(@btn-padding-sm; @font-size-base; @btn-border-radius-sm);
  }
  &-clicked:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: inherit;
    border: 0 solid @primary-color;
    opacity: 0.4;
    animation: buttonEffect 0.36s ease-out forwards;
    display: block;
  }
  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: #fff;
    opacity: 0.35;
    content: '';
    border-radius: inherit;
    z-index: 1;
    transition: opacity .2s;
    pointer-events: none;
    display: none;
  }
}
.button-size (@padding; @font-size; @border-radius) {
  padding: @padding;
  font-size: @font-size;
  border-radius: @border-radius;
}
.button-disabled () {
  &.disabled,
  &[disabled] {
    &,
    &:hover,
    &:focus,
    &:active,
    &.active {
      .button-color(@btn-disable-color; @btn-disable-bg; @btn-disable-border);
    }
  }
}
.button-disabled () {
  &.disabled,
  &[disabled] {
    &,
    &:hover,
    &:focus,
    &:active,
    &.active {
      .button-color(@btn-disable-color, @btn-disable-bg, @btn-disable-border);
    }
  }
}
.button-color (@color, @background, @border) {
  color: @color;
  background-color: @background;
  border-color: @border;
}
.button-variant-primary (@color, @background) {
  .button-color(@color, @background, @background);

  &:hover,
  &:focus {
    .button-color(@color, tint(@background, 20%), tint(@background, 20%));
  }

  &:active,
  &.active {
    .button-color(@color, shade(@background, 5%), shade(@background, 5%));
  }

  .button-disabled();
}
.button-variant-other (@color, @background, @border) {
  .button-color(@color, @background, @border);

  &:hover,
  &:focus {
    .button-color(tint(@primary-color, 20%), @background, tint(@primary-color, 20%));
  }

  &:active,
  &.active {
    .button-color(shade(@primary-color, 5%), @background, shade(@primary-color, 5%));
  }

  .button-disabled();
}
// primary button style
.btn-primary () {
  .button-variant-primary(@btn-primary-color, @btn-primary-bg);
}
// default button style
.btn-default () {
  .button-variant-other(@btn-default-color, @btn-default-bg, @btn-default-border);
  &:hover,
  &:focus,
  &:active,
  &.active {
    background: #fff;
  }
}
// ghost button style
.btn-ghost () {
  .button-variant-other(@btn-ghost-color, @btn-ghost-bg, @btn-ghost-border);
}

// dashed button style
.btn-dashed () {
  .button-variant-other(@btn-ghost-color, @btn-ghost-bg, @btn-ghost-border);
  border-style: dashed;
}
.btn-circle (@btnClassName: btn) {
  .square(@btn-circle-size);
  .button-size(0; @font-size-base + 2; 50%);

  &.@{btnClassName}-lg {
    .square(@btn-circle-size-lg);
    .button-size(0; @btn-font-size-lg + 2; 50%);
  }

  &.@{btnClassName}-sm {
    .square(@btn-circle-size-sm);
    .button-size(0; @font-size-base; 50%);
  }
}
// button group base
.button-group-base(@btnClassName) {
  position: relative;
  display: inline-block;
  > .@{btnClassName} {
    position: relative;
    float: left;
    &:hover,
    &:focus,
    &:active,
    &.active {
      z-index: 2;
    }
  }

  // size
  &-lg > .@{btnClassName} {
    .button-size(@btn-padding-lg; @btn-font-size-lg; @btn-border-radius-base);
  }

  &-sm > .@{btnClassName} {
    .button-size(@btn-padding-sm; @font-size-base; @btn-border-radius-sm);
    > .@{iconfont-css-prefix} {
      font-size: @font-size-base;
    }
  }
}
// Horizontal button groups styl
// --------------------------------------------------
.btn-group(@btnClassName: btn) {
  .button-group-base(@btnClassName);

  .@{btnClassName} + .@{btnClassName},
  .@{btnClassName} + &,
  & + .@{btnClassName},
  & + & {
    margin-left: -1px;
  }

  .@{btnClassName}:not(:first-child):not(:last-child) {
    border-radius: 0;
    padding-left: 8px;
    padding-right: 8px;
  }

  > .@{btnClassName}:first-child {
    margin-left: 0;
    &:not(:last-child) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      padding-right: 8px;
    }
  }

  > .@{btnClassName}:last-child:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding-left: 8px;
  }

  & > & {
    float: left;
  }

  & > &:not(:first-child):not(:last-child) > .@{btnClassName} {
    border-radius: 0;
  }

  & > &:first-child:not(:last-child) {
    > .@{btnClassName}:last-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      padding-right: 8px;
    }
  }

  & > &:last-child:not(:first-child) > .@{btnClassName}:first-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding-left: 8px;
  }
}
</style>
