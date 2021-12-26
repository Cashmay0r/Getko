<template>
  <div class="h-20 flex flex-row justify-around items-center">
    <div class="ml-5"><span class="material-icons text-3xl cursor-pointer md:hidden" @click="drawer = !drawer"> menu </span></div>
    <nuxt-link to="/" class="text-3xl text-primary-green cursor-pointer">Getko</nuxt-link>
    <div class="grow flex-row w-4/6 justify-evenly items-center text-primary-green text-lg hidden md:flex">
      <div @click="routePage('/store/home')" class="cursor-pointer">Featured</div>
      <div>Category</div>
      <div>Wishlist</div>
      <div @click="routePage('/private/account')" class="cursor-pointer" v-if="loggedIn">Account</div>
      <div v-if="loggedIn" @click="logout" class="cursor-pointer">Logout</div>
      <div @click="testAPI">Test API</div>
    </div>

    <div class="flex flex-row justify-center items-center gap-4 mr-5">
      <div><span class="material-icons text-2xl cursor-pointer"> shopping_basket </span></div>
      <div><span class="material-icons text-2xl cursor-pointer"> search </span></div>
    </div>
    <div class="bg-white fixed top-0 left-0 h-full z-50 p-3 w-full md:w-1/6 transform transition duration-150 ease-in-out shadow-2xl" :class="!drawer && '-translate-x-full'">
      <div class="flex flex-col justify-center items-center text-xl h-4/6">
        <div class="text-right w-full" @click="drawer = !drawer"><span class="material-icons text-4xl font-bold text-primary-green cursor-pointer"> close </span></div>
        <div class="text-primary-green flex flex-col justify-evenly items-center h-full text-2xl">
          <div @click="routePage('/store/home')" class="cursor-pointer">Featured</div>
          <div>Category</div>
          <div>Wishlist</div>
          <div @click="routePage('/private/account')" class="cursor-pointer" v-if="loggedIn">Account</div>
          <div v-if="loggedIn" @click="logout" class="cursor-pointer">Logout</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {v4 as uuidv4} from 'uuid';
  export default {
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      routePage(route) {
        this.drawer = false;
        this.$router.push(route);
      },
      async logout() {
        const logout = await this.$store.dispatch('authentication/logout');
        console.log('Logging out...');

        //console.log(logout);
      },
      async testAPI() {
        const data = {
          product_id: uuidv4(),
          product_name: 'Hisense',
          product_price: 50,
          product_creator: 'China',
          product_image: 'https://hisense.com.au/wp-content/uploads/2021/05/HIS9704_Hisense_55and65U8G_Product_Image_F-1.jpg',
        };
        const test = await this.$axios.post('/api/new_product', data);
        console.log(test);
      },
    },

    computed: {
      loggedIn() {
        return this.$store.state.authentication.loggedIn;
      },
    },
  };
</script>

<style></style>
