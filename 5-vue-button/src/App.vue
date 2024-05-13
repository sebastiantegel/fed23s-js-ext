<script setup lang="ts">
import Button from "./components/Button.vue";

const handleSave = () => {
  console.log("Spara någonting");
};

const handleRemove = () => {
  console.log("Ta bort någonting");
};
</script>

<template>
  <div>
    <Button button-text="Spara" title="Spara" @on-click="handleSave" />
  </div>
  <div>
    <Button button-text="Ta bort" title="Ta bort" @on-click="handleRemove" />
  </div>
</template>

<style scoped></style>
