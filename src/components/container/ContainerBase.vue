<template
  functional
>
  <div
    class="container"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContainerBase',
};
</script>

<style
  lang="scss"
  scoped
>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-medium);
}
</style>
