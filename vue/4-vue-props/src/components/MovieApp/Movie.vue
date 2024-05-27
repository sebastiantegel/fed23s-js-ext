<script setup lang="ts">
import { IMovie } from "../../models/IMovie";
import { defineEmits } from "vue";

interface MovieProps {
  movie: IMovie;
}

defineProps<MovieProps>();

defineEmits<{
  (e: "buy", movieId: string): void;
}>();
</script>

<template>
  <div @click="$emit('buy', movie.imdbID)">{{ movie.Title }}</div>
</template>

<style scoped></style>
