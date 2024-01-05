<template>
  <div
    class="modal-backdrop"
    @click="onBackdropClick"
    @keydown.esc="onEscKey"
    v-if="localValue"
    tabindex="0"
  >
    <section
      class="modal-window"
      role="dialog"
      @click.stop
    >
      <div
        class="modal-window__main"
      >
        <h3
          v-if="title"
          class="modal-window__title"
        >
          {{ title }}
        </h3>
        <slot />
      </div>
      <footer class="modal-window__footer">
        <button-base
          @click="localValue = false"
        >
          Close
        </button-base>
      </footer>
    </section>
  </div>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'ModalWindow',
  components: {
    ButtonBase,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    onBackdropClick() {
      this.localValue = false;
    },
    onEscKey(event) {
      if (event.key === 'Escape') {
        this.localValue = false;
      }
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
.modal-backdrop {
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  min-width: 100vw;
  min-height: 100dvh;
  background-color: var(--color-backdrop);
}

.modal-window {
  background-color: var(--color-white);
  max-width: 300px;
  width: 100%;
  border-radius: var(--space-small);

  &__title {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: var(--space-medium);
  }

  &__main {
    padding: var(--space-medium);
  }

  &__footer {
    padding: var(--space-medium);
    border-top: 1px solid var(--color-border);
  }
}
</style>
