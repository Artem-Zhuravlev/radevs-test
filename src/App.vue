<template>
  <div id="app">
    <icon-chevron />
    <button-base
      is-active
    >
      Today
    </button-base>
    <button-base>
      <icon-chevron />
    </button-base>
    <button-base disabled>
      <icon-chevron />
    </button-base>
  </div>
</template>

<script>
import IconChevron from '@/components/icons/IconChevron.vue';
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'App',
  components: {
    IconChevron,
    ButtonBase,
  },
};
</script>

<style lang="scss">

</style>
