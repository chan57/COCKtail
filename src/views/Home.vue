<template>
  <div class="flex flex-col p-2">
    <div class="flex justify-center">
      <input
      class="item-center rounded border-2 border-black-300 my-4 py-2 w-72 "
      type="text"
      placeholder="Search for cocktail"
    />
    </div>

    <div class="flex gap-1 justify-center">
      <router-link :to="{name: 'Bylatter', params: {letter}}" v-for="letter in letters" :key="letter">{{letter}}</router-link>
    </div>

    <h2>{{ ingredient }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ingredient = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  ingredient.value = response.data
})

</script>
