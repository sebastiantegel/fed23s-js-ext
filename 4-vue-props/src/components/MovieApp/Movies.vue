<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/IMovie";
import Movie from "./Movie.vue";

const movies = ref<IMovie[]>([]);

onMounted(async () => {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");

  if (!response.ok) {
  }

  const data: IOmdbResponse = await response.json();

  // data = { Search: [...], totalResult: string, Response: string }
  movies.value = data.Search;
});

const handleBuy = (id: string) => {
  const foundMovie = movies.value.find((m) => m.imdbID === id);

  console.log("Du klickade på:", foundMovie?.Title);
};
</script>

<template>
  <div class="movies">
    <Movie
      v-for="movie in movies"
      :movie="movie"
      :key="movie.imdbID"
      @buy="handleBuy"
    />
  </div>
</template>

<style scoped>
.movies {
  display: flex;
  flex-direction: column;
}
</style>
