<script setup lang="ts">
import { productos } from '@/services/tienda'
</script>

<template>
  <section>
    <header class="bg-purple-100 dark:bg-gray-800 py-16 px-4">
      <h1 class="font-extrabold text-center text-3xl md:text-5xl text-rose-500 dark:text-rose-400 max-w-4xl mx-auto">
        Por la compra de alguno de nuestros productos estás apoyando la formación de los 120 niños, niñas y adolescentes que pertenecen a nuestro Proyecto Social.
      </h1>
    </header>

    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="producto in productos" :key="producto.name" class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="producto.picture" :alt="producto.name" class="w-full h-64 object-cover" />
          <div class="p-6 bg-white dark:bg-gray-900">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{{ producto.name }}</h3>
            <a
              href="https://api.whatsapp.com/send/?phone=573164284175&type=phone_number"
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-colors duration-300"
            >
              <i class="mdi mdi-cart-outline text-xl" />
              Comprar ahora
            </a>
          </div>
        </div>
      </div>

      <iframe
        class="w-full rounded-lg border border-gray-200 dark:border-gray-700"
        src="https://airtable.com/embed/appIPoYkGE85ALCEn/shr26oVqqDHrwtfzG"
        frameborder="0"
        width="100%"
        height="533"
        style="background: transparent"
      />
    </div>

    <h2 class="font-extrabold text-center text-3xl text-rose-500 dark:text-rose-400 px-4 py-8 max-w-4xl mx-auto">
      Por la compra de alguno de nuestros productos estás apoyando la formación de los 120 niños, niñas y adolescentes que pertenecen a nuestro Proyecto Social.
    </h2>
    <img src="/img/tienda/apoyo.jpg" alt="Apoyo proyecto social" class="w-full h-72 object-cover" />
  </section>
</template>
