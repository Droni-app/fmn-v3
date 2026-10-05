<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { links } from '@/services/site'

// Aparece tras un poco de scroll para no tapar el hero.
const visible = ref(false)
const onScroll = () => (visible.value = window.scrollY > 400)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-6 scale-75"
    leave-active-class="transition duration-300"
    leave-to-class="opacity-0 translate-y-6 scale-75"
  >
    <a
      v-show="visible"
      :href="links.donate"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Donar ahora"
      class="donate-btn group fixed right-4 bottom-4 z-40 flex items-center overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-2xl sm:right-8 sm:bottom-8"
    >
      <span class="grid size-14 shrink-0 place-items-center sm:size-16">
        <i class="mdi mdi-heart heartbeat text-3xl sm:text-4xl" />
      </span>
      <span
        class="max-w-0 overflow-hidden font-display font-bold whitespace-nowrap transition-all duration-500 group-hover:max-w-44 group-hover:pr-6 group-focus-visible:max-w-44 group-focus-visible:pr-6"
      >
        ¡Donar ahora!
      </span>
    </a>
  </Transition>
</template>

<style scoped>
@keyframes heartbeat {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  10%,
  25% {
    transform: scale(1.2);
  }
}
@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgb(249 64 95 / 0.5);
  }
  50% {
    box-shadow: 0 0 0 14px rgb(249 64 95 / 0);
  }
}
.heartbeat {
  animation: heartbeat 1.6s ease-in-out infinite;
}
.donate-btn {
  animation: glow 2.4s ease-out infinite;
}
</style>
