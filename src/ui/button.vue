<template>
  <button
    :disabled="disabled"
    class="i-button"
    :class="[
      `i-button-${this.type}`,
      size ? `i-button-${this.size}` : '',
      {
        'i-button-clicked': isClicked
      }
    ]"
    @click="handleClick"
    :type="htmlType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'iButton',
  data () {
    return {
      isClicked: false,
      timeout: null
    }
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
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
