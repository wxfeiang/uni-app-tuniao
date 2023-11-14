import { request } from '@/utils/http';

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
