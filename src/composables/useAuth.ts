import { useAuthStore } from "@/stores/authStore"
const authStore = useAuthStore()
const http = uni.$u.http

//
interface userInfo {
  name: string
  id: number
}

let userInfo = ref(<userInfo>{})
const loginFrom = reactive({
  username: "supadmin",
  password: "12345677e"
})
const Login = async () => {
  try {
    const config = {
      custom: { toast: true }
    }
    const data = await http.post("/mock/sys/login", loginFrom, config) // 参数 空配置
    authStore.SETTIKEN(data.token)
    userInfo.value = data
  } catch (error) {}
}
const getToken = async () => {
  try {
    const config = {
      params: {}, // 提交参数 params  url拼接
      custom: { auth: true, toast: true }
    }
    const data = await http.get("/users/testtoken", config)
  } catch (error) {
    console.log("🍲[error]:", error)
  }
}

export default () => {
  return { Login, userInfo, getToken }
}
