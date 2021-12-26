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
        newProduct: {
          product_name: 'Scarpa Boots',
          product_description: 'Very warm and comfortable hiking boots.',
          product_price: 250,
          product_creator: 'Melanie M',
          product_image: 'https://cdn.runrepeat.com/i/scarpa/26343/scarpa-womens-women-s-terra-gtx-hiking-boot-brown-36-eu-5-5-m-us-women-s-brown-1a0a-main.jpg',
        },
      };
    },
    computed: {},
    methods: {
      async getAccountData() {
        // Axios request to fetch user data.
      },
      async addProduct() {
        const addProduct = await this.$axios.post('/api/newProduct', this.newProduct);
        console.log(addProduct);
      },
    },
  };
</script>

<style></style>
