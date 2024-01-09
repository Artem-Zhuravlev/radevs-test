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
    escClose: {
      type: Boolean,
      default: true,
    },
    backdropClose: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    localValue: {
      get() {
        document.addEventListener('keyup', this.onEscPress);
        return this.value;
      },
      set(value) {
        if (!value) {
          document.removeEventListener('keyup', this.onEscPress);
        }

        this.$emit('input', value);
      },
    },
  },
  methods: {
    // backdrop click method
    onBackdropClick() {
      const { backdropClose } = this;
      if (!backdropClose) {
        return;
      }

      this.hide('onBackdropClick');
    },

    // esc click method
    onEscPress({ keyCode }) {
      const { escClose } = this;
      if (!escClose) {
        return;
      }

      if (keyCode === 27) {
        this.hide('onEscClick');
      }
    },

    // method for hiding modal window
    hide(closeType = null) {
      this.$emit('onClose', closeType);
      this.localValue = false;
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
  left: 0;
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
    border-top: var(--border);
  }
}
</style>
