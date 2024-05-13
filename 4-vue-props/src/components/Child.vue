<script setup lang="ts">
import type { Person } from "@/models/Person";

interface ChildProps {
  human: Person;
}

const props = defineProps<ChildProps>();

// Ändra aldrig props
// props.human.age = 45;

const emit = defineEmits<{
  (e: "jump", name: string): void;
}>();

const handleClick = () => {
  emit("jump", props.human.name);
};
</script>

<template>
  <h5>Här visas innehållet i child: {{ human.height }}</h5>

  <button @click="handleClick">{{ human.name }}</button>
</template>

<style scoped></style>
