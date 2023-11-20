<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 ">{{ drink.strDrink }}</h1>
    <img :src="drink.strDrinkThumb" :alt="drink.strrink" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ drink.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ drink.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ drink.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ drink.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="el">
            <li v-if="drink[`strIngredient${ind + 1}`]">
            {{ ind + 1 }}. {{ drink[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="el">
            <li v-if="drink[`strMeasure${ind + 1}`]">
            {{ ind + 1 }}. {{ drink[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <!-- <YouTubeButton :href="meal.strYoutube" /> -->
        <a
          :href="drink.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>


  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
// import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const drink = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      drink.value = data.drinks[0] || {}
    })
})

</script>