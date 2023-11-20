<template>
  <div class="p-8 pb-0 font-serif">
    <h1 class="text-4xl font-bold mb-4 text-stone-900">Random kocktails</h1>
  </div>
  <Cocktails :drinks="drinks" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Cocktails from "../components/Cocktails.vue";
import axiosClient from "../axiosClient.js";

const drinks = ref([]);

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => drinks.value.push(data.drinks[0]));
  }
});
</script>