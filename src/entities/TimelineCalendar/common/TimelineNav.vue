<template>
  <nav class="timeline__nav">
    <ul class="timeline__list">
      <li class="timeline__item">
        <button-base>
          <icon-chevron />
        </button-base>
      </li>
      <li class="timeline__item">
        <button-base>
          <icon-chevron
            direction="right"
          />
        </button-base>
      </li>
      <li class="timeline__item">
        <button-base>
          Today
        </button-base>
      </li>
    </ul>
  </nav>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';
import IconChevron from '@/components/icons/IconChevron.vue';

export default {
  name: 'TimelineNav',
  components: {
    ButtonBase,
    IconChevron,
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import '@/styles/mixins';
.timeline {
  &__nav {
    margin-bottom: var(--space-medium);
  }
  &__list {
    display: flex;
    gap: var(--space-medium);
    @include list-reset();
  }
}
</style>
