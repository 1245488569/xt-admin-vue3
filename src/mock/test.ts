import { Random } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          name: '小天',
          age: 18,
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
