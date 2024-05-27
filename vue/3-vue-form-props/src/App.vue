<script setup lang="ts">
import { ref } from "vue";
import TodoList from "./components/TodoList.vue";

// const userInput = ref("");

// const handleSubmit = () => {
//   console.log("Submitting:", userInput.value);
// };
</script>

<template>
  <!-- <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
    <button>Spara</button>
  </form>

  <p>{{ userInput }}</p> -->

  <TodoList />
</template>

<style scoped></style>
