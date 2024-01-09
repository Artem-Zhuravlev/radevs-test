<template>
  <div class="timeline">
    <timeline-nav
      @prev="prevWeek"
      @next="nextWeek"
      @today="presentWeek"
    />
    <timeline-header
      :items="week"
    />
    <div class="timeline__body">
      <timeline-row
        v-for="(item, index) in bookingFormatData"
        :key="index"
        :row-data="item"
        @show-info="handleShowInfo"
      />
    </div>
    <timeline-modal
      v-model="showUserModal"
      :item="userInfo"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TimelineHeader from './common/TimelineHeader.vue';
import TimelineRow from './common/TimelineRow.vue';
import TimelineNav from './common/TimelineNav.vue';
import TimelineModal from './common/TimelineModal.vue';

export default {
  name: 'TimelineCalendar',
  components: {
    TimelineHeader,
    TimelineRow,
    TimelineNav,
    TimelineModal,
  },
  async created() {
    this.setCurrentWeek(this.today);
    await this.fetch();
  },
  data() {
    return {
      userInfo: null,
      showUserModal: false,
    };
  },
  computed: {
    ...mapState('fetchCalendar', [
      'bookingList',
    ]),
    ...mapState('calendarNav', [
      'currentWeek',
      'week',
      'today',
    ]),
    bookingRangeList() {
      if (!this.bookingList || this.bookingList.length === 0) {
        return [];
      }

      return this.bookingList.filter((item) => this.week.includes(item?.start)
        || this.week.includes(item?.end));
    },
    hotelsList() {
      if (!this.bookingList || this.bookingList.length === 0) {
        return [];
      }

      return [...new Set(this.bookingList.map((item) => item?.roomDetails?.name))];
    },
    bookingFormatData() {
      return this.hotelsList.map((item) => ({
        title: item,
        data: this.bookingRangeList.filter((el) => el?.roomDetails?.name === item),
      })).sort((a, b) => a.title.localeCompare(b.title));
    },
  },
  methods: {
    ...mapActions('calendarNav', [
      'setCurrentWeek',
      'prevWeek',
      'nextWeek',
      'presentWeek',
    ]),
    ...mapActions('fetchCalendar', [
      'fetch',
    ]),
    handleShowInfo(id) {
      this.userInfo = this.bookingRangeList.find((item) => item.id === id);
      this.showUserModal = true;
    },
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
