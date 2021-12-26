<template>
  <div class="flex flex-col justify-start items-center w-full h-full">
    <div class="flex flex-col justify-center items-center">
      <h1>Account</h1>
      <p>Name: {{ name }}</p>
      <p>E-mail: {{ email }}</p>
    </div>
    <div>
      <button class="p-2 bg-primary-green rounded-xl" @click="addProduct">New Product</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Test Name',
        email: 'test@gmail.com',
      };
    },
    methods: {
      async getAccountData() {
        // Axios request to fetch user data.
      },
    },
  };
</script>

<style></style>
