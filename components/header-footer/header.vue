<template>
  <div class="w-full h-20 flex flex-row lg:flex-row justify-evenly items-center static">
    <div class="mx-4 text-3xl text-primary-green">
      <nuxt-link to="/" class="mx-2 hover:text-hover-green cursor-pointer">Getko</nuxt-link>
    </div>
    <div class="mx-4 text-lg text-primary-green flex flex-row justify-center items-center">
      <div>
        <nuxt-link to="/store/home" class="mx-2 hover:text-hover-green cursor-pointer">Home</nuxt-link>
      </div>
      <div class="flex flex-row justify-center items-center" v-if="loggedIn">
        <nuxt-link to="/private/account" class="mx-2 hover:text-hover-green cursor-pointer">Account</nuxt-link>
        <a class="mx-2 hover:text-hover-green cursor-pointer" @click="logout">Logout</a>
      </div>
      <div class="flex flex-row justify-center items-center" v-else>
        <button @click="testAPI">Test API</button>
        <nuxt-link to="/" class="mx-2 hover:text-hover-green cursor-pointer">Login</nuxt-link>
        <nuxt-link to="/" class="mx-2 hover:text-hover-green cursor-pointer">Register</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      loggedIn() {
        return this.$store.state.authentication.loggedIn;
      },
    },
    methods: {
      async logout() {
        const logout = await this.$store.dispatch('authentication/logout');
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
