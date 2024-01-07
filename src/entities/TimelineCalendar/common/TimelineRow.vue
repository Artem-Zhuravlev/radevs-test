<template>
  <div class="timeline__row">
    <div class="timeline__name">
      {{ title }}
    </div>
    <div class="timeline__main">
      <button-base
        class="timeline__btn"
        style="width: var(--cell-width);"
        variant="secondary"
      >
        John Doe
      </button-base>
      <div
        class="timeline__cell"
        v-for="item in 7"
        :key="item"
      />
    </div>
  </div>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'TimelineRow',
  components: {
    ButtonBase,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
.timeline {
  &__main {
    position: relative;
    height: var(--space-extra-big);
    display: grid;
    grid-template-columns: var(--week-grid);
  }
  &__row {
    display: grid;
    grid-template-columns: var(--left-space) 1fr;
    border: var(--border);
    border-top: none;
  }
  &__name {
    display: flex;
    align-items: center;
    padding-left: var(--space-big);
  }
  &__cell {
    border-left: var(--border);
  }
  &__btn {
    position: absolute;
    top: 15%;
  }
}
</style>
