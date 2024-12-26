<template>
  <nav class="container mx-auto py-4 px-4 w-full">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <img src="/formcarry_logo.svg" alt="formcarry." width="159" height="32" style="cursor: pointer;">
      </div>

      <!-- Menu Burger pour les petits écrans -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <div
        :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
        class="absolute md:static top-16 left-0 bg-white w-full md:w-auto md:flex items-center md:space-x-9 space-y-4 md:space-y-0 md:bg-transparent shadow md:shadow-none px-4 py-4 md:py-0 transition-all duration-300"
      >
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 block md:inline">Examples</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 block md:inline">Form Generator</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 block md:inline">Integrations</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 block md:inline">Docs</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 block md:inline">Pricing</a>

        <button class="md:ml-20 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 block md:inline">Login</button>
        <button class="bg-gray-100 text-center py-1 px-4 rounded-full block md:inline">
          <span class="font-semibold block w-full">Sign up</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Optionnel : pour ombre uniquement sur petits écrans */
@media (min-width: 768px) {
  .shadow {
    box-shadow: none !important;
  }
}
</style>
