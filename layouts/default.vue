<template>
  <div class="flex flex-col h-screen">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

    <div class="w-full h-20 flex flex-row justify-around items-center flex-grow-0 static">
      <div class="mx-4 text-3xl text-primary-green">
        <NuxtLink to="/"><a class="mx-2 hover:text-hover-green cursor-pointer">Getko</a></NuxtLink>
      </div>
      <div class="mx-4 text-lg text-primary-green">
        <div v-if="false">
          <NuxtLink to="/account"><a class="mx-2 hover:text-hover-green cursor-pointer"></a></NuxtLink>
          <button>Logout</button>
        </div>
        <div v-else>
          <button @click="testAPI">Test API</button>
          <NuxtLink to="/"><a class="mx-2 hover:text-hover-green cursor-pointer">Login</a></NuxtLink>
          <NuxtLink to=""><a class="mx-2 hover:text-hover-green cursor-pointer">Register</a></NuxtLink>
          <a class="mx-2 hover:text-hover-green cursor-pointer" @click="logout">Logout</a>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    firebaseAuth() {
      return this.$fire.auth
    },
  },
  methods: {
    logout() {
      const user = this.firebaseAuth.currentUser
      if (user) {
        this.$store.dispatch('auth/logout')
      } else {
        console.log('No user is currenltly signed in')
      }
    },
    async testAPI() {
      const response = await this.$axios.get('/api/test')
      console.log(response.data)
    },
  },
}
</script>

<style lang="css">
html,
body {
  width: 100vw;
  height: 100vh;
  font-family: 'roboto';
}
</style>
