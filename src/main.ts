import * as Pinia from "pinia"
import uviewPlus from "uview-plus"
import { createSSRApp } from "vue"

// #ifdef VUE3
import App from "./App.vue"
import { initRequest } from "./utils/request"
export function createApp() {
  const app = createSSRApp(App)
  // 引入请求封装
  app.use(Pinia.createPinia())
  app.use(uviewPlus)
  initRequest(app)

  return {
    app,
    Pinia
  }
}
// #endif
