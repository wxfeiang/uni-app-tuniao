import { getBaseUrl } from '@/utils/env';
import AdapterUniapp from '@alova/adapter-uniapp';
import { createAlova } from 'alova';

import { ContentTypeEnum, ResultEnum } from '@/enums/httpEnum';
import { API } from '@/services/model/baseModel';
import { useAuthStore } from '@/store/authStore';
import { checkStatus } from '@/utils/http/checkStatus';
import { Toast } from '@/utils/uniapi/prompt';
import { assign } from 'lodash-es';

const BASE_URL = getBaseUrl();

const HEADER = {
  'Content-Type': ContentTypeEnum.JSON,
  Accept: 'application/json, text/plain, */*',
};

/**
 * alova 请求实例
 * @link
 */
const alovaInstance = createAlova({
  baseURL: BASE_URL,
  ...AdapterUniapp({
    // /* #ifndef APP-PLUS */
    // mockRequest: isUseMock() ? mockAdapter : undefined, // APP 平台无法使用mock
    // /* #endif */
  }),
  timeout: 5000,
  beforeRequest: (method) => {
    console.log('🥤[method]:', method);
    const authStore = useAuthStore();
    //默认不是用全局加载状态。。。
    // Loading('加载中...');
    method.config.headers = assign(
      method.config.headers,
      HEADER,
      authStore.getAuthorization(),
    );
  },
  responsed: {
    /**
     * 请求成功的拦截器
     * 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
     * @param response
     * @param method
     */
    onSuccess: async (response, method) => {
      const { config } = method;
      const { enableDownload, enableUpload } = config;
      // @ts-ignore
      const { statusCode, data: rawData } = response;

      const { code, message, data } = rawData as API;

      if (code === 200) {
        if (enableDownload) {
          // 下载处理
          return rawData;
        }
        if (enableUpload) {
          // 上传处理
          return rawData;
        }
        if (message === ResultEnum.TYPE) {
          return data as any;
        }
        message && Toast(message);
        return Promise.reject(rawData);
      }
      checkStatus(statusCode, message || '');
      return Promise.reject(rawData);
    },

    /**
     * 请求失败的拦截器，请求错误时将会进入该拦截器。
     * 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
     * @param err
     * @param method
     */
    onError: (err, method) => {
      // error('Request Error!');

      return Promise.reject({ err, method });
    },
  },
});

export const request = alovaInstance;
