<template>
  <button
    :type="buttonType"
    class="button-base"
    :class="[{
      'active': isActive,
    },variant]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: {
    buttonType: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'submit'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value);
      },
    },
  },
  methods: {
    onClick() {
      if (this.disabled) { return; }

      this.$emit('click');
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import '@/styles/mixins';
.button-base {
  @include center;
  @include min-size(var(--size-small));
  padding: var(--space-small) var(--space-medium);
  border-radius: var(--space-extra-small);
  cursor: pointer;
  border: none;

  &.primary {
    background-color: var(--color-primary);
    color: var(--color-light);
    transition: var(--transition-bg);

    &:hover:not(:disabled) {
      background-color: var(--color-primary-hover);
    }

    &:focus,
    &.active {
      background-color: var(--color-primary-focus);
    }
  }

  &.secondary {
    background-color: var(--color-text);
    color: var(--color-white);
    transition: var(--transition-opacity);

    &:hover:not(:disabled) {
      opacity: 0.8;
    }

    &:focus,
    &.active {
      opacity: 0.7;
    }
  }

  &:focus {
    outline: transparent;
  }

  &[disabled] {
    cursor: auto;
    background-color: var(--color-disabled);
    color: var(--color-text);
  }
}
</style>
