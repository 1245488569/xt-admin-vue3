import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/test',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          test: '嘿嘿'
        },
      }
    },
  },
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
          token: Random.string(10)
        },
      }
    },
  },
  // 前端路由模拟
  {
    url: '/api/user/permission',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          // 所有权限  路由和按钮等
          permissions: [
            'test',
            'test.detail'
          ]
        },
      }
    },
  },
  // 后端路由模拟(使用后端路由时，系统只会测试固定路由及后端返回的路由，也就意味着meta中的auth将不在有效)
  {
    url: '/api/user/backend',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          backendRoutes: [
            {
              name: 'backend',
            },
            {
              name: 'backend1',
              meta: {
                title: 'backend123',
                icon: 'ep:avatar'
              }
            },
            {
              name: 'backend2',
            },
          ],
          // 按钮权限等 如果不需要 设为[]  permissions:[] 不要为其他值
          permissions: [
            'backend.add'
          ]
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
  }
] as MockMethod[]
