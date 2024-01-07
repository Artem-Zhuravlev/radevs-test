<template>
  <div id="app">
    <button-base
      @click="visible = true"
    >
      Open {{ visible }}
    </button-base>

    <button-base
      @click="visible = true"
      variant="secondary"
    >
      Open {{ visible }}
    </button-base>
    <modal-window
      v-model="visible"
      title="Some title"
    >
      Some content
    </modal-window>
    <timeline-calendar />
  </div>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';
import ModalWindow from '@/components/modals/ModalWindow.vue';
import TimelineCalendar from '@/entities/TimelineCalendar/TimelineCalendar.vue';

export default {
  name: 'App',
  components: {
    ModalWindow,
    ButtonBase,
    TimelineCalendar,
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
