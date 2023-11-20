<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'CocktailsDeatail', params: { id: drink.idDrink } }">
      <img
        :src="drink.strDrinkThumb"
        :alt="drink.strAlcoholic"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ drink.strAlcoholic }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(drink.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <!-- <YouTubeButton :href="drink.strYoutube" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// import YouTubeButton from './YouTubeButton.vue';

const { drink } = defineProps({
  drink: {
    required: true,
    type: Object
  }
})

console.log(drink)

</script>