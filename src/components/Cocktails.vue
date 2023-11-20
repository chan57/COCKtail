<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <CockTailItem v-for="drink of drinks" :key="drink.idDrink" :drink="drink" />
  </div>
  <div v-if="!drinks.length" class="flex justify-center text-gray-600 p-8">
    There are no drinks
  </div>
</template>

<script setup>
import CockTailItem from './CockTailItem.vue';

const { drinks } = defineProps({
  drinks: {
    required: true,
    type: Array,
  }
})

</script>