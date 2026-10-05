import type { Directive } from 'vue'

/**
 * `v-reveal` anima un elemento al entrar en pantalla.
 * Uso: `v-reveal`, `v-reveal="150"` (retraso en ms) o `v-reveal:left` / `:right` / `:zoom`.
 */
let observer: IntersectionObserver | null = null

const getObserver = () =>
  (observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  ))

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, { value, arg }) {
    el.dataset.reveal = arg ?? ''
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof vReveal
  }
}
