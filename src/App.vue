<template>
  <div id="app">
    <button-base
      @click="visible = true"
    >
      Open {{ visible }}
    </button-base>
    <modal-window
      v-model="visible"
      title="Some title"
    >
      Some content
    </modal-window>
  </div>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';
import ModalWindow from '@/components/modals/ModalWindow.vue';

export default {
  name: 'App',
  components: {
    ModalWindow,
    ButtonBase,
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
