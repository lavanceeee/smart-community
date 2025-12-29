```
my-nuxt-project/
├── .output/                # 构建输出目录 (不要动)
├── .nuxt/                  # Nuxt 自动生成的临时文件 (不要动)
├── app/                    # [核心] 前端 Vue 应用的所有代码
│   ├── assets/             # 静态资源 (scss, images, fonts)
│   ├── components/         # Vue 组件
│   ├── composables/        # 自动导入的组合式函数 (hooks)
│   ├── layouts/            # 布局文件
│   ├── middleware/         # 路由中间件
│   ├── pages/              # 页面路由
│   ├── plugins/            # 客户端/服务端插件
│   ├── utils/              # 辅助工具函数
│   ├── app.vue             # 应用入口组件 (以前在根目录)
│   └── router.options.ts   # 路由配置 (以前在根目录)
├── layers/                 # [进阶] Nuxt Layers (类似微前端/模块化)
├── modules/                # 本地开发的 Nuxt 模块
├── public/                 # 纯静态文件 (favicon.ico, robots.txt)
├── server/                 # [后端] Nitro 服务器代码
│   ├── api/                # API 接口
│   ├── middleware/         # 服务器中间件
│   └── routes/             # 非 API 的服务端路由
├── nuxt.config.ts          # 配置文件
├── package.json
└── tsconfig.json
```