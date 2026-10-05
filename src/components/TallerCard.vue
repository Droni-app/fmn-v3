<script setup lang="ts">
import { computed } from 'vue'
import type { Taller } from '@/services/talleres'
import { pub, whatsappMessage } from '@/services/site'

const props = defineProps<{ taller: Taller; detailed?: boolean }>()
const image = computed(() => pub(`/img/talleres/v2/${props.taller.slug}.webp`))
const inscribir = computed(() =>
  whatsappMessage(`Hola, quiero inscribirme en: ${props.taller.name}`),
)
</script>

<template>
  <article class="card card-hover group flex flex-col overflow-hidden">
    <div class="overflow-hidden">
      <img
        :src="image"
        :alt="taller.name"
        loading="lazy"
        class="aspect-[828/522] w-full object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
    <div class="flex flex-1 flex-col gap-4 p-6">
      <h3 class="text-lg leading-snug font-bold text-plum-800">{{ taller.name }}</h3>
      <p class="leading-relaxed text-ink/70" :class="!detailed && 'line-clamp-4'">
        {{ taller.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="chip"><i class="mdi mdi-clock-outline" />{{ taller.duration }}</span>
        <span class="chip"><i class="mdi mdi-map-marker-outline" />{{ taller.modality }}</span>
      </div>
      <p v-if="taller.certification" class="flex items-start gap-2 text-sm text-ink/70">
        <i class="mdi mdi-certificate-outline text-lg leading-none text-brand-500" />
        {{ taller.certification }}
      </p>
      <p
        v-for="item in taller.extra"
        :key="item"
        class="flex items-start gap-2 rounded-2xl bg-sun-200/60 p-3 text-sm font-semibold text-plum-800"
      >
        <i class="mdi mdi-gift-outline text-lg leading-none" />{{ item }}
      </p>
      <details v-if="detailed && taller.modules" class="group/mods rounded-2xl bg-plum-50 p-4">
        <summary
          class="flex cursor-pointer list-none items-center justify-between font-semibold text-plum-700"
        >
          {{ taller.modules.length }} módulos
          <i class="mdi mdi-chevron-down text-xl transition group-open/mods:rotate-180" />
        </summary>
        <ul class="mt-3 grid gap-1.5 text-sm text-ink/70">
          <li v-for="mod in taller.modules" :key="mod" class="flex gap-2">
            <i class="mdi mdi-check-circle-outline text-brand-500" />{{ mod }}
          </li>
        </ul>
      </details>
      <a
        v-if="detailed"
        :href="inscribir"
        target="_blank"
        rel="noopener"
        class="btn btn-primary mt-auto w-full"
      >
        <i class="mdi mdi-whatsapp text-xl" /> Quiero inscribirme
      </a>
    </div>
  </article>
</template>
