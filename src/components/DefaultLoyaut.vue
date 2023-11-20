<template>
  <div class="bg-pink-100 h-full">
    <HederComponent />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import HederComponent from "./HeaderComponent.vue";
</script>
