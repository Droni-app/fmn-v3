<script setup lang="ts">
/** Franja de llamado a la acción con degradado. */
defineProps<{ title: string; eyebrow?: string; subtitle?: string }>()
</script>

<template>
  <section class="container-page py-16 md:py-20">
    <div
      v-reveal:zoom
      class="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-plum-700 via-plum-600 to-brand-500 px-6 py-14 text-center text-white shadow-2xl shadow-plum-700/30 sm:px-12 md:py-20"
    >
      <div
        class="absolute -top-20 -right-20 -z-10 size-72 animate-float rounded-full bg-brand-400/40 blur-3xl"
      />
      <div
        class="absolute -bottom-24 -left-10 -z-10 size-72 animate-float rounded-full bg-sun-300/25 blur-3xl [animation-delay:-3s]"
      />
      <p
        v-if="eyebrow"
        class="mb-3 font-display text-sm font-semibold tracking-[0.2em] text-sun-300 uppercase"
      >
        {{ eyebrow }}
      </p>
      <h2 class="mx-auto max-w-3xl font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mx-auto mt-4 max-w-2xl text-lg text-white/85">{{ subtitle }}</p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <slot />
      </div>
    </div>
  </section>
</template>
