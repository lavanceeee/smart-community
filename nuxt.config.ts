// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 必须把模块都写进去
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode',
    '@element-plus/nuxt'
  ],

  elementPlus: {
    icon: 'el-icon', 
  },

  colorMode: {
    preference: 'system', 
    fallback: 'light',    
    classSuffix: '',      
    storageKey: 'nuxt-color-mode'
  },

  future: {
    compatibilityVersion: 4, // 既然你用 Nuxt 4 规范，建议开启这个
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})