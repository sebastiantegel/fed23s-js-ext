<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";
import { Person } from "./../models/Person.ts";

const person = ref<Person>(new Person("Sebastian", 44, true, 0));

const handleJump = (name: string) => {
  console.log(name, "hoppade");
  person.value.height += 0.5;
};
</script>

<template>
  <h3>Här visas innehållet i parent:</h3>
  <Child :human="person" @jump="handleJump" />
</template>

<style scoped></style>
