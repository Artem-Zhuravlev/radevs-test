<template>
  <div class="timeline">
    <timeline-nav
      @prev="prevWeek"
      @next="nextWeek"
      @today="presentWeek"
    />
    {{ today }}
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
import { mapState, mapActions } from 'vuex';
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
  created() {
    this.setCurrentWeek(this.today);
  },
  computed: {
    ...mapState('calendarNav', [
      'currentWeek',
      'week',
      'today',
    ]),
  },
  methods: {
    ...mapActions('calendarNav', [
      'setCurrentWeek',
      'prevWeek',
      'nextWeek',
      'presentWeek',
    ]),
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
