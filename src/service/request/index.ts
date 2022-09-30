import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { XTRequestInterceptors, XTRequestConfig } from './types'

/**
 * 请求封装
 * 1.可以传入多个axios实例
 * 2.可以对每个axios实例传入不同的拦截器（可不传）
 * 3.可以对每个请求传入不同的拦截器（可不传）
 */
class XTRequestClass {
  instance: AxiosInstance
  // 拦截器
  interceptors?: XTRequestInterceptors

  constructor(config: XTRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例都有的请求拦截器（如果对应实例也传入了拦截器则 都会 执行）
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return err
      }
    )

    // 所有实例都有的响应拦截器（如果对应实例也传入了拦截器则 都会 执行）
    this.instance.interceptors.response.use(
      res => {
        const data = res.data
        if (data.type === 'error') {
          console.log('请求失败-，错误信息...')
        } else {
          return data
        }
      },
      err => {
        console.log('所有实例响应失败拦截')
        console.log(err)
        // if (err.response.status === 404) {
        //   console.log('404错误，错误信息...')
        // }
        return err
      }
    )
  }

  request<T = any>(config: XTRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 判断单个请求有没传拦截器 目的：让不同的请求，也可以传入不同的拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch(err => {
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default XTRequestClass
