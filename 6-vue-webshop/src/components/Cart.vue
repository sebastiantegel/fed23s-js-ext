<script setup lang="ts">
import type { ICartItem } from "@/models/ICartItem";

defineProps<{ cart: ICartItem[] }>();
</script>

<template>
  <span>{{ cart.length }}</span>
</template>

<style scoped></style>
