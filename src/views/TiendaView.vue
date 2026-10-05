<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import { productos } from '@/services/tienda'
import { pub, whatsappMessage } from '@/services/site'
</script>

<template>
  <div>
    <PageHero
      eyebrow="Tienda solidaria"
      title="Compra con propósito"
      subtitle="Por la compra de alguno de nuestros productos estás apoyando la formación de los 120 niños, niñas y adolescentes que pertenecen a nuestro Proyecto Social."
      tone="plum"
    />

    <section class="section-y container-page">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(producto, i) in productos"
          :key="producto.name"
          v-reveal="(i % 3) * 100"
          class="card card-hover group overflow-hidden"
        >
          <div class="overflow-hidden bg-brand-50">
            <img
              :src="pub(producto.picture)"
              :alt="producto.name"
              loading="lazy"
              class="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div class="flex items-center justify-between gap-4 p-6">
            <h2 class="text-lg font-bold text-plum-800 capitalize">
              {{ producto.name.toLowerCase() }}
            </h2>
            <a
              :href="whatsappMessage(`Hola, quiero comprar: ${producto.name}`)"
              target="_blank"
              rel="noopener"
              :aria-label="`Comprar ${producto.name}`"
              class="btn btn-primary shrink-0 px-4!"
            >
              <i class="mdi mdi-cart-outline text-xl" /> Comprar
            </a>
          </div>
        </article>
      </div>

      <div v-reveal class="card mt-16 overflow-hidden p-2">
        <iframe
          class="h-[540px] w-full rounded-[1.25rem]"
          src="https://airtable.com/embed/appIPoYkGE85ALCEn/shr26oVqqDHrwtfzG"
          title="Formulario de pedidos de la tienda"
          loading="lazy"
        />
      </div>
    </section>

    <img
      :src="pub('/img/tienda/apoyo.webp')"
      alt="Apoyo al proyecto social"
      loading="lazy"
      class="h-72 w-full object-cover md:h-96"
    />
  </div>
</template>
