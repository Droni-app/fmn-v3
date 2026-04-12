# fmn-v3

Sitio SPA hecho con Vue 3 + Vite.

## Despliegue en GitHub Pages

El repositorio ya queda listo para desplegarse con GitHub Actions usando el workflow [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

### Como funciona

- El workflow se ejecuta al hacer push a `main` o manualmente desde la pestana `Actions`.
- Detecta automaticamente si el repositorio es un sitio de usuario (`usuario.github.io`) o un repositorio de proyecto (`/nombre-del-repo/`).
- Define `BASE_PATH` para que Vite genere correctamente las rutas estaticas en GitHub Pages.
- Mantiene rutas limpias en la SPA y agrega un fallback en [public/404.html](public/404.html) para accesos directos o recargas en rutas internas.

### Pasos en GitHub

1. Sube el proyecto a GitHub.
2. En el repositorio, entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Source: GitHub Actions`.
4. Haz push a la rama `main`.
5. Espera a que termine el workflow `Deploy to GitHub Pages`.
6. GitHub publicara la URL del sitio en la seccion de `Pages` y en la salida del job de deploy.

### Build local con la misma base de Pages

Si quieres probar localmente el mismo prefijo que usa GitHub Pages para un repositorio de proyecto:

```sh
BASE_PATH=/fmn-v3/ npm run build
```

Para un sitio de usuario u organizacion:

```sh
BASE_PATH=/ npm run build
```

### Si usas dominio personalizado

- Crea el archivo `public/CNAME` con tu dominio.
- Configura el dominio tambien en `Settings > Pages`.
- Si el sitio deja de vivir bajo `/<repo>/` y pasa a la raiz del dominio, el workflow seguira funcionando porque en GitHub Pages el sitio se sirve desde `/`.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
