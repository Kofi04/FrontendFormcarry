<template>
  <div class="min-h-screen bg-white">
    <TheNavigation />
    <TheHero />
    <TheBrands />
    <TheFeatures />
    <TheGrid />
    <br>
    <br>
     <LastCard />
     <Footer />
   
  </div>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue'
import TheHero from './components/TheHero.vue'
import TheBrands from './components/TheBrands.vue'
import TheFeatures from './components/TheFeatures.vue'
import TheGrid from './components/TheGrid.vue'
import Footer from './components/Footer.vue'
import LastCard from './components/LastCard.vue'
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Custom animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

