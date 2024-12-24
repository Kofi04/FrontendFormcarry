<template>
    <section class="container mx-auto px-6 py-16 text-center">
      <p style="color: rgb(20, 99, 255);" class="font-bold">FORM API</p>
  <h1 
    class="text-6xl font-bold mb-6 font-faktum" 
    style="color: rgb(14, 11, 61); font-size: 64px; letter-spacing: -0.04em; line-height: 72px;"
  >
    Receive emails   
    <span class="inline-flex items-center">
      <img src="/lightning_icon.svg" >
    
    </span> instantly
    <br />
    from your website <span class="inline-flex items-center">
      <img src="/formcarry_form_icon.svg" >
    
    </span> form
  </h1>

      <p class="text-gray-600 text-xl mb-4 max-w-1xl mx-auto" style="font-size: 18px;">
        Never worry about the backend of your form again. Create your HTML form,</p>
        
        <p class="text-gray-600 text-xl mb-4 max-w-2xl mx-auto" style="font-size: 18px;">
        connect to our API, get email notifications, block spam, and use </p>
        <p class="text-gray-600 text-xl mb-12 max-w-2xl mx-auto" style="font-size: 18px;">over 3000 integrations.</p>
      
 
        <div class="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8 relative animate-float">
       
       <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
         <div class="flex items-center space-x-2 mb-4">
         </div>
           <div class="flex space-x-4">
           <input 
             type="email" 
             placeholder=" Your email address"
             class="flex-1 p-3 border border-gray-200 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
           />
           <button class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
             Get Started
           </button>
           </div>
       </div>
     </div>


          <div class="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg p-6 relative">
    <!-- Header avec icônes -->
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
    <br>
  
    <img src="/formcarry_logo.svg" width="147" height="30" alt="formcarry" class="sc-2ce100cc-1 jszDSm" style="opacity: 1; transform: none;">
    <br>
    <br>
    <!-- Contenu principal -->
    <div>
      <h1 class="text-lg font-semibold text-gray-800 flex items-center space-x-2">
        <span>🧸</span>
        <span>My Sweet Form</span> <p class="text-gray-400 text-sm mt-1">128 Submissions</p>
      </h1>
      <p class="text-lg text-gray-400 flex items-center space-x-2 ">XXXXXXXX</p>
      <div class="mt-4">
        <p class="text-gray-500 text-sm flex items-center space-x-2">Your form API endpoint</p>
      </div>
    </div>
  </div>
  

         
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  </script>
  
  <style scoped>
/* Appliquer la police Faktum à ce composant */
.font-faktum {
  font-family: 'Faktum', sans-serif;
}

.submitButton {
  display: block; /* Assurez-vous que l'élément SVG se comporte comme un bloc */
  margin: 0 auto; /* Centrer horizontalement l'élément */
  max-width: 100%; /* Assurer que l'élément ne dépasse pas de son conteneur */
}

.buttonBg {
  fill: #1463FF; /* L'arrière-plan du bouton a déjà cette couleur, donc vous n'avez peut-être pas besoin de modifier */
}

path {
  transition: all 0.3s ease; /* Animation de transition au survol ou à l'interaction, par exemple */
}

</style>