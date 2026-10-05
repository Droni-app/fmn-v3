<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import MainFoot from '@/components/MainFoot.vue'
import DonateButton from '@/components/DonateButton.vue'
</script>

<template>
  <a
    href="#main"
    class="sr-only z-[100] rounded-full bg-plum-700 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
  >
    Saltar al contenido
  </a>
  <MainNav />
  <main id="main" class="min-h-[60vh]">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <MainFoot />
  <DonateButton />
</template>
