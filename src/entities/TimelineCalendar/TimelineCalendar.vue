<template>
  <div class="timeline">
    <timeline-nav />
    <timeline-header
      :items="week"
    />
    <div class="timeline__body">
      <timeline-row
        title="Premier Suite"
      />
    </div>
  </div>
</template>

<script>
import TimelineHeader from './common/TimelineHeader.vue';
import TimelineRow from './common/TimelineRow.vue';
import TimelineNav from './common/TimelineNav.vue';

export default {
  name: 'TimelineCalendar',
  components: {
    TimelineHeader,
    TimelineRow,
    TimelineNav,
  },
  data() {
    return {
      week: [
        '2023-12-24',
        '2023-12-25',
        '2023-12-26',
        '2023-12-27',
        '2023-12-28',
        '2023-12-29',
        '2023-12-30',
      ],
    };
  },
};
</script>

<style
  lang="scss"
  scoped
>
.timeline {
  /* styles config for timeline calendar */
  --cell-width: calc(100% / 7);
  --left-space: 200px;
  --week-grid: repeat(7, 1fr);
}
</style>
