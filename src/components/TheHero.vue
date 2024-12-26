<template>
  <section class="container mx-auto px-6 py-16 text-center">
    <!-- Header -->
    <p class="font-bold text-blue-600">FORM API</p>
    <h1
      class="text-4xl md:text-6xl font-bold mb-6 font-faktum leading-tight"
      style="color: rgb(14, 11, 61); letter-spacing: -0.04em;"
    >
      Receive emails   
      <span class="inline-flex items-center">
        <img src="/lightning_icon.svg" class="w-6 h-6 md:w-8 md:h-8" />
      </span> instantly
      <br />
      from your website 
      <span class="inline-flex items-center">
        <img src="/formcarry_form_icon.svg" class="w-6 h-6 md:w-8 md:h-8" />
      </span> form
    </h1>

    <!-- Description -->
    <div class="text-gray-600 text-base md:text-xl mb-12 space-y-4 max-w-2xl mx-auto">
      <p>Never worry about the backend of your form again. Create your HTML form,</p>
      <p>connect to our API, get email notifications, block spam, and use</p>
      <p>over 3000 integrations.</p>
    </div>

    <!-- Email Form -->
    <div class="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
      <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div class="flex flex-col md:flex-row md:space-x-4">
          <input 
            type="email" 
            placeholder="Your email address"
            class="flex-1 p-3 mb-4 md:mb-0 border border-gray-200 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>

    <!-- Card Section -->
    <div class="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      <!-- Card Header -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-2">
          <span class="w-3 h-3 bg-red-500 rounded-full"></span>
          <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div class="flex justify-center w-full">
          <span class="text-sm text-blue-500">formcarry.com</span>
        </div>
      </div>

      <!-- Card Content -->
      <div>
        <img src="/formcarry_logo.svg" class="mx-auto my-4 w-36" alt="formcarry">
        <h1 class="text-lg font-semibold text-gray-800 flex items-center space-x-2">
          <span>🧸</span>
          <span>My Sweet Form</span>
        </h1>
        <p class="text-gray-400 text-sm mt-1">128 Submissions</p>
        <p class="text-gray-500 text-sm mt-4">Your form API endpoint</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
</script>

<style scoped>
.font-faktum {
  font-family: 'Faktum', sans-serif;
}
</style>
