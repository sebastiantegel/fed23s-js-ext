<script setup lang="ts">
import type { IProduct } from "@/models/IProduct";
import Product from "./Product.vue";
import Cart from "./Cart.vue";
import type { ICartItem } from "@/models/ICartItem";

interface ProductsProp {
  products: IProduct[];
  cart: ICartItem[];
}

defineProps<ProductsProp>();

defineEmits<{
  (e: "handleBuy", id: number): void;
}>();
</script>

<template>
  <section class="cart">
    <Cart :cart="cart" />
  </section>
  <section class="products">
    <Product
      v-for="product in products"
      :product="product"
      :key="product.id"
      :on-checkout="false"
      @buy="(id: number) => { $emit('handleBuy', id) }"
    />
  </section>
</template>

<style scoped>
.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
