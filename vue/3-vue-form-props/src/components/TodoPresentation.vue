<script setup lang="ts">
import type { Todo } from "@/models/Todo";

interface TodoPresentationProps {
  todo: Todo;
  i: number;
}

const props = defineProps<TodoPresentationProps>();

const emit = defineEmits<{
  (e: "toggle", i: number): void;
  (e: "remove", i: number): void;
}>();

const handleToggle = (i: number) => {
  emit("toggle", i);
  props.todo;
};

const handleRemove = (i: number) => {
  emit("remove", i);
};
</script>

<template>
  <li :class="todo.done ? 'done' : ''">
    <span>{{ todo.text }}</span>
    <button @click="() => handleToggle(i)">
      {{ !todo.done ? "Markera som klar" : "Markera som oklar" }}
    </button>
    <button @click="() => handleRemove(i)">Ta bort</button>
  </li>
</template>

<style scoped>
li.done {
  text-decoration: line-through;
}
</style>
