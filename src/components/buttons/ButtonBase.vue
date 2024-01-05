<template>
  <button
    :type="buttonType"
    class="button-base"
    :class="{
      'active': isActive,
    }"
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
.button-base {
  display: flex;
  align-items: center;
  min-width: 35px;
  min-height: 35px;
  padding: var(--space-small) var(--space-medium);
  background-color: var(--color-primary);
  color: var(--color-light);
  border-radius: var(--space-extra-small);
  cursor: pointer;
  border: none;
  transition: var(--transition-bg);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
  }

  &:focus,
  &.active {
    outline: transparent;
    background-color: var(--color-primary-focus);
  }

  &[disabled] {
    cursor: auto;
    background-color: var(--color-disabled);
    color: var(--color-text);
  }
}
</style>
