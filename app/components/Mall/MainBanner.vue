<template>
  <div class="max-w-[1200px] mx-auto px-4 py-2 flex gap-2 h-[320px] select-none text-slate-900">
    
    <div class="w-48 bg-white dark:bg-slate-900 rounded-xl p-2 flex flex-col justify-between shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
      <div v-for="cat in categories" :key="cat.name" 
           class="flex items-center gap-2 px-2 py-0.5 cursor-pointer group overflow-hidden">
        <Icon :name="cat.icon" size="14" class="text-slate-400 group-hover:text-[#ff5000] shrink-0" />
        <span class="text-[11px] text-slate-600 dark:text-slate-300 group-hover:text-[#ff5000] truncate">
          {{ cat.name }}
        </span>
      </div>
    </div>

    <div class="flex-1 flex flex-col gap-2 min-w-0">
      <div class="relative flex-1 bg-gradient-to-r from-[#FF3100] to-[#FF6A00] rounded-xl overflow-hidden group">
        <div class="absolute inset-0 p-5 flex flex-col justify-center text-white z-10">
          <span class="bg-black/10 self-start px-1.5 py-0.5 rounded text-[10px] mb-1">超级立减</span>
          <h2 class="text-xl font-black leading-tight mb-1">新年焕新<br/>不只5折</h2>
          <p class="text-[10px] opacity-90 mb-3">叠加惊喜消费券</p>
          
          <div class="flex gap-1">
            <div v-for="i in 3" :key="i" :class="i === 1 ? 'w-3 bg-white' : 'w-1 bg-white/40'" class="h-1 rounded-full"></div>
          </div>
        </div>
        <div class="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32">
           <img src="/mallIcon/guobu.png" class="w-full h-full object-contain drop-shadow-xl rotate-6" />
        </div>
      </div>

      <div class="h-32 flex gap-2">
        <div v-for="item in [{t:'领券中心', i:'tianmao.png', p:'2820'}, {t:'采购优选', i:'zhibo.png', p:'16299'}]" 
             :key="item.t"
             class="flex-1 bg-white dark:bg-slate-900 rounded-xl p-2.5 flex flex-col items-center justify-between border border-slate-50 dark:border-slate-800">
          <div class="font-bold text-[10px] self-start">{{ item.t }}</div>
          <img :src="`/mallIcon/${item.i}`" class="h-14 object-contain" />
          <div class="bg-[#ff5000] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">¥ {{ item.p }}</div>
        </div>
      </div>
    </div>

    <div class="w-60 flex flex-col gap-2 shrink-0">
      <div class="bg-white dark:bg-slate-900 rounded-xl p-3 flex-1 shadow-sm border border-slate-50 dark:border-slate-800 flex flex-col">
        <div class="flex justify-between items-center mb-2">
          <span class="font-bold text-xs">百亿补贴</span>
          <span class="bg-red-500 text-[8px] text-white px-1 rounded">新人</span>
        </div>
        <div class="grid grid-cols-2 gap-2 flex-1">
          <div v-for="img in ['qiyegou.png', 'sifa.png']" :key="img" class="flex flex-col items-center">
            <div class="w-full aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg p-1.5 mb-1 flex items-center justify-center">
              <img :src="`/mallIcon/${img}`" class="h-full object-contain" />
            </div>
            <div class="text-[#ff5000] text-[9px] font-bold">¥ 7999</div>
          </div>
        </div>
      </div>

      <div class="h-32 flex gap-2">
        <div v-for="item in [{t:'国家补贴', i:'guobu.png', p:'21980'}, {t:'秒杀', i:'tianmaogou.png', p:'1999'}]" 
             :key="item.t"
             class="flex-1 bg-white dark:bg-slate-900 rounded-xl p-2 flex flex-col items-center justify-between text-center border border-slate-50 dark:border-slate-800">
          <span class="text-[10px] font-bold">{{ item.t }}</span>
          <img :src="`/mallIcon/${item.i}`" class="h-10 mx-auto object-contain" />
          <div class="text-[#ff5000] text-[9px] font-bold italic">¥ {{ item.p }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  { name: '消费券折上折 / 抢省钱补贴', icon: 'lucide:ticket-percent' },
  { name: '电脑 / 配件 / 办公 / 文具', icon: 'lucide:laptop' },
  { name: '工业品 / 商业 / 农业 / 定制', icon: 'lucide:factory' },
  { name: '家电 / 手机 / 通信 / 数码', icon: 'lucide:smartphone' },
  { name: '家具 / 家装 / 家居 / 厨具', icon: 'lucide:armchair' },
  { name: '女装 / 男装 / 内衣 / 配饰', icon: 'lucide:shirt' },
  { name: '女鞋 / 男鞋 / 运动 / 户外', icon: 'lucide:bike' },
  { name: '汽车 / 珠宝 / 文玩 / 箱包', icon: 'lucide:car' },
  { name: '食品 / 生鲜 / 酒类 / 健康', icon: 'lucide:apple' },
  { name: '母婴 / 童装 / 玩具 / 宠物', icon: 'lucide:baby' }
]
</script>