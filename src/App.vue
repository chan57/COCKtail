<script setup>
</script>

<template>
  <div class="bg-pink-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link :to="{ name: 'home' }"> home </router-link>
      <div class="flex items-center gap-1">
        <router-link class="px-2 h-full hover:bg-violet-400" to="/"> search ckoktails </router-link>
        <router-link class="px-2 h-full hover:bg-violet-400" to="/"> ckoktails by letter </router-link>
        <router-link class="px-2 h-full hover:bg-violet-400" to="/"> ckoktails by ingridiente </router-link>
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