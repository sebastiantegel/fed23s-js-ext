<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "./../models/Todo";
import TodoPresentation from "./TodoPresentation.vue";
import AddTodo from "./AddTodo.vue";

const todos = ref<Todo[]>([new Todo("Test")]);

const addTodo = (text: string) => {
  todos.value.push(new Todo(text));
};

const toggleTodo = (i: number) => {
  todos.value[i].done = !todos.value[i].done;
};

const removeTodo = (i: number) => {
  todos.value.splice(i, 1);
};
</script>

<template>
  <AddTodo @add="addTodo" />

  <ul>
    <TodoPresentation
      v-for="(todo, i) in todos"
      :key="todo.id"
      :todo="todo"
      :i="i"
      @toggle="toggleTodo"
      @remove="removeTodo"
    ></TodoPresentation>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
