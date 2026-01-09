// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 必须把模块都写进去
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    '@tresjs/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],

  pinia: {
    storesDirs: ['./stores/**'], // 自动导入 stores 文件夹下的 store
  },

  elementPlus: {
    icon: 'el-icon',
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://172.20.10.14:8080', // 默认值，会被 NUXT_PUBLIC_API_BASE 覆盖
      agentBase: 'http://localhost:8001' // 默认值，会被 NUXT_PUBLIC_AGENT_BASE 覆盖
    }
  },

  future: {
    compatibilityVersion: 4, // 既然你用 Nuxt 4 规范，建议开启这个
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})