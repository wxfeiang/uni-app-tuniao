const http = uni.$u.http

// post请求，获取菜单
export const postMenu = (params: { username: string; password: string }, config = {}) =>
  http.post("/mock/sys/login", params, config)
