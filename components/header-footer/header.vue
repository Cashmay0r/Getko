<template>
  <div class="w-full h-20 flex flex-col lg:flex-row justify-around items-center flex-grow-0 static">
    <div class="mx-4 text-3xl text-primary-green">
      <NuxtLink to="/" class="mx-2 hover:text-hover-green cursor-pointer">Getko</NuxtLink>
    </div>
    <div class="mx-4 text-lg text-primary-green">
      <div v-if="this.$auth.loggedIn">
        <NuxtLink to="/private/account" class="mx-2 hover:text-hover-green cursor-pointer">Account</NuxtLink>
        <a class="mx-2 hover:text-hover-green cursor-pointer" @click="logout">Logout</a>
      </div>
      <div v-else>
        <button @click="testAPI">Test API</button>
        <NuxtLink to="/" class="mx-2 hover:text-hover-green cursor-pointer">Login</NuxtLink>
        <NuxtLink to="/" class="mx-2 hover:text-hover-green cursor-pointer">Register</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {
      async logout() {
        await this.$auth.logout();
        console.log('Logging out...');

        //console.log(logout);
      },
      async testAPI() {
        if (this.accessToken != null) {
          const config = {
            headers: {Authorization: `Bearer ${this.accessToken}`},
          };
          const response = await this.$axios.get('/api/testroute', config);
        } else {
          alert('Must be logged in to access this feature');
        }
      },
    },
  };
</script>

<style></style>
