<script setup lang="ts">
import { ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import { contact, socials, whatsappMessage } from '@/services/site'

const contactOptions = [
  { value: 'Talleres', icon: 'mdi-school-outline' },
  { value: 'Voluntariado', icon: 'mdi-account-group-outline' },
  { value: 'Donaciones', icon: 'mdi-heart-outline' },
  { value: 'Tienda', icon: 'mdi-shopping-outline' },
  { value: 'Congreso', icon: 'mdi-microphone-outline' },
  { value: 'Otro', icon: 'mdi-help-circle-outline' },
]

const fields = [
  {
    id: 'nombre',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Tu nombre completo',
    required: true,
  },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com', required: true },
  {
    id: 'telefono',
    label: 'Teléfono',
    type: 'tel',
    placeholder: '+57 3XX XXX XXXX',
    required: false,
  },
] as const

const empty = () => ({ tipo: 'Otro', nombre: '', email: '', telefono: '', mensaje: '' })
const form = ref(empty())
const sent = ref(false)

const handleSubmit = () => {
  const f = form.value
  const text = `*Tipo:* ${f.tipo}\n*Nombre:* ${f.nombre}\n*Email:* ${f.email}\n*Teléfono:* ${f.telefono}\n\n*Mensaje:*\n${f.mensaje}`
  window.open(whatsappMessage(text), '_blank')
  form.value = empty()
  sent.value = true
}

const inputClass =
  'w-full rounded-2xl border-0 bg-cream px-4 py-3.5 text-ink ring-1 ring-plum-100 transition placeholder:text-ink/40 focus:bg-white focus:ring-2 focus:ring-brand-400 focus:outline-none'
</script>

<template>
  <div>
    <PageHero
      eyebrow="Estamos para ayudarte"
      title="Ponte en contacto"
      subtitle="¿Tienes preguntas sobre nuestros programas? ¿Quieres donar, ser voluntario o acceder a nuestra tienda?"
    />

    <section class="container-page -mt-12 pb-16 md:-mt-20 md:pb-24">
      <div class="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div v-reveal class="card p-6 sm:p-10">
          <h2 class="text-2xl font-extrabold text-plum-800 md:text-3xl">Envíanos un mensaje</h2>
          <p class="mt-2 text-ink/60">Te responderemos por WhatsApp lo antes posible.</p>

          <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 -translate-y-2"
          >
            <p
              v-if="sent"
              role="status"
              class="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 font-semibold text-emerald-700"
            >
              <i class="mdi mdi-check-circle text-2xl" />
              ¡Gracias! Abrimos WhatsApp con tu mensaje listo para enviar.
            </p>
          </Transition>

          <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
            <fieldset>
              <legend class="mb-3 text-sm font-bold text-plum-700">
                ¿En qué podemos ayudarte?
              </legend>
              <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <label
                  v-for="opt in contactOptions"
                  :key="opt.value"
                  :class="[
                    'flex cursor-pointer items-center gap-3 rounded-2xl p-3.5 ring-2 transition has-[:focus-visible]:ring-brand-400',
                    form.tipo === opt.value
                      ? 'bg-brand-50 text-brand-600 ring-brand-400'
                      : 'bg-cream text-ink/70 ring-transparent hover:ring-plum-200',
                  ]"
                >
                  <input
                    v-model="form.tipo"
                    type="radio"
                    name="tipo"
                    :value="opt.value"
                    class="sr-only"
                  />
                  <i :class="['mdi text-2xl', opt.icon]" />
                  <span class="text-sm font-semibold">{{ opt.value }}</span>
                </label>
              </div>
            </fieldset>

            <div class="grid gap-5 sm:grid-cols-2">
              <div
                v-for="field in fields"
                :key="field.id"
                :class="field.id === 'nombre' && 'sm:col-span-2'"
              >
                <label :for="field.id" class="mb-2 block text-sm font-bold text-plum-700">
                  {{ field.label }} <span v-if="field.required" class="text-brand-500">*</span>
                </label>
                <input
                  :id="field.id"
                  v-model="form[field.id]"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  :autocomplete="field.id === 'nombre' ? 'name' : field.id"
                  :class="inputClass"
                />
              </div>
            </div>
            <div>
              <label for="mensaje" class="mb-2 block text-sm font-bold text-plum-700">
                Mensaje <span class="text-brand-500">*</span>
              </label>
              <textarea
                id="mensaje"
                v-model="form.mensaje"
                placeholder="Cuéntanos con más detalle..."
                rows="5"
                required
                :class="[inputClass, 'resize-none']"
              />
            </div>
            <button type="submit" class="btn btn-whatsapp w-full py-4!">
              <i class="mdi mdi-whatsapp text-xl" /> Enviar por WhatsApp
            </button>
          </form>
        </div>

        <aside class="space-y-5">
          <div v-reveal="100" class="card p-6">
            <h3 class="mb-4 flex items-center gap-3 font-bold text-plum-800">
              <i
                class="mdi mdi-phone-outline grid size-11 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-500"
              />
              Teléfonos
            </h3>
            <a
              v-for="p in contact.phones"
              :key="p.href"
              :href="p.href"
              class="block py-1 font-semibold text-ink/80 transition hover:text-brand-600"
            >
              {{ p.label }}
            </a>
          </div>
          <div v-reveal="200" class="card p-6">
            <h3 class="mb-4 flex items-center gap-3 font-bold text-plum-800">
              <i
                class="mdi mdi-email-outline grid size-11 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-500"
              />
              Email
            </h3>
            <a
              :href="`mailto:${contact.email}`"
              class="font-semibold break-all text-ink/80 transition hover:text-brand-600"
            >
              {{ contact.email }}
            </a>
          </div>
          <div v-reveal="300" class="card p-6">
            <h3 class="mb-4 flex items-center gap-3 font-bold text-plum-800">
              <i
                class="mdi mdi-map-marker-outline grid size-11 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-500"
              />
              Ubicación
            </h3>
            <a
              :href="contact.mapsUrl"
              target="_blank"
              rel="noopener"
              class="font-semibold text-ink/80 transition hover:text-brand-600"
            >
              {{ contact.address }}
            </a>
          </div>
          <div
            v-reveal="400"
            class="card bg-gradient-to-br from-plum-700 to-brand-500 p-6 text-white"
          >
            <h3 class="mb-4 font-bold">Síguenos</h3>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.label"
                :class="[
                  'grid size-11 place-items-center rounded-full bg-white/15 text-xl transition hover:-translate-y-1',
                  s.hover,
                ]"
              >
                <i :class="['mdi', s.icon]" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
