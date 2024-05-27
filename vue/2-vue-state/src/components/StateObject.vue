<script setup lang="ts">
import { Person } from "@/models/Person";
import { ref } from "vue";

const p = ref<Person>(new Person("Sebastian", 44, true));

const change = () => {
  p.value.name = "Hanna";
};
</script>

<template>
  <div class="persons">
    <div class="person">
      <h3>{{ p.name }}</h3>
      <p>{{ p.age }}</p>
      <input type="checkbox" :checked="p.isMarried" />
    </div>
  </div>
  <button @click="change">Change</button>
</template>
