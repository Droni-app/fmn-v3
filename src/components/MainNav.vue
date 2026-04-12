<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode } from '@/composables/useColorMode'
import logoFmn from '@/assets/logo-FMN.webp'

const colorMode = useColorMode()
const isMenuOpen = ref(false)

const menu = [
  { name: 'Proyectos', link: '/ejes' },
  { name: 'Asalvo', link: '/asalvo' },
  { name: 'Congreso', link: '/congreso' },
  { name: 'Talleres', link: '/talleres' },
  { name: 'Voluntariado', link: '/voluntariado' },
  { name: 'Noticias', link: '/noticias' },
  { name: 'Tienda', link: '/tienda' },
  { name: 'Donar', link: '/donar' },
  { name: 'Transparencia', link: '/transparencia' },
  { name: 'Contacto', link: '/contacto' },
]

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="bg-rose-50 dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <RouterLink to="/" class="flex-shrink-0 transition-transform hover:scale-105 duration-300">
          <img :src="logoFmn" alt="Fundación Mariana Novoa" class="h-10 md:h-14" />
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <RouterLink
            v-for="item in menu"
            :key="item.name"
            :to="item.link"
            class="group relative px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-lg transition-all duration-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-100 dark:hover:bg-gray-800"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-4/5 transition-all duration-300" />
          </RouterLink>

          <button
            class="ml-4 p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
            aria-label="Toggle dark mode"
            @click="toggleDarkMode"
          >
            <i v-if="colorMode.value === 'light'" class="mdi mdi-weather-night text-2xl" />
            <i v-else class="mdi mdi-white-balance-sunny text-2xl" />
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav v-if="isMenuOpen" class="lg:hidden py-4 border-t border-rose-200 dark:border-gray-700">
          <RouterLink
            v-for="item in menu"
            :key="item.name"
            :to="item.link"
            class="group flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 rounded-lg transition-all duration-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-100 dark:hover:bg-gray-800"
            @click="closeMenu"
          >
            <span class="w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-4 transition-all duration-300" />
            {{ item.name }}
          </RouterLink>
        </nav>
      </Transition>
    </div>
  </header>
</template>
