<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { IWebshopState } from "@/models/IWebshopState.ts";
import { getProducts } from "@/services/productService";
import Products from "./Products.vue";
import Checkout from "./Checkout.vue";

// const products = ref<IProduct[]>([]);

const state = ref<IWebshopState>({
  products: [],
  cart: [],
  showCheckout: false,
});

onMounted(async () => {
  state.value.products = await getProducts();
});

const handleBuy = (id: number) => {
  const index = state.value.cart.findIndex(
    (cartItem) => cartItem.product.id === id
  );

  if (index >= 0) {
    state.value.cart[index].amount++;
  } else {
    const productToAdd = state.value.products.find(
      (product) => product.id === id
    );
    if (productToAdd)
      state.value.cart.push({ product: productToAdd, amount: 1 });
  }
};

const handleChangeView = () => {
  state.value.showCheckout = !state.value.showCheckout;
};
</script>

<template>
  <button @click="handleChangeView">Växla vy</button>
  <Checkout v-if="state.showCheckout" :cart="state.cart" />
  <Products
    v-else
    :products="state.products"
    :cart="state.cart"
    @handle-buy="handleBuy"
  />
</template>

<style scoped></style>
