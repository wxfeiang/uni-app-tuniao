// 引入配置
import { config } from "@/config/index"

const requestInterceptors = (vm: any) => {
  console.log("🍸[vm]:", vm)
  /**
   * 请求拦截
   * @param {Object} http
   */
  uni.$u.http.interceptors.request.use(
    (config: any) => {
      // 可使用async await 做异步操作
      debugger
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}
      // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      // console.log(vm.$store.state);
      return config
    },
    (config: any) => Promise.reject(config)
  )
}
const responseInterceptors = (vm: any) => {
  /**
   * 响应拦截
   * @param {Object} http
   */
  uni.$u.http.interceptors.response.use(
    (response: any) => {
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      const data = response.data
      // 自定义参数
      const custom = response.config?.custom
      if (data.code !== 200) {
        // 服务端返回的状态码不等于200，则reject()
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
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
      return data.data || {}
    },
    (response: any) => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      return Promise.reject(response)
    }
  )
}

//  初始化请求配置
const initRequest = (vm: any) => {
  uni.$u.http.setConfig((defaultConfig: any) => {
    /* defaultConfig 为默认全局配置 */
    defaultConfig.baseURL = config.baseURL /* 根域名 */
    return defaultConfig
  })
  requestInterceptors(vm)
  responseInterceptors(vm)
}
export { initRequest }
