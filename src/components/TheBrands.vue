<template>
  <section class="container mx-auto px-4 sm:px-6 py-16 border-t">
    <!-- Title -->
    <div class="text-center mb-12">
      <h2
        class="font-faktum font-bold text-gray-500 text-sm sm:text-base tracking-wide"
      >
        TRUSTED BY TOP BRANDS WORLDWIDE
      </h2>
    </div>

    <!-- Brand Logos -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center"
    >
      <img
        v-for="(brand, index) in brands"
        :key="index"
        :src="brand"
        :alt="`Brand logo ${index + 1}`"
        class="w-24 h-auto mx-auto sm:w-32"
      />
    </div>
  </section>
</template>

<script setup>
const brands = [
  "src/assets/media/nba-logo.9219f4e8.svg",
  "src/assets/media/continental-logo.910bf7a2.svg",
  "src/assets/media/vixen-logo.f7a6c087.svg",
  "src/assets/media/yeezy-logo.57b88750.svg",
  "src/assets/media/cannes-logo.673ba9cc.svg",
];
</script>

<style scoped>
.font-faktum {
  font-family: 'Faktum', sans-serif;
}
</style>
