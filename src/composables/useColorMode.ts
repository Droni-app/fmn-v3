import { ref, watch } from 'vue'

type ColorMode = 'light' | 'dark'

const mode = ref<ColorMode>(
  (localStorage.getItem('color-mode') as ColorMode) ?? 'light',
)

watch(mode, (value) => {
  localStorage.setItem('color-mode', value)
  document.documentElement.classList.toggle('dark', value === 'dark')
})

export function useColorMode() {
  return {
    get value(): ColorMode { return mode.value },
    get preference(): ColorMode { return mode.value },
    set preference(val: ColorMode) { mode.value = val },
  }
}
