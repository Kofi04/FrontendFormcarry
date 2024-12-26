<template>
  <section class="text-white py-16 md:py-24 mt-8 rounded-3xl" style="background-color: rgb(14, 11, 61);">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center md:text-left max-w-3xl mx-auto">
        <!-- Slogan -->
        <p class="text-yellow-500 text-lg font-semibold mb-4">
          Savior, yeah time-savior
        </p>

        <!-- Title -->
        <h2 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Features that<br />
          you need.
        </h2>

        <!-- Description -->
        <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-12">
          Use features that normally take days to code, in minutes.<br />
          Integration with your CRM in 2 minutes. Set auto-responses<br />
          in 2 minutes. Field validations in 2 minutes. You get the idea.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FeatureCard from './FeatureCard.vue';
import { InboxIcon, ShieldIcon, CodeIcon, BarChartIcon } from 'lucide-vue-next';

const features = ref([
  {
    icon: InboxIcon,
    title: 'Email Notifications',
    description: 'Get instant email notifications for new form submissions.',
  },
  {
    icon: ShieldIcon,
    title: 'Spam Protection',
    description: 'Built-in spam filtering to keep your inbox clean.',
  },
  {
    icon: CodeIcon,
    title: 'Simple Integration',
    description: "Just add our URL to your form's action attribute.",
  },
  {
    icon: BarChartIcon,
    title: 'Analytics',
    description: 'Track form submissions and conversion rates.',
  },
]);
</script>

<style scoped>
/* Ajout d'un léger espace entre les cartes sur mobiles */
</style>
