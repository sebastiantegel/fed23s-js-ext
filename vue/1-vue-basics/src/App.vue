<script setup lang="ts">
import { Todo } from "@/models/Todo";

const buttonText = "Spara";
let clickable = true;
const myClass = "awesome";
let showP = true;

const numbers: number[] = [1, 1, 2, 3, 5, 8];

const todos: Todo[] = [new Todo("Test"), new Todo("Test 2")];

const handleClick = () => {
  // Kommer inte fungera då dessa variabler inte är reaktiva (är ett state)
  clickable = !clickable;
  showP = !showP;
};
</script>

<template>
  <div class="wrapper">
    <button :disabled="!clickable" :class="myClass" @click="handleClick">
      {{ buttonText }}
    </button>
  </div>

  <div>
    <p v-if="showP">Lorem</p>
    <span v-else>ipsum</span>
  </div>

  <div>
    <ul>
      <li v-for="n in numbers">{{ n }}</li>
    </ul>
  </div>

  <div>
    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
