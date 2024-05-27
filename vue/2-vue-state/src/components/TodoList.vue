<script setup lang="ts">
import { Todo } from "@/models/Todo";
import { ref } from "vue";

const todos = ref<Todo[]>([new Todo("Lär oss vue")]);

const toggleTodo = (i: number) => {
  todos.value[i].done = !todos.value[i].done;
};

const removeTodo = (i: number) => {
  todos.value.splice(i, 1);
};

const add = () => {
  todos.value.push(new Todo("Lär oss mer..."));
};
</script>

<template>
  <button @click="add">Lägg till</button>
  <ul>
    <li
      v-for="(todo, i) in todos"
      :key="todo.id"
      :class="todo.done ? 'done' : ''"
    >
      <span>{{ todo.text }}</span>
      <button @click="() => toggleTodo(i)">
        {{ todo.done ? "Markera som oklar" : "Markera som klar" }}
      </button>
      <button @click="() => removeTodo(i)">Ta bort</button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li.done {
  text-decoration: line-through;
}
</style>
