<script setup lang="ts">
import CtaBand from '@/components/CtaBand.vue'
import PageHero from '@/components/PageHero.vue'
import TallerCard from '@/components/TallerCard.vue'
import { talleres } from '@/services/talleres'
import { pub } from '@/services/site'
</script>

<template>
  <div>
    <PageHero
      eyebrow="Capacítate, actúa y protege"
      title="Talleres y cursos"
      subtitle="Cada minuto puede hacer la diferencia en una emergencia. Aprende de manera práctica a prevenir accidentes y proteger vidas."
    />

    <section class="section-y container-page">
      <div class="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TallerCard
          v-for="(taller, i) in talleres"
          :key="taller.slug"
          v-reveal="(i % 3) * 100"
          :taller="taller"
          detailed
        />
      </div>
    </section>

    <img
      v-reveal
      :src="pub('/img/talleres/v2/CULTURA-PREVENTIVA.webp')"
      alt="Cultura preventiva"
      loading="lazy"
      class="w-full"
    />

    <CtaBand
      eyebrow="Para empresas e instituciones"
      title="¿Necesitas un taller a la medida?"
      subtitle="Diseñamos capacitaciones para colegios, jardines, empresas y comunidades."
    >
      <RouterLink to="/contacto" class="btn btn-light">Solicitar información</RouterLink>
    </CtaBand>
  </div>
</template>
