<script setup lang="ts">
import logoFmnW from '@/assets/logo-FMN-w.webp'

const socials = [
  { href: 'https://wa.me/573164284175', icon: 'mdi-whatsapp', label: 'WhatsApp', color: 'hover:bg-green-500 dark:hover:bg-green-500', textColor: 'text-green-600 dark:text-green-400' },
  { href: 'https://www.facebook.com/fundacionmariananovoa/', icon: 'mdi-facebook', label: 'Facebook', color: 'hover:bg-blue-600 dark:hover:bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400' },
  { href: 'https://www.instagram.com/fundacionmariananovoa/', icon: 'mdi-instagram', label: 'Instagram', color: 'hover:bg-pink-600', textColor: 'text-pink-600 dark:text-pink-400' },
  { href: 'https://twitter.com/Fmariananovoa', icon: 'mdi-twitter', label: 'Twitter', color: 'hover:bg-sky-500 dark:hover:bg-sky-500', textColor: 'text-sky-500 dark:text-sky-400' },
  { href: 'https://www.youtube.com/channel/UCSnmLVrx0OchVn_7Cutkruw', icon: 'mdi-youtube', label: 'YouTube', color: 'hover:bg-red-600 dark:hover:bg-red-600', textColor: 'text-red-600 dark:text-red-400' },
]
</script>

<template>
  <footer class="bg-indigo-400 dark:bg-gray-900 pb-8">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.0453008931613!2d-74.0177002!3d4.7621236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8f689ac30d49%3A0xa321f5ab00e3614!2sFundaci%C3%B3n%20Mariana%20Novoa!5e0!3m2!1ses!2ses!4v1626981581592!5m2!1ses!2ses"
      width="100%"
      height="330"
      style="border: 0"
      allowfullscreen
      title="Mapa Fundación Mariana Novoa"
      loading="lazy"
    />

    <div class="container mx-auto py-8 px-4">
      <img :src="logoFmnW" alt="Fundación Mariana Novoa" class="w-64 md:w-80 mb-8" />

      <!-- Redes Sociales -->
      <div class="flex items-center gap-4 mb-8">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          :aria-label="social.label"
          :class="['group flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110', social.color]"
        >
          <i :class="['mdi text-2xl group-hover:text-white transition-colors', social.icon, social.textColor]" />
        </a>
      </div>

      <!-- Contacto -->
      <div class="flex flex-col gap-4 max-w-2xl">
        <a
          href="https://www.google.com/maps/search/Fundaci%C3%B3n+Mariana+Novoa"
          target="_blank"
          class="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-indigo-50 dark:hover:bg-gray-700 font-medium"
        >
          <i class="mdi mdi-map-marker text-2xl" />
          <span>Kilómetro 5 via antigua al Guavio. Barrio Altos de Serrezuela</span>
        </a>

        <div class="flex flex-col sm:flex-row gap-4">
          <a href="tel:+573164284175" class="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-gray-700 font-medium flex-1">
            <i class="mdi mdi-phone text-2xl" />
            <span>+ 57 316 428 4175</span>
          </a>
          <a href="tel:+573228634379" class="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-gray-700 font-medium flex-1">
            <i class="mdi mdi-phone text-2xl" />
            <span>+ 57 322 863 4379</span>
          </a>
        </div>

        <a href="mailto:Lina.villamil@mariananovoa.org" class="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700 font-medium">
          <i class="mdi mdi-email text-2xl" />
          <span>Lina.villamil@mariananovoa.org</span>
        </a>
      </div>
    </div>
  </footer>
</template>
