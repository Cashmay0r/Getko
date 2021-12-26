<template>
  <div class="h-full w-full rounded-lg p-2 shadow-2xl my-5">
    <div class="rounded-lg h-72 relative">
      <div class="absolute w-10 h-10 m-3 rounded-full flex justify-center items-center shadow-xl bg-white cursor-pointer">
        <span class="material-icons text-red-600"> favorite_border </span>
      </div>
      <img :src="image" class="object-cover lg:w-full w-full h-full rounded-lg cursor-pointer" />
    </div>
    <div class="flex flex-row justify-between items-center py-1 mx-5">
      <div class="flex flex-col justify-center items-start">
        <h1 class="my-0.5" v-text="product"></h1>
        <a class="my-0.5 text-xs underline cursor-pointer" v-text="creator"></a>
        <p class="my-0.5 font-bold" v-text="'$' + price"></p>
      </div>
      <div class="flex justify-center items-center border rounded-full w-10 h-10 bg-primary-green cursor-pointer"><span class="material-icons text-white"> add_shopping_cart </span></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      product: {type: String, required: true, default: null},
      creator: {type: String, required: true, default: null},
      price: {type: Number, required: true, default: null},
      image: {type: String, required: false, default: null},
    },
  };
</script>
<style lang=""></style>
