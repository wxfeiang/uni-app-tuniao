const http = uni.$u.http
let a = ref("")
const postMenu = async (params: { username: string; password: string }, config = {}) => {
  try {
    const { token } = await http.post("/mock/sys/login", params, config)
    a.value = token
  } catch (error) {
    // useCaptcha().getCaptcha()
  }
}

export default () => {
  return { postMenu, a }
}
