<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");
const error = ref("");

const emit = defineEmits<{
  (e: "add", text: string): void;
}>();

const handleSubmit = () => {
  if (userInput.value !== "") {
    emit("add", userInput.value);
    userInput.value = "";
    error.value = "";
  } else {
    error.value = "Du måste fylla i någonting i textrutan";
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
    <button>Spara</button>
  </form>
  <p v-if="error !== ''">{{ error }}</p>
</template>

<style scoped></style>
