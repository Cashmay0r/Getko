<template>
  <div class="flex flex-col max-w-full max-h-full w-screen h-screen">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
  import Header from '~/components/header-footer/header.vue';
  export default {components: {Header}};
</script>

<style lang="css">
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'roboto';
  }
</style>
