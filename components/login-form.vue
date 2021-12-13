<template>
  <div class="bg-white w-full flex flex-col rounded-xl overflow-hidden shadow-xl">
    <div class="my-2 w-full h-full flex flex-col items-center">
      <h2 class="text-xl">Login to your Account</h2>
      <form class="my-4" @submit.prevent="submitLogin">
        <div>
          <p class="text-xs mb-1">Email</p>
          <input placeholder="Email..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="account.email" type="email" />
          <p class="text-xs mb-1">Password</p>
          <input placeholder="Password..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="account.password" type="password" />
        </div>
        <div class="flex flex-row justify-evenly w-full h-full items-center mb-4">
          <div class="text-sm"><input type="checkbox" class="mr-2" />Remember me</div>
          <a class="hover:no-underline text-sm underline cursor-pointer text-primary-green">Forgot password?</a>
        </div>
        <div class="flex flex-row justify-center items-center">
          <button type="submit" class="w-56 px-3 py-1 max-w-xs h-8 rounded-xl transition duration-250 ease-in-out bg-primary-green hover:bg-gecko-green transform hover:scale-105 border-black border-opacity-20 shadow-lg">Login</button>
        </div>
      </form>
      <p class="text-sm">
        Not registered yet?
        <a class="hover:no-underline underline text-primary-green cursor-pointer" @click="emitRegistration">Create an Account</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        account: {
          email: 'aidanenseleit98@gmail.com',
          password: 'Missydead12!',
        },
      };
    },
    computed: {},
    methods: {
      emitRegistration() {
        this.$emit('registerForm');
      },
      async submitLogin() {
        // TODO: validate/sanitize the inputs
        const login = await this.$store.dispatch('authentication/login', this.account);
      },
    },
  };
</script>

<style></style>
