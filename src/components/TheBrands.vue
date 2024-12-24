<template>
  
    <section class="container mx-auto px-6 py-16 border-t">
     <p class="flex justify-center " > 
      <H2 class="font-faktum font-bold " style="color:  rgb(108, 111, 147); font-size:16px; margin-bottom: 32px;" > TRUSTED BY TOP BRANDS WORLDWIDE </H2></p>

      <div class="flex justify-center items-center space-x-12 ">
        <img v-for="(brand, index) in brands" :key="index" :src="brand" :alt="`Brand logo ${index + 1}`" />
      </div>
    </section>
  </template>
  
  <script setup>
  const brands = [
    'src/assets/media/nba-logo.9219f4e8.svg',
    'src/assets/media/continental-logo.910bf7a2.svg',  
    'src/assets/media/vixen-logo.f7a6c087.svg',
    'src/assets/media/yeezy-logo.57b88750.svg',
    'src/assets/media/cannes-logo.673ba9cc.svg',  
  ]
  </script>
<style>


 .font-faktum {
  font-family: 'Faktum', sans-serif;
}
</style>
  
 
  