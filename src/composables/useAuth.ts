const http = uni.$u.http

//

let test = ref("")
const form = reactive({
  username: "supadmin",
  password: "12345677e"
})
const postMenu = async () => {
  try {
    const { token } = await http.post("/mock/sys/login", form, {}) // 参数 空配置
    test.value = token
  } catch (error) {
    // useCaptcha().getCaptcha()
  }
}

export default () => {
  return { postMenu, test }
}
