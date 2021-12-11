<template>
  <div class="flex flex-col justify-start items-center w-full h-full md:flex-row">
    <div class="h-96 w-72 max-h-fit max-w-fit">
      <div v-for="product in products" :key="product.product">
        <ProductCard :creator="product.creator" :image="product.image" :price="product.price" :product="product.product"></ProductCard>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductCard from '~/components/store/product-card.vue';
  export default {
    components: {ProductCard},
    data() {
      return {
        products: [
          {
            product: 'Red Nike',
            creator: 'Almighty Nike',
            price: 50,
            image: '/img/red_nike.jpg',
          },
          {
            product: 'Green Shoe',
            creator: 'Green Man',
            price: 75,
            image: '/img/green_shoe.jpg',
          },
        ],
      };
    },
  };
</script>
<style></style>
