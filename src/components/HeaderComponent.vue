<template>
   <header class="bg-purple-300 shadow h-20 flex justify-between items-center">
      <router-link class="px-4 hover:text-white" :to="{ name: 'home' }"> Home </router-link>
      <div class="flex items-center gap-1">
        <router-link class="px-4 h-full hover:text-white" :to="{name:'Search'}"> Search ckoktails </router-link>
        <router-link class="px-4 h-full hover:text-white" :to="{name:'ByIndex'}"> By letter </router-link>
        <router-link class="px-4 h-full hover:text-white" :to="{name:'ByIngredient'}"> By ingridiente </router-link>
      </div>
    </header>
</template>