<template>
   <header class="font-serif bg-neutral-100 shadow h-16 flex justify-between items-center">
      <router-link class="px-4 hover:line-through" :to="{ name: 'home' }"> Home </router-link>
      <div class="flex items-center gap-1">
        <router-link class=" px-4 h-full hover:line-through" :to="{name:'Search'}"> Search ckoktails </router-link>
        <router-link class="px-4 h-full hover:line-through" :to="{name:'ByIndex'}"> By letter </router-link>
        <router-link class="px-4 h-full hover:line-through" :to="{name:'ByIngredient'}"> By ingridiente </router-link>
      </div>
    </header>
</template>