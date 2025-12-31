import * as echarts from 'echarts'

export default defineNuxtPlugin(() => {
  // 通过 provide 将 echarts 注入到全局
  // 在组件中可以通过 useNuxtApp().$echarts 访问
  return {
    provide: {
      echarts
    }
  }
})