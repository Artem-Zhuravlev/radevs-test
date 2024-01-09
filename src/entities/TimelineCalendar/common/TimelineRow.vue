<template>
  <div class="timeline__row">
    <div class="timeline__name">
      {{ rowData?.title }}
    </div>
    <div class="timeline__main">
      <button-base
        v-for="({ name, start, end, id }, index) in rowData.data"
        :key="index"
        class="timeline__btn"
        :style="{
          width: `calc(var(--cell-width) * ${getBookingPeriod(start, end) || 1})`,
          left: `calc(var(--cell-width) * ${getBookingOffset(start)})`
        }"
        variant="secondary"
        @click="$emit('show-info', id)"

      >
        {{ name }}
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
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  name: 'TimelineRow',
  components: {
    ButtonBase,
  },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('calendarNav', [
      'currentWeek',
    ]),
  },
  methods: {
    /**
     * Calculates the number of days between the provided start and end dates.
     * @param {string} start - The start date of the booking.
     * @param {string} end - The end date of the booking.
     * @returns {number} The number of days in the booking period.
    */
    getBookingPeriod(start, end) {
      const startDate = moment(start);
      const endDate = moment(end);
      return endDate?.diff(startDate, 'days');
    },
    /**
     * Calculates the number of days between the provided start date and
     * the current week's start date.
     * @param {string} start - The start date of the booking.
     * @returns {number} The number of days between the start date and the
     * current week's start date.
    */
    getBookingOffset(start) {
      const startDate = moment(start);
      const currentWeek = moment(this.currentWeek);

      return startDate?.diff(currentWeek, 'days');
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
    overflow: hidden;
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
    margin-left: calc(var(--cell-width) / 2);
  }
}
</style>
