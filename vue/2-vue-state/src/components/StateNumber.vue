<script setup lang="ts">
import { ref } from "vue";

let x = ref(10);

const change = () => {
  x.value = 1;
};
</script>

<template>
  <h2>{{ x }}</h2>
  <button @click="change">Change</button>
</template>

<style scoped></style>
