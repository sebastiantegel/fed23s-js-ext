<script setup lang="ts">
import type { IProduct } from "@/models/IProduct";

interface ProductProps {
  product: IProduct;
  onCheckout: boolean;
}

defineProps<ProductProps>();

defineEmits<{
  (e: "buy", id: number): void;
}>();
</script>

<template>
  <article class="product">
    <h3>{{ product.name }}</h3>
    <div class="image-container">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <p>{{ product.price }}</p>
    <button v-if="!onCheckout" @click="$emit('buy', product.id)">Köp</button>
  </article>
</template>

<style scoped lang="scss">
.product {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-container {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
