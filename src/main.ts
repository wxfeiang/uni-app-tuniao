import * as Pinia from "pinia"
import uviewPlus from "uview-plus"
import { createSSRApp } from "vue"

// #ifdef VUE3
import App from "./App.vue"
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(uviewPlus)
  return {
    app,
    Pinia
  }
}
// #endif
