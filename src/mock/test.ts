import { Random } from 'mockjs'

import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }: any) => {
      console.log('--------------', body)

      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          name: body.account,
          age: 18,
          token: `${body.account}_${Random.string(10)}`,
        },
      }
    },
  },

  {
    url: '/api/user/permission',
    method: 'get',
    response: ({ headers }: any) => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          permissions: headers.token && headers.token.includes('test') ? ['user.edit'] : ['user.read', 'user.detail', 'user.add', 'user.edit'],
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

  {
    url: '/api/logout',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {},
      }
    },
  },
] as MockMethod[]
