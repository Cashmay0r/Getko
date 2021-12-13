<template>
  <div class="bg-white w-full flex flex-col rounded-xl overflow-hidden shadow-xl">
    <div class="my-2 w-full h-full flex flex-col items-center">
      <h2 class="text-xl">Create an account</h2>
      <form class="my-4" @submit.prevent="validatePasswords">
        <div>
          <div>
            <p class="text-xs mb-1">First Name</p>
            <input placeholder="First Name" class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="account.first_name" />
            <p class="text-xs mb-1">Last Name</p>
            <input placeholder="Last Name" class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="account.last_name" />
          </div>

          <p class="text-xs mb-1">Email</p>
          <input placeholder="Email..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="account.email" type="email" />
          <p class="text-xs mb-1">Password</p>
          <input placeholder="Password..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="passwordVal1" type="password" />
          <p class="text-xs mb-1">Repeat password</p>
          <input placeholder="Password..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required v-model="passwordVal2" type="password" />
        </div>
        <div class="flex flex-row justify-center items-center">
          <button type="submit" class="w-56 px-3 py-1 max-w-xs h-8 rounded-xl transition duration-250 ease-in-out bg-primary-green hover:bg-gecko-green transform hover:scale-105 border-black border-opacity-20 shadow-lg">Create Account</button>
        </div>
      </form>
      <p class="text-sm">
        Already have an account?
        <a class="hover:no-underline underline text-primary-green cursor-pointer" @click="emitLoginForm">Log in</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        account: {
          email: '',
          password: '',
          first_name: '',
          last_name: '',
        },
        passwordVal1: '',
        passwordVal2: '',
      };
    },

    methods: {
      emitLoginForm() {
        this.$emit('loginForm');
      },
      validatePasswords() {
        if (this.passwordVal1.trim() === this.passwordVal2.trim()) {
          this.account.password = this.passwordVal1;
          this.createUser();
        } else {
          // Throw some kind of user error message
          alert('Passwords do not match, try again!');
        }
      },
      async createUser() {
        await this.$store.dispatch('authentication/register', this.account);
        this.account = {
          email: '',
          password: '',
          first_name: '',
          last_name: '',
        };
      },
    },
  };
</script>

<style></style>
