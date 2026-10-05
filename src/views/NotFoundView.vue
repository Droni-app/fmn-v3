<script setup lang="ts">
import imgMarianita from '@/assets/home/marianita.webp'

const sugerencias = [
  { to: '/talleres', label: 'Talleres', icon: 'mdi-school-outline' },
  { to: '/donar', label: 'Donar', icon: 'mdi-heart-outline' },
  { to: '/ejes/social', label: 'Proyecto social', icon: 'mdi-hand-heart-outline' },
  { to: '/voluntariado', label: 'Voluntariado', icon: 'mdi-account-group-outline' },
  { to: '/noticias', label: 'Noticias', icon: 'mdi-newspaper-variant-outline' },
  { to: '/contacto', label: 'Contacto', icon: 'mdi-email-outline' },
]
</script>

<template>
  <section class="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[auto_1fr]">
    <div class="relative mx-auto w-48 sm:w-64">
      <div class="absolute inset-0 -z-10 animate-float rounded-full bg-brand-200 blur-2xl" />
      <img :src="imgMarianita" alt="" class="w-full animate-float [animation-duration:5s]" />
    </div>
    <div class="text-center lg:text-left">
      <p class="font-display text-7xl font-black text-gradient md:text-9xl">404</p>
      <h1 class="heading mt-2">¡Ups! Esta página no existe</h1>
      <p class="lead mt-4 max-w-xl lg:mx-0 mx-auto">
        Puede que el enlace sea antiguo o tenga un error. Te ayudamos a encontrar lo que buscas.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
        <RouterLink to="/" class="btn btn-primary"
          ><i class="mdi mdi-home-outline" /> Ir al inicio</RouterLink
        >
        <RouterLink to="/contacto" class="btn btn-outline">Contáctanos</RouterLink>
      </div>
      <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <RouterLink
          v-for="s in sugerencias"
          :key="s.to"
          :to="s.to"
          class="card card-hover flex items-center gap-3 p-4 font-semibold text-plum-800"
        >
          <i :class="['mdi text-2xl text-brand-500', s.icon]" />{{ s.label }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
