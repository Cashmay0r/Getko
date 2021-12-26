<template>
  <div class="flex flex-col justify-start items-center w-full h-full md:flex-row md:justify-center md:items-center md:w-full md:h-5/6 md:flex-wrap md:overflow-auto md:gap-10 px-10">
    <div v-for="product in products" :key="product.product">
      <div class="h-96 w-72 max-h-fit max-w-fit">
        <ProductCard :creator="product.product_creator" :image="product.product_image" :price="product.product_price" :product="product.product_name"></ProductCard>
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
        products: [],
      };
    },
    created() {
      this.getProducts();
    },
    methods: {
      async getProducts() {
        await this.$axios
          .get('api/latest_products')
          .then((response) => {
            this.products = response.data;
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>
<style></style>
