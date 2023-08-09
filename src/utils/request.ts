import { config } from "@/config"
import { useAuthStore } from "@/stores/authStore"

const requestInterceptors = () => {
  const authStore = useAuthStore() //FIX: 一定要在内部使用
  /**
   * 请求拦截
   * @param {Object} http
   */
  uni.$u.http.interceptors.request.use(
    (config: any) => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}
      // 演示custom 用处
      if (config.custom.auth) {
        config.header.Authorization = authStore.token
      }
      if (config.custom.loading) {
        // 默认所有的请求都没有
        uni.showLoading({
          title: "加载中"
        })
      }
      // 演示
      // if (config.custom.auth && !authStore.token) {
      //   // 如果token不存在，return Promise.reject(config) 会取消本次请求
      //   return Promise.reject(config)
      // }
      return config
    },
    (
      config: any // 可使用async await 做异步操作
    ) => Promise.reject(config)
  )
}
const responseInterceptors = () => {
  /**
   * 响应拦截
   * @param {Object} http
   */
  uni.$u.http.interceptors.response.use(
    (response: any) => {
      if (config.custom.loading) {
        uni.hideLoading()
      }
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      const data = response.data
      // 自定义参数
      const custom = response.config?.custom
      if (data.code !== 200) {
        if (custom.toast !== false) {
          uni.$u.toast(data.message)
        }
        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          return Promise.reject(data)
        } else {
          // 否则返回一个pending中的promise
          return new Promise(() => {})
        }
      }
      if (custom.toast) {
        uni.$u.toast(data.message)
      }
      return data.data || {}
    },
    (response: any) => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      return Promise.reject(response)
    }
  )
}

//  初始化请求配置
const initRequest = () => {
  uni.$u.http.setConfig((defaultConfig: any) => {
    // #ifdef H5
    defaultConfig.baseURL = config.baseURL /* 根域名 */
    // #endif
    // #ifndef H5
    defaultConfig.baseURL = import.meta.env.VITE_BASE_URL + config.baseURL /* 根域名 */
    // #endif
    return defaultConfig
  })
  requestInterceptors()
  responseInterceptors()
}
export { initRequest }
