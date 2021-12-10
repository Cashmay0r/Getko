<template>
  <div class="flex flex-col h-screen">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "~/components/header-footer/header.vue";
export default {components: {Header}};
</script>

<style lang="css">
html,
body {
  width: 100vw;
  height: 100vh;
  font-family: "roboto";
}
</style>
