<template>
    <div
        class="w-60 bg-white dark:bg-slate-900 rounded-xl p-3 flex flex-col justify-between shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
        <div v-for="cat in categories" :key="cat.name"
            class="flex items-center gap-3 px-3 py-1 cursor-pointer group overflow-hidden">
            <Icon :name="cat.icon" size="18" class="text-slate-400 group-hover:text-[#ff5000] shrink-0" />
            <span class="text-[13px] text-slate-600 dark:text-slate-300 group-hover:text-[#ff5000] truncate">
                {{ cat.name }}
            </span>
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
