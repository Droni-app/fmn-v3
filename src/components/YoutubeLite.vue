<script setup lang="ts">
/** Muestra la miniatura de YouTube y sólo carga el iframe al hacer clic. */
import { ref } from 'vue'

const props = defineProps<{ id: string; title: string; vertical?: boolean }>()
const playing = ref(false)
const thumb = `https://i.ytimg.com/vi/${props.id}/${props.vertical ? 'oar2' : 'hqdefault'}.jpg`
const fallback = `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`

const onError = (e: Event) => {
  const img = e.target as HTMLImageElement
  if (img.src !== fallback) img.src = fallback
}
</script>

<template>
  <div
    :class="[
      'group relative overflow-hidden rounded-2xl bg-plum-900 shadow-lg',
      vertical ? 'aspect-[9/16]' : 'aspect-video',
    ]"
  >
    <iframe
      v-if="playing"
      class="absolute inset-0 size-full"
      :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`"
      :title="title"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      "
      allowfullscreen
    />
    <button
      v-else
      type="button"
      class="absolute inset-0 size-full cursor-pointer"
      :aria-label="`Reproducir video: ${title}`"
      @click="playing = true"
    >
      <img
        :src="thumb"
        :alt="title"
        loading="lazy"
        class="size-full object-cover transition duration-500 group-hover:scale-105"
        @error="onError"
      />
      <span
        class="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-transparent"
      />
      <span
        class="absolute top-1/2 left-1/2 grid size-16 -translate-1/2 place-items-center rounded-full bg-white/90 text-brand-500 shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white"
      >
        <i class="mdi mdi-play text-4xl" />
      </span>
    </button>
  </div>
</template>
