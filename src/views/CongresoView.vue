<script setup lang="ts">
import bannerCongreso from '@/assets/congreso/2027/bannerHeroCongreso2027.webp'
</script>

<template>
  <div class="bg-ocean-900">
    <img
      :src="bannerCongreso"
      alt="V Congreso Internacional para la prevención de los ahogamientos, Medellín, Colombia, 26, 27 y 28 de julio de 2027"
      fetchpriority="high"
      class="w-full"
    />
    <div class="container-page py-6 text-center">
      <RouterLink
        to="/congreso/2026"
        class="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
      >
        Ver la edición 2026 del congreso
      </RouterLink>
    </div>
  </div>
</template>
