import { http } from '@/utils/request';

export const login = (data?: object) => {
  return http.request<ApiData<any>>({
    url: '/employee/login',
    method: 'POST',
    data,
  });
};

export const testToken = (params?: object) => {
  return http.request<ApiData<any>>({
    url: '/employee/test',
    method: 'GET',
    params,
  });
};
