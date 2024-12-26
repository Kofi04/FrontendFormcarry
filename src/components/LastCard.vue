<template>
  <section class="container mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-12">
      <h4 class="font-semibold text-blue-500 text-lg">FORMCARRY BLOG</h4>
      <h3 class="font-bold text-gray-900 text-2xl md:text-4xl leading-tight">
        Useful to read
      </h3>
    </div>

    <!-- Blog Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Blog Card -->
      <div
        v-for="(post, index) in blogPosts"
        :key="index"
        class="flex flex-col rounded-xl bg-white shadow-lg overflow-hidden"
      >
        <!-- Image -->
        <div class="h-40 overflow-hidden">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
        </div>
        <!-- Content -->
        <div class="p-6">
          <h5 class="text-xl font-semibold text-gray-900 mb-2">
            {{ post.title }}
          </h5>
          <p class="text-gray-600 text-sm">
            {{ post.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    image: "/cvr-383b6.png",
    title: "How to create a contact form with Formcarry",
    description: "Contact forms are one of the best ways to convert more leads, and get the information you need...",
  },
  {
    image: "/cvr-4---8-12be8.png",
    title: "How to create a file upload form with Formcarry in 5 steps",
    description: "One of the most time consuming thing about forms is definitely uploading files, sometimes...",
  },
  {
    image: "/file-upload-form5754.png",
    title: "How to upload files from your HTML form using Base64 encoding",
    description: "Uploading files using Base64 encoding is a common practice, the usage of the technique has...",
  },
];
</script>

<style scoped>
/* Utilisez si besoin des styles personnalisés */
</style>
