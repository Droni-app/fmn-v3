<script setup lang="ts">
import { ref } from 'vue'

const contactOptions = [
  { value: 'talleres', label: 'Talleres', icon: 'mdi-school' },
  { value: 'voluntariado', label: 'Voluntariado', icon: 'mdi-account-group-outline' },
  { value: 'tienda', label: 'Tienda', icon: 'mdi-shopping' },
  { value: 'otro', label: 'Otro', icon: 'mdi-help-circle' },
]

const form = ref({ tipo: 'otro', nombre: '', email: '', telefono: '', mensaje: '' })

const handleSubmit = () => {
  const tipoLabel = contactOptions.find(o => o.value === form.value.tipo)?.label ?? form.value.tipo
  const text = encodeURIComponent(
    `*Tipo:* ${tipoLabel}\n*Nombre:* ${form.value.nombre}\n*Email:* ${form.value.email}\n*Teléfono:* ${form.value.telefono}\n\n*Mensaje:*\n${form.value.mensaje}`
  )
  window.open(`https://wa.me/573164284175?text=${text}`, '_blank')
  form.value = { tipo: 'otro', nombre: '', email: '', telefono: '', mensaje: '' }
}
</script>

<template>
  <div>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Ponte en Contacto</h1>
        <p class="text-lg text-white/90 max-w-2xl mx-auto">
          ¿Tienes preguntas sobre nuestros programas? ¿Quieres donar, ser voluntario o acceder a nuestra tienda? Estamos aquí para ayudarte.
        </p>
      </div>
    </section>

    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">

        <!-- Formulario -->
        <div>
          <h2 class="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-8">Envíanos un Mensaje</h2>

          <!-- Tipo de contacto -->
          <div class="mb-8">
            <p class="text-sm font-bold text-purple-700 dark:text-purple-400 mb-4">¿En qué podemos ayudarte?</p>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="opt in contactOptions"
                :key="opt.value"
                :class="[
                  'flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all',
                  form.tipo === opt.value
                    ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30'
                    : 'border-gray-300 dark:border-gray-600 hover:border-purple-300',
                ]"
                @click="form.tipo = opt.value"
              >
                <i :class="['mdi text-3xl mb-2', opt.icon, form.tipo === opt.value ? 'text-purple-600' : 'text-gray-500']" />
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ opt.label }}</span>
              </button>
            </div>
          </div>

          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div>
              <label class="block text-sm font-bold text-purple-700 dark:text-purple-400 mb-2">Nombre <span class="text-red-500">*</span></label>
              <input v-model="form.nombre" type="text" placeholder="Tu nombre completo" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all" />
            </div>
            <div>
              <label class="block text-sm font-bold text-purple-700 dark:text-purple-400 mb-2">Email <span class="text-red-500">*</span></label>
              <input v-model="form.email" type="email" placeholder="tu@email.com" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all" />
            </div>
            <div>
              <label class="block text-sm font-bold text-purple-700 dark:text-purple-400 mb-2">Teléfono</label>
              <input v-model="form.telefono" type="tel" placeholder="+57 3XX XXX XXXX" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all" />
            </div>
            <div>
              <label class="block text-sm font-bold text-purple-700 dark:text-purple-400 mb-2">Mensaje <span class="text-red-500">*</span></label>
              <textarea v-model="form.mensaje" placeholder="Cuéntanos con más detalle..." rows="5" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all resize-none" />
            </div>
            <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Enviar por WhatsApp
            </button>
          </form>
        </div>

        <!-- Info -->
        <div class="space-y-5">
          <div class="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl border border-purple-100 dark:border-gray-700">
            <div class="flex items-start gap-4">
              <i class="mdi mdi-phone text-4xl text-purple-600 dark:text-purple-400" />
              <div>
                <h3 class="font-bold text-purple-700 dark:text-purple-400 mb-2">Teléfono</h3>
                <a href="tel:+573164284175" class="block text-gray-700 dark:text-gray-300 hover:text-purple-600 font-semibold transition-colors">+57 316 428 4175</a>
                <a href="tel:+573228634379" class="block text-gray-700 dark:text-gray-300 hover:text-purple-600 font-semibold transition-colors">+57 322 863 4379</a>
              </div>
            </div>
          </div>
          <div class="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl border border-purple-100 dark:border-gray-700">
            <div class="flex items-start gap-4">
              <i class="mdi mdi-email text-4xl text-purple-600 dark:text-purple-400" />
              <div>
                <h3 class="font-bold text-purple-700 dark:text-purple-400 mb-2">Email</h3>
                <a href="mailto:informacion@mariananovoa.org" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 font-semibold transition-colors">informacion@mariananovoa.org</a>
              </div>
            </div>
          </div>
          <div class="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl border border-purple-100 dark:border-gray-700">
            <div class="flex items-start gap-4">
              <i class="mdi mdi-map-marker text-4xl text-purple-600 dark:text-purple-400" />
              <div>
                <h3 class="font-bold text-purple-700 dark:text-purple-400 mb-2">Ubicación</h3>
                <a href="https://www.google.com/maps/search/Fundaci%C3%B3n+Mariana+Novoa" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 font-semibold transition-colors">
                  Km 5 vía antigua al Guavio<br />Altos de Serrezuela, Bogotá
                </a>
              </div>
            </div>
          </div>
          <div class="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl border border-purple-100 dark:border-gray-700">
            <h3 class="font-bold text-purple-700 dark:text-purple-400 mb-4">Síguenos</h3>
            <div class="flex gap-3">
              <a v-for="(s, i) in [{ href: 'https://www.facebook.com/fundacionmariananovoa/', icon: 'mdi-facebook', bg: 'bg-blue-600 hover:bg-blue-700' }, { href: 'https://www.instagram.com/fundacionmariananovoa/', icon: 'mdi-instagram', bg: 'bg-pink-600 hover:bg-pink-700' }, { href: 'https://twitter.com/Fmariananovoa', icon: 'mdi-twitter', bg: 'bg-sky-500 hover:bg-sky-600' }, { href: 'https://www.youtube.com/channel/UCSnmLVrx0OchVn_7Cutkruw', icon: 'mdi-youtube', bg: 'bg-red-600 hover:bg-red-700' }]" :key="i" :href="s.href" target="_blank" :class="['flex items-center justify-center w-12 h-12 text-white rounded-full transition-colors', s.bg]">
                <i :class="['mdi text-xl', s.icon]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
