<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoFmn from '@/assets/logo-FMN.webp'
import { contact, menu, type NavGroup, type NavItem, type NavLink } from '@/services/site'

const route = useRoute()
const isMenuOpen = ref(false)
const openGroup = ref<string | null>(null)
const scrolled = ref(false)

const isGroup = (item: NavItem): item is NavGroup => 'children' in item
const isActive = (link: string) =>
  link.includes('#') ? false : link === '/' ? route.path === '/' : route.path.startsWith(link)
const groupActive = (group: NavGroup) => group.children.some((c) => isActive(c.link))
const mobileGroups = menu.filter(isGroup)
const mobileLinks = menu.filter((i): i is NavLink => !isGroup(i))

const onScroll = () => (scrolled.value = window.scrollY > 16)
const onKey = (e: KeyboardEvent) => {
  if (e.key !== 'Escape') return
  openGroup.value = null
  isMenuOpen.value = false
}
const onClickOutside = (e: MouseEvent) => {
  if (!(e.target as HTMLElement).closest('[data-nav-group]')) openGroup.value = null
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKey)
  document.addEventListener('click', onClickOutside)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('click', onClickOutside)
})

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
    openGroup.value = null
  },
)
watch(isMenuOpen, (open) => document.documentElement.classList.toggle('no-scroll', open))
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/90 shadow-[0_8px_30px_-12px_rgb(54_40_104/0.25)] backdrop-blur-lg'
        : 'bg-cream',
    ]"
  >
    <div
      :class="[
        'container-page flex items-center justify-between gap-4 transition-all duration-300',
        scrolled ? 'h-16' : 'h-18 md:h-22',
      ]"
    >
      <RouterLink to="/" class="shrink-0" aria-label="Fundación Mariana Novoa – Inicio">
        <img
          :src="logoFmn"
          alt="Fundación Mariana Novoa"
          :class="['w-auto transition-all duration-300', scrolled ? 'h-10' : 'h-11 md:h-14']"
        />
      </RouterLink>

      <!-- Escritorio -->
      <nav class="hidden items-center gap-1 lg:flex" aria-label="Principal">
        <template v-for="item in menu" :key="item.name">
          <div
            v-if="isGroup(item)"
            data-nav-group
            class="relative"
            @mouseenter="openGroup = item.name"
            @mouseleave="openGroup = null"
          >
            <button
              type="button"
              :aria-expanded="openGroup === item.name"
              :class="[
                'flex items-center gap-0.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:px-4',
                groupActive(item) ? 'text-brand-600' : 'text-ink/80 hover:text-brand-600',
              ]"
              @click="openGroup = openGroup === item.name ? null : item.name"
            >
              {{ item.name }}
              <i
                :class="[
                  'mdi mdi-chevron-down text-lg transition-transform duration-300',
                  openGroup === item.name && 'rotate-180',
                ]"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              leave-active-class="transition duration-150 ease-in"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div v-show="openGroup === item.name" class="absolute top-full left-0 pt-2">
                <ul class="card w-64 p-2">
                  <li v-for="child in item.children" :key="child.link">
                    <RouterLink
                      :to="child.link"
                      :class="[
                        'flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition-colors',
                        isActive(child.link)
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-ink/80 hover:bg-plum-50 hover:text-plum-700',
                      ]"
                    >
                      <i
                        :class="[
                          'mdi grid size-8 place-items-center rounded-xl bg-white text-lg text-brand-500 shadow-sm',
                          child.icon,
                        ]"
                      />
                      {{ child.name }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>

          <RouterLink
            v-else
            :to="item.link"
            :class="[
              'relative rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:px-4',
              isActive(item.link) ? 'text-brand-600' : 'text-ink/80 hover:text-brand-600',
            ]"
          >
            {{ item.name }}
            <span
              :class="[
                'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-300',
                isActive(item.link) ? 'scale-x-100' : 'scale-x-0',
              ]"
            />
          </RouterLink>
        </template>

        <RouterLink to="/donar" class="btn btn-primary ml-3 py-2.5!">
          <i class="mdi mdi-heart" /> Donar
        </RouterLink>
      </nav>

      <!-- Móvil -->
      <div class="flex items-center gap-2 lg:hidden">
        <RouterLink to="/donar" class="btn btn-primary px-4! py-2! text-sm">
          <i class="mdi mdi-heart" /> Donar
        </RouterLink>
        <button
          type="button"
          class="grid size-11 place-items-center rounded-full text-plum-800 transition hover:bg-plum-50"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
          @click="isMenuOpen = true"
        >
          <i class="mdi mdi-menu text-3xl" />
        </button>
      </div>
    </div>
  </header>

  <!-- Panel móvil -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-[60] bg-plum-900/50 backdrop-blur-sm lg:hidden"
        @click="isMenuOpen = false"
      />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-to-class="translate-x-full"
    >
      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        aria-label="Menú móvil"
        class="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col overflow-y-auto bg-cream shadow-2xl lg:hidden"
      >
        <div class="flex items-center justify-between px-5 py-4">
          <img :src="logoFmn" alt="" class="h-10" />
          <button
            type="button"
            class="grid size-11 place-items-center rounded-full text-plum-800 hover:bg-plum-50"
            aria-label="Cerrar menú"
            @click="isMenuOpen = false"
          >
            <i class="mdi mdi-close text-3xl" />
          </button>
        </div>

        <div class="flex-1 space-y-6 px-5 pb-6">
          <div v-for="group in mobileGroups" :key="group.name">
            <p class="eyebrow mb-2 px-3 text-xs! text-plum-400!">{{ group.name }}</p>
            <RouterLink
              v-for="child in group.children"
              :key="child.link"
              :to="child.link"
              :class="[
                'flex items-center gap-3 rounded-2xl px-3 py-2.5 font-semibold',
                isActive(child.link) ? 'bg-brand-50 text-brand-600' : 'text-ink/80',
              ]"
            >
              <i :class="['mdi text-xl text-brand-500', child.icon]" />
              {{ child.name }}
            </RouterLink>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <RouterLink
              v-for="item in mobileLinks"
              :key="item.name"
              :to="item.link"
              :class="[
                'rounded-2xl px-4 py-3 text-center font-display font-semibold ring-1 transition',
                isActive(item.link)
                  ? 'bg-brand-500 text-white ring-brand-500'
                  : 'bg-white text-plum-800 ring-plum-100',
              ]"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>

        <div class="space-y-3 border-t border-plum-100 bg-white p-5">
          <RouterLink to="/donar" class="btn btn-primary w-full">
            <i class="mdi mdi-heart" /> Quiero donar
          </RouterLink>
          <a
            :href="contact.whatsapp"
            target="_blank"
            rel="noopener"
            class="btn btn-whatsapp w-full"
          >
            <i class="mdi mdi-whatsapp text-xl" /> Escríbenos
          </a>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>
