<script setup lang="ts">
import { Person } from "@/models/Person";
import { ref } from "vue";

const persons = ref<Person[]>([
  new Person("Sebastian", 44, true),
  new Person("Hanna", 44, true),
  new Person("Alvar", 13, false),
]);

const change = () => {
  persons.value.push(new Person("Astrid", 13, false));
};
</script>

<template>
  <div class="persons">
    <div class="person" v-for="(p, i) in persons" :key="i">
      <h3>{{ p.name }}</h3>
      <p>{{ p.age }}</p>
      <input type="checkbox" :checked="p.isMarried" />
    </div>
  </div>
  <button @click="change">Change</button>
</template>
