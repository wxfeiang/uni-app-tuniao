import { request } from '@/utils/http';
import { useRequest } from 'alova';
const LOGIN = '/employee/login';
const LOGIN_OUT = '/logout';
const REFRESH_TOKEN = '/refresh/token';
const TEST_TOKEN = '/employee/test';
/**
 * 登录
 * @param params
 */
export function login(params: LoginParams) {
  return request.Post(LOGIN, params);
}
export function login2(params: LoginParams, config: any) {
  return useRequest(request.Post(LOGIN, params), { ...config });
}
/**
 * 测试token
 * @param params
 */
export function testToken() {
  return request.Get(TEST_TOKEN);
}

/**
 * 登出
 */
export function logout() {
  return request.Post(LOGIN_OUT, {});
}

/**
 * 刷新token
 */
export function refreshToken() {
  return request.Post<LoginModel>(REFRESH_TOKEN, {});
}
