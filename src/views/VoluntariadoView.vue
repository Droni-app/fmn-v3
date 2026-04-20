<script setup lang="ts">
import imgPresencial from '@/assets/voluntariado/vpresencial.webp'

const videos = [
  'lhxEtdr_2Ko',
  'YIlrgrF3UcY',
  'VU7XEfiiPpU',
  'Salls67GZII',
  'Cx050LQmT5Q',
  'YD7i9dGPZ8I',
  'T7UtB7aEAYM',
  'HGaZ05ZWpDE',
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">Invitación al Voluntariado</h1>
        <iframe
          class="w-full aspect-video rounded-lg shadow-xl mx-auto max-w-4xl"
          src="https://www.youtube.com/embed/M6ibmG5Glog"
          title="Invitación al Voluntariado"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>

    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">Voluntariado Presencial</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
            ¿Te gusta regalar sonrisas y momentos únicos? ¡Sube con nosotros, sé voluntario en la Fundación Mariana Novoa y comparte con nuestros 110 niños en Altos de Serrezuela!
          </p>
          <RouterLink to="/contacto" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Llenar Formulario
          </RouterLink>
        </div>
        <img :src="imgPresencial" alt="Voluntariado Presencial" class="rounded-lg shadow-xl w-full" />
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">Voluntariado Corporativo</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
            ¿Quieres apoyar una gran causa que contribuye a una transformación en la sociedad? ¡La responsabilidad social de tu empresa y la Fundación Mariana Novoa pueden trabajar de la mano!
          </p>
          <RouterLink to="/contacto" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Llenar Formulario
          </RouterLink>
        </div>
        <div class="order-1 md:order-2">
          <img src="/img/voluntariado/VOLUNTARIADO-CORP.jpg" alt="Voluntariado Corporativo" class="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </section>

    <!-- Galería de videos -->
    <section class="bg-gray-900 py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-center text-3xl md:text-4xl font-extrabold text-white mb-2">Galería de Videos</h2>
        <p class="text-center text-purple-400 font-semibold mb-10 tracking-wide uppercase text-sm">Voluntariado</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="video in videos" :key="video">
            <iframe
              :src="`https://www.youtube.com/embed/${video}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full rounded-xl shadow-lg"
              style="aspect-ratio: 9/16"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
