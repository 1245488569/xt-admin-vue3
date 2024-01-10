import { Random } from 'mockjs'

import type { MockMethod } from 'vite-plugin-mock'

interface DataList {
  date: string
  name: string
  address: string
}

const dataList: DataList[] = [] // 用于接受生成数据的数组
for (let i = 0; i < 100; i++) {
  // 可自定义生成的个数
  const template = {
    date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
    name: Random.name(), // 生成姓名
    address: Random.province(), // 生成地址
  }
  dataList.push(template)
}

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
              name: 'List',
            },
            {
              name: 'UserIndex',
            },
            {
              name: 'UserDetail',
            },
            {
              name: 'Goods',
              meta: {
                title: '自定义',
                icon: 'ep:avatar',
              },
            },
            {
              name: 'GoodsIndex',
            },
            {
              name: 'GoodsDetail',
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

  {
    url: '/api/list',
    method: 'post',
    response: (params) => {
      const info = params.body
      const [index, size, total] = [
        info.current,
        info.pageSize,
        dataList.length,
      ]
      const len = total / size
      const totalPages
        = len - Number.parseInt(String(len)) > 0 ? Number.parseInt(String(len)) + 1 : len
      const newDataList = dataList.slice(index * size, (index + 1) * size)
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          current: index,
          pageSize: size,
          rows: newDataList,
          total,
          totalPages,
        },
      }
    },
  },
] as MockMethod[]
