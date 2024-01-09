<template>
  <header class="timeline__header">
    <div class="timeline__days">
      <div
        class="timeline__day"
        :class="{
          'timeline__day--active': item === today
        }"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TimelineHeader',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState('calendarNav', [
      'today',
    ]),
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import '@/styles/mixins';
.timeline {
  &__header {
    padding-left: var(--left-space);
    border: var(--border);
  }

  &__days {
    display: grid;
    grid-template-columns: var(--week-grid);
  }

  &__day {
    @include center;
    border-left: var(--border);
    height: var(--space-extra-big);

    &--active {
      background-color: var(--color-info);
    }
  }
}
</style>
