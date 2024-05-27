<script setup lang="ts">
interface ButtonProps {
  buttonText: string;
  title: string;
}

defineProps<ButtonProps>();

defineEmits<{
  (e: "onClick"): void;
}>();
</script>

<template>
  <button :title="title" @click="$emit('onClick')">{{ buttonText }}</button>
</template>

<style scoped>
button {
  border: none;
  border-radius: 5px;
  background-color: blueviolet;
  padding: 1rem;
}
</style>
