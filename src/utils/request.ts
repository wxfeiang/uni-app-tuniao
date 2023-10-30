import { useAuthStore } from '@/stores/authStore';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';

const authStore = useAuthStore(); //FIX: 一
interface IOptions {
  loading?: boolean;
  message?: boolean;
  clearValidateError?: boolean;
}
// const storage = useStorage();
export default class Axios {
  private instance;
  private loading: any;
  private options: IOptions = {
    loading: true,
    message: true,
    clearValidateError: true,
  };
  static request: any;
  constructor(config: AxiosRequestConfig | any) {
    this.instance = axios.create(config);

    this.interceptors();
  }

  public async request<T>(config: AxiosRequestConfig, options?: IOptions) {
    this.options = Object.assign(this.options, options ?? {});
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<T>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<T>;
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!this.loading && this.options.loading) {
          uni.showLoading({
            title: '加载中',
          });
        }
        // if (this.options.clearValidateError) useErrorStore().resetError();
        config.headers.Accept = 'application/json';
        config.headers.Authorization = 'Bearer ' + authStore.token;

        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response: any) => {
        if (this.loading) {
          uni.hideLoading();
          this.loading = undefined;
        }
        const message = response.data?.message ?? response.data?.success;
        if (message && this.options.message) {
          uni.showToast({
            title: message,
            icon: 'none',
          });
        }

        this.options = {
          loading: true,
          message: true,
          clearValidateError: true,
        };
        return response;
      },
      (error: any) => {
        if (this.loading) {
          uni.hideLoading();
          this.loading = undefined;
        }
        this.options = {
          loading: true,
          message: true,
          clearValidateError: true,
        };
        const {
          response: { status, data, statusText },
        } = error;
        const message = data.error ?? data.message;
        uni.showToast({
          title: message,
          duration: 2000,
        });
        // switch (status) {
        //   case HttpCodeEnum.UNAUTHORIZED:
        //     storage.remove(CacheEnum.TOKEN_NAME);
        //     router.push({ name: RouteEnum.LOGIN });
        //     break;
        //   case HttpCodeEnum.UNPROCESSABLE_ENTITY:
        //     useErrorStore().setErrors(
        //       error.response.data.errors ?? error.response.data,
        //     );
        //     break;
        //   case HttpCodeEnum.FORBIDDEN:
        //     ElMessage({ type: 'error', message: message ?? '没有操作权限' });
        //     break;
        //   case HttpCodeEnum.NOT_FOUND:
        //     ElMessage.error('请求资源不存在');
        //     router.push({ name: RouteEnum.HOME });
        //     break;
        //   case HttpCodeEnum.TOO_MANY_REQUESTS:
        //     ElMessage({ type: 'error', message: '请求过于频繁，请稍候再试' });
        //     break;
        //   case HttpCodeEnum.INTERNAL_SERVER_ERROR:
        //     ElMessage({ type: 'error', message: statusText });
        //     break;

        //   default:
        //     if (message) {
        //       ElMessage({ type: 'error', message: message ?? '服务器错误' });
        //     }
        // }
        return Promise.reject(error);
      },
    );
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
}

const http = new Axios({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: import.meta.env.VITE_BASE_TIMEOUT,
  adapter: mpAdapter,
});

const setup = () => {};
export { http, setup };
