<template>
  <modal-window
    v-model="localValue"
    :title="item?.name"
    class="timeline__modal"
  >
    <ul class="timeline-contacts">
      <li
        v-if="item?.phone"
        class="timeline-contacts__item"
      >
        <a
          :href="`tel:${item?.phone}`"
          class="timeline-contacts__link"
        >
          {{ item?.phone }}
        </a>
      </li>
      <li
        v-if="item?.email"
        class="timeline-contacts__item"
      >
        <a
          :href="`mailto:${item?.email}`"
          class="timeline-contacts__link"
        >
          {{ item?.email }}
        </a>
      </li>
    </ul>
    <ul class="timeline-contacts">
      <li
        v-if="item?.typeOfApartments"
        class="timeline-contacts__item"
      >
        {{ item?.typeOfApartments }}
      </li>
      <li class="timeline-contacts__item">
        <strong>Number of guests</strong>
      </li>
      <li
        v-if="item?.guestInfo?.adults"
        class="timeline-contacts__item">
        Adults: {{ item?.guestInfo?.adults }}
      </li>
      <li class="timeline-contacts__item">
        Children: {{ item?.guestInfo?.children }}
      </li>
    </ul>
  </modal-window>
</template>

<script>
import ModalWindow from '@/components/modals/ModalWindow.vue';

export default {
  name: 'TimelineInfoModal',
  components: {
    ModalWindow,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
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
};
</script>

<style
  lang="scss"
  scoped
>
@import '@/styles/mixins';
.timeline-contacts {
  @include list-reset();

  &:not(:last-of-type) {
    margin-bottom: var(--space-big);
  }

  &__link {
    color: var(--color-text);
    text-decoration: none;
  }
}

</style>
