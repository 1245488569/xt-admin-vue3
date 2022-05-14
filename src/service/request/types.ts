// 参数类型文件
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// interface接口 Interceptors拦截器 目的是：不同的axios实例可以传传AxiosRequestConfig之外的参数，和不同的拦截器
export interface XTRequestInterceptors<T = AxiosResponse> {
  // eslint-disable-next-line no-unused-vars
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // eslint-disable-next-line no-unused-vars
  requestInterceptorCatch?: (error: any) => any
  // eslint-disable-next-line no-unused-vars
  responseInterceptor?: (res: T) => T
  // eslint-disable-next-line no-unused-vars
  responseInterceptorCatch?: (error: any) => any
}

export interface XTRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XTRequestInterceptors<T>
}
