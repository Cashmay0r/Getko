<template>
  <div class="flex flex-col max-w-full max-h-full w-screen h-screen">
    <Navbar></Navbar>
    <div class="w-full h-full flex justify-center items-center">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  import Header from '~/components/header-footer/header.vue';
  import Navbar from '~/components/nav/navbar.vue';
  export default {components: {Header, Navbar}};
</script>

<style lang="css">
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'roboto';
  }
</style>
