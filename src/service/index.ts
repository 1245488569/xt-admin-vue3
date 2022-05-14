import { useUserStore } from '@/store/user'
import XTRequestClass from './request'

const xtRequest = new XTRequestClass({
  baseURL:  import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true' ? '/proxy/' : import.meta.env.VITE_APP_API_BASEURL,
  timeout: 10000,
  responseType: 'json',
  // 拦截器(interceptors可以不传 里面的参数也可以不传) 当有多个axios实例时 拦截有不同时 就可以在单独配置一下，不然的话可以不传 直接默认使用全局的拦截器就行
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token（一般情况写在全局就行，这里主要是演示）当然如果有两个axios实例且需要两个不同的token，肯定就需要写在不同的实例里了
      const token = useUserStore().getToken
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default xtRequest
