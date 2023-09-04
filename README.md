# Vue3 + Typescript + Vite + pinia + element plus + unocss

# 如果大家觉得有用，请帮忙点下star，十分感谢

# 说明：master分支为最新版本（正在更新），oldMaster为旧版本，旧版本不再维护


## 特点
1. Vue3
2. Vite4
3. Typescript5
4. pinia
5. element plus
6. Unocss
7. pnpm 包管理器
8. 权限菜单支持（前端与后端模式都支持，极大程度简化开发工作）
9. 4种布局模式随意切换
10. 布局高度 宽度随意切换
11. Api 自动引入
12. Mock 支持
13. PWA 支持
14. i18n 国际化支持
15. 图标自动引入（iconify万种图标自动且按需引入）
16. 组件自动引入（components目录下组件自动且按需引入）
17. 菜单搜索
18. 全屏
19. 页面刷新
20. 动态换肤
21. VueUse 支持
22. gzip brotli资源压缩支持
23. 环境变量配置支持
24. 统一的代码规范与风格支持
25. 漂亮的 login 404 页 支持
26. 配置选择支持
27. svg-icon支持
28. 多级缓存
29. 历史菜单
30. 面包屑导航
31. 其余的（请查看app.ts 或者 .env文件 或者assets/styles/globals/layout.scss）

## `node` 版本推荐
最低16

## 使用（请一定使用pnpm）

1. git初始化
```shell
git init
```

2. 安装依赖
```shell
pnpm install
```

3. 开发
```shell
pnpm dev
```

4. 打包

```shell
pnpm build
# 测试环境
pnpm build:test
```

5. 代码规范校验

```shell
pnpm lint
# 校验时修复
pnpm lint:eslint
pnpm lint:stylelint
```
