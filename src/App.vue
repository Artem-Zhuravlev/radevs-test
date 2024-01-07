<template>
  <div id="app">
    <container-base>
      <timeline-calendar />
    </container-base>
  </div>
</template>

<script>
import TimelineCalendar from '@/entities/TimelineCalendar/TimelineCalendar.vue';
import ContainerBase from './components/container/ContainerBase.vue';

export default {
  name: 'App',
  components: {
    TimelineCalendar,
    ContainerBase,
  },

  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss">

</style>
