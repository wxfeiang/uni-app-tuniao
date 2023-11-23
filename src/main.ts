import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist-uni';
// import uviewPlus from "uview-plus"
import { createSSRApp } from 'vue';
import { setupRouter } from './router';
// #ifdef VUE3
import 'uno.css';
import App from './App.vue';
// import { initRequest } from "./utils/request"
export function createApp() {
  const app = createSSRApp(App);

  const pinia = createPinia();
  app.use(pinia.use(piniaPersist));
  setupRouter(app);
  // app.use(uviewPlus)
  // 引入请求封装
  // initRequest()
  return {
    app,
  };
}
// #endif
