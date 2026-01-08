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



Tailwind 类名	对应的 CSS 样式	适用场景
rounded-none	border-radius: 0px	取消圆角（直角）
rounded-sm	border-radius: 0.125rem (2px)	极小圆角（精细控件）
rounded	border-radius: 0.25rem (4px)	默认圆角（按钮、卡片基础款）
rounded-md	border-radius: 0.375rem (6px)	中等圆角（表单、弹窗）
rounded-lg	border-radius: 0.5rem (8px)	大圆角（卡片、面板）
rounded-xl	border-radius: 0.75rem (12px)	超大圆角（头像、卡片）
rounded-2xl	border-radius: 1rem (16px)	特大圆角（突出展示的模块）
rounded-3xl	border-radius: 1.5rem (24px)	极特大圆角（特殊设计元素）
rounded-full	border-radius: 9999px	圆形（头像、圆形按钮）