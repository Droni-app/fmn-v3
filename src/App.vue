<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import MainFoot from '@/components/MainFoot.vue'
import DonateButton from '@/components/DonateButton.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <DonateButton />
    <MainNav />
    <RouterView />
    <MainFoot />
  </div>
</template>
