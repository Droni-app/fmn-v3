import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const restoreGithubPagesRoute = () => {
  const currentUrl = new URL(window.location.href)
  const routePath = currentUrl.searchParams.get('p')

  if (!routePath) {
    return
  }

  const routeQuery = currentUrl.searchParams.get('q')
  const normalizedRoutePath = routePath.startsWith('/') ? routePath : `/${routePath}`
  const restoredUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${normalizedRoutePath}${routeQuery ? `?${routeQuery}` : ''}${currentUrl.hash}`

  window.history.replaceState(null, '', restoredUrl)
}

restoreGithubPagesRoute()

createApp(App).use(router).mount('#app')
