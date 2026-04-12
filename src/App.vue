<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import MainFoot from '@/components/MainFoot.vue'
import DonateButton from '@/components/DonateButton.vue'
</script>

<template>
  <DonateButton />
  <MainNav />
  <RouterView />
  <MainFoot />
</template>
