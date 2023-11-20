<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Cocktails for {{ ingredient.strIngredient }}</h1>
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
const ingredient = computed(() => store.state.ingredient)
const drinks = computed(() => store.state.ckoktailByIngredient)

onMounted(() => {
  store.dispatch('searchCkoktailsByIngredient', route.params.ingredient)
})

</script>