<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Search kocktails by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-purple-500 focus:border-purple-500 w-full"
      placeholder="Search for ckoktails"
      @change="searchDrinks"
    />
  </div>

  <Cocktails :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Cocktails from '../components/Cocktails.vue'

const route = useRoute();
const keyword = ref("");
const drinks = computed(() => store.state.searchedCkoktail);

function searchDrinks() {
  if (keyword.value) {
    store.dispatch("searchDrinks", keyword.value);
  } else {
    store.commit("setSearchedCkoktails", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchDrinks()
  }
})
</script>