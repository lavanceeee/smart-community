<template>
  <div class="max-w-[1200px] mx-auto px-4 py-3 flex gap-3 h-[450px] select-none text-slate-900">
    
    <div class="w-60 bg-white dark:bg-slate-900 rounded-xl p-3 flex flex-col justify-between shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
      <div v-for="cat in categories" :key="cat.name" 
           class="flex items-center gap-3 px-3 py-1 cursor-pointer group overflow-hidden">
        <Icon :name="cat.icon" size="18" class="text-slate-400 group-hover:text-[#ff5000] shrink-0" />
        <span class="text-[13px] text-slate-600 dark:text-slate-300 group-hover:text-[#ff5000] truncate">
          {{ cat.name }}
        </span>
      </div>
    </div>

    <div class="flex-1 flex flex-col gap-3 min-w-0">
      <div class="relative flex-1 bg-gradient-to-r from-[#FF3100] to-[#FF6A00] rounded-xl overflow-hidden group">
        <div class="absolute inset-0 p-8 flex flex-col justify-center text-white z-10">
          <span class="bg-black/10 self-start px-2 py-0.5 rounded text-[11px] mb-2">超级立减</span>
          <h2 class="text-3xl font-black leading-tight mb-2">新年焕新<br/>不只5折</h2>
          <p class="text-xs opacity-90 mb-6">叠加惊喜消费券</p>
          
          <div class="flex gap-1.5">
            <div v-for="i in 3" :key="i" :class="i === 1 ? 'w-5 bg-white' : 'w-1.5 bg-white/40'" class="h-1.5 rounded-full"></div>
          </div>
        </div>
        <div class="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-48">
           <img src="/mallIcon/guobu.png" class="w-full h-full object-contain drop-shadow-2xl rotate-6" />
        </div>
      </div>

      <div class="h-40 flex gap-3">
        <div v-for="item in [{t:'领券中心', i:'tianmao.png', p:'2820'}, {t:'采购优选', i:'zhibo.png', p:'16299'}]" 
             :key="item.t"
             class="flex-1 bg-white dark:bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-between border border-slate-50 dark:border-slate-800">
          <div class="font-bold text-xs self-start">{{ item.t }}</div>
          <img :src="`/mallIcon/${item.i}`" class="h-20 object-contain" />
          <div class="bg-[#ff5000] text-white text-[10px] px-3 py-1 rounded-full font-bold">¥ {{ item.p }}</div>
        </div>
      </div>
    </div>

    <div class="w-72 flex flex-col gap-3 shrink-0">
      <div class="bg-white dark:bg-slate-900 rounded-xl p-4 flex-1 shadow-sm border border-slate-50 dark:border-slate-800 flex flex-col">
        <div class="flex justify-between items-center mb-3">
          <span class="font-bold text-sm">百亿补贴</span>
          <span class="bg-red-500 text-[10px] text-white px-1.5 rounded">新人</span>
        </div>
        <div class="grid grid-cols-2 gap-3 flex-1">
          <div v-for="img in ['qiyegou.png', 'sifa.png']" :key="img" class="flex flex-col items-center">
            <div class="w-full aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg p-2 mb-2 flex items-center justify-center">
              <img :src="`/mallIcon/${img}`" class="h-full object-contain" />
            </div>
            <div class="text-[#ff5000] text-xs font-bold">¥ 7999</div>
          </div>
        </div>
      </div>

      <div class="h-40 flex gap-3">
        <div v-for="item in [{t:'国家补贴', i:'guobu.png', p:'21980'}, {t:'秒杀', i:'tianmaogou.png', p:'1999'}]" 
             :key="item.t"
             class="flex-1 bg-white dark:bg-slate-900 rounded-xl p-3 flex flex-col items-center justify-between text-center border border-slate-50 dark:border-slate-800">
          <span class="text-xs font-bold">{{ item.t }}</span>
          <img :src="`/mallIcon/${item.i}`" class="h-14 mx-auto object-contain" />
          <div class="text-[#ff5000] text-xs font-bold italic">¥ {{ item.p }}</div>
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