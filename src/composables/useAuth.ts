const http = uni.$u.http

// post请求，获取菜单
// const postMenu = (params: { username: string; password: string }, config = {}) =>
//   http.post("/mock/sys/login", params, config)

const postMenu = async (params: { username: string; password: string }, config = {}) => {
  try {
    const { token } = await http.post("/mock/sys/login", params, config)
  } catch (error) {
    // useCaptcha().getCaptcha()
  }
}

export default () => {
  return { postMenu }
}
