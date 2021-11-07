<template>
  <div class="flex flex-col h-screen">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

    <div class="w-full h-20 flex flex-row justify-around items-center flex-grow-0 static">
      <div class="mx-4 text-3xl text-primary-green">
        <NuxtLink to="/login"><a class="mx-2 hover:text-hover-green cursor-pointer">Getko</a></NuxtLink>
      </div>
      <div class="mx-4 text-lg text-primary-green">
        <div v-if="$auth.loggedIn">
          <NuxtLink to="/account"
            ><a class="mx-2 hover:text-hover-green cursor-pointer">{{ $auth.user.email }}</a></NuxtLink
          >
          <button>Logout</button>
        </div>
        <div v-else>
          <NuxtLink to="/"><a class="mx-2 hover:text-hover-green cursor-pointer">Login</a></NuxtLink>
          <NuxtLink to=""><a class="mx-2 hover:text-hover-green cursor-pointer">Register</a></NuxtLink>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
html,
body {
  width: 100vw;
  height: 100vh;
  font-family: 'roboto';
}
</style>
