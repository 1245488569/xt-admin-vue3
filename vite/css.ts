import * as fs from 'fs'

// 全局 scss 资源
const scssResources: string[] = []
fs.readdirSync('src/assets/styles/globals').map(dirname => {
  if (fs.statSync(`src/assets/styles/globals/${dirname}`).isFile()) {
    scssResources.push(`@use "src/assets/styles/globals/${dirname}" as *;`)
  }
})

export default {
  preprocessorOptions: {
    scss: {
      // 本意是解决打包时出现这个"@charset" must be the first rule in the file 警告问题  但没效果 后续处理
      charset: false,
      additionalData: scssResources.join('')
    }
  }
}
