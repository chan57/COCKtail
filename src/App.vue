<script setup>
</script>

<template>
  <div class="bg-pink-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link class="px-4 hover:text-violet-600" :to="{ name: 'home' }"> Home </router-link>
      <div class="flex items-center gap-1">
        <router-link class="px-4 h-full hover:text-violet-400" :to="{name:'Search'}"> Search ckoktails </router-link>
        <router-link class="px-4 h-full hover:text-violet-400" :to="{name:'ByIndex'}"> By letter </router-link>
        <router-link class="px-4 h-full hover:text-violet-400" :to="{name:'ByIngredient'}"> By ingridiente </router-link>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>

//45.34