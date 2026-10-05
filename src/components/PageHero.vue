<script setup lang="ts">
/** Cabecera de página: degradado con burbujas animadas, imagen opcional y onda inferior. */
withDefaults(
  defineProps<{
    title: string
    eyebrow?: string
    subtitle?: string
    image?: string
    tone?: 'brand' | 'plum' | 'ocean'
  }>(),
  { tone: 'brand' },
)

const tones = {
  brand: 'from-brand-500 via-brand-400 to-plum-500',
  plum: 'from-plum-700 via-plum-600 to-brand-500',
  ocean: 'from-ocean-900 via-ocean-700 to-ocean-500',
}
</script>

<template>
  <header :class="['relative isolate overflow-hidden bg-gradient-to-br text-white', tones[tone]]">
    <img
      v-if="image"
      :src="image"
      alt=""
      class="absolute inset-0 -z-10 size-full object-cover opacity-25 mix-blend-overlay"
      fetchpriority="high"
    />
    <div
      class="absolute -top-24 -left-24 -z-10 size-72 animate-float rounded-full bg-white/15 blur-2xl"
    />
    <div
      class="absolute -right-16 bottom-0 -z-10 size-96 animate-float rounded-full bg-sun-300/20 blur-3xl [animation-delay:-4s]"
    />

    <div class="container-page relative pt-16 pb-24 text-center sm:pt-20 md:pt-24 md:pb-32">
      <p
        v-if="eyebrow"
        class="mb-4 inline-flex animate-fade-up rounded-full bg-white/15 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.2em] uppercase ring-1 ring-white/30 backdrop-blur sm:text-sm"
      >
        {{ eyebrow }}
      </p>
      <h1
        class="mx-auto max-w-4xl animate-fade-up font-display text-3xl leading-tight font-extrabold tracking-tight [animation-delay:100ms] sm:text-5xl lg:text-6xl"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="mx-auto mt-5 max-w-2xl animate-fade-up text-lg text-white/90 [animation-delay:200ms] md:text-xl"
      >
        {{ subtitle }}
      </p>
      <div
        v-if="$slots.default"
        class="mt-8 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:300ms]"
      >
        <slot />
      </div>
    </div>

    <svg
      class="absolute -bottom-px left-0 h-10 w-full text-cream md:h-16"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 40c120 26 240 39 360 39S600 66 720 40 960 1 1080 1s240 13 360 39v40H0z"
      />
    </svg>
  </header>
</template>
