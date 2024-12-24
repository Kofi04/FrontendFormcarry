<template>

    <section class="text-white py-24 mt-8 rounded-3xl" style="background-color: rgb(14, 11, 61);">
      <div class="container mx-auto px-6">
        <div class=" mx-auto">

            <p class="text-yellow-500 text-lg font-semibold mb-4" style="font-size: 16px;">Savior, yeah time-savior</p>
          <h2 class="text-3xl font-bold mb-12"style="font-size: 56px;">
            Features that
            <br />
            you need. 
          </h2>
            <p style="color: rgb(179, 184, 208);  font-size: 18px;">
            Use features that normally take days to code, in minutes.<br>
            Integration with your CRM in 2 minutes. Set auto-responses<br>
            in 2 minutes. Field validations in 2 minutes. You get the idea.
            </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
          </div>
          </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import FeatureCard from './FeatureCard.vue'
  import { InboxIcon, ShieldIcon, CodeIcon, BarChartIcon } from 'lucide-vue-next'
  
  const features = ref([
    {
      icon: InboxIcon,
      title: 'Email Notifications',
      description: 'Get instant email notifications for new form submissions.'
    },
    {
      icon: ShieldIcon,
      title: 'Spam Protection',
      description: 'Built-in spam filtering to keep your inbox clean.'
    },
    {
      icon: CodeIcon,
      title: 'Simple Integration',
      description: 'Just add our URL to your form\'s action attribute.'
    },
    {
      icon: BarChartIcon,
      title: 'Analytics',
      description: 'Track form submissions and conversion rates.'
    }
  ])
  </script>
  
  