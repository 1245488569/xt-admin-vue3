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

  {
    url: '/api/user/permission',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          permissions: ['user.read', 'user.detail', 'user.add', 'user.edit'],
        },
      }
    },
  },

  {
    url: '/api/user/backend',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          // 数据是不带children的这种
          backendRoutes: [
            {
              name: 'demo1',
            },
            {
              name: 'demo1-1',
            },
            {
              name: 'demo1-2',
              meta: {
                title: 'demo1-222222',
                icon: 'ep:avatar',
              },
            },
          ],
          // 按钮权限等 如果不需要 设为[]  permissions:[] 不要为其他值
          permissions: ['demo1-2.add'],
        },
      }
    },
  },
] as MockMethod[]
