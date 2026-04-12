<script setup lang="ts">
import imgAsalvoEjes from '@/assets/ejes/asalvo-ejes.webp'
import imgPadrino from '@/assets/ejes/padrino.webp'
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-rose-400 text-center mb-10 poppins">Nuestros Proyectos</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <RouterLink to="/ejes/preventivo">
          <img :src="imgAsalvoEjes" alt="Eje Preventivo" class="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
        </RouterLink>
        <div class="p-6">
          <RouterLink to="/ejes/preventivo">
            <h2 class="text-2xl text-rose-600 hover:underline font-semibold mb-3">ASALVO – Eje Preventivo</h2>
          </RouterLink>
          <p class="text-gray-700 dark:text-gray-300">
            Honrar la memoria de Mariana al contribuir a una sociedad consciente y con mayor atención en la población infantil.
          </p>
        </div>
      </div>
      <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <RouterLink to="/ejes/social">
          <img :src="imgPadrino" alt="Eje Social" class="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
        </RouterLink>
        <div class="p-6">
          <RouterLink to="/ejes/social">
            <h2 class="text-2xl text-rose-600 hover:underline font-semibold mb-3">EJE SOCIAL</h2>
          </RouterLink>
          <p class="text-gray-700 dark:text-gray-300">
            Apoyamos la formación y bienestar de 120 niños, niñas y adolescentes de los barrios Altos de Serrezuela, Lomitas, Capilla, Aurora Alta y Aurora Baja en Bogotá.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
