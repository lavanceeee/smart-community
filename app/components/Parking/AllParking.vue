<template>
    <div class="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
        <div v-if="loading" class="flex justify-center py-10">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff5000]"></div>
        </div>

        <div v-else>
            <!-- Zone Tabs -->
            <div class="flex flex-wrap gap-2 border-b border-slate-100 dark:border-slate-700 pb-4 mb-6">
                <button v-for="zone in sortedZones" :key="zone" @click="currentZone = zone"
                    class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    :class="currentZone === zone
                        ? 'bg-[#ff5000] text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'">
                    {{ zone }}区
                </button>
                <div v-if="sortedZones.length === 0" class="text-sm text-slate-400 py-2">
                    暂无车位区域数据
                </div>
            </div>

            <!-- Grid Display -->
            <div v-if="currentZone" class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                <div v-for="i in 20" :key="i"
                    class="aspect-square relative rounded-lg border-2 transition-all p-3 flex flex-col justify-between"
                    :class="getSpotStatusClass(i)">
                    <!-- Spot Number -->
                    <div class="text-xs font-bold opacity-50">
                        {{ getSpotLabel(i) }}
                    </div>

                    <!-- Occupied Info -->
                    <div v-if="getSpotData(i)" class="flex flex-col items-center justify-center flex-1 gap-1">
                        <Icon name="lucide:car-front" size="24" class="opacity-90" />
                        <div class="text-xs font-medium truncate w-full text-center">
                            {{ getSpotData(i).carNumber }}
                        </div>
                        <div class="text-[10px] opacity-75 truncate w-full text-center">
                            {{ getSpotData(i).userName }}
                        </div>
                    </div>

                    <!-- Empty State -->
                    <div v-else class="flex items-center justify-center flex-1 opacity-20">
                        <span class="text-xs">空闲</span>
                    </div>
                </div>
            </div>

            <div v-else-if="sortedZones.length > 0" class="text-center py-10 text-slate-400 text-sm">
                请选择区域查看车位
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { fetchAllParking, isFetching: loading, groupedZones } = useParking()

const currentZone = ref('')

// Initialize
onMounted(async () => {
    await fetchAllParking()
    if (sortedZones.value.length > 0) {
        currentZone.value = sortedZones.value[0] || ''
    }
})

const sortedZones = computed(() => {
    return Object.keys(groupedZones.value).sort()
})

const getSpotData = (index: number) => {
    if (!currentZone.value || !groupedZones.value || !groupedZones.value[currentZone.value]) return null
    return groupedZones.value[currentZone.value].spots[index]
}

const getSpotLabel = (index: number) => {
    if (!currentZone.value || !groupedZones.value || !groupedZones.value[currentZone.value]) return ''
    const base = groupedZones.value[currentZone.value].base
    // Pad to 3 digits e.g. 1 -> 001, 101 -> 101
    const num = base + index
    return `${currentZone.value}-${String(num).padStart(3, '0')}`
}

const getSpotStatusClass = (index: number) => {
    const data = getSpotData(index)
    if (data) {
        // Occupied style
        return 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400'
    } else {
        // Empty style
        return 'border-dashed border-slate-200 bg-slate-50/50 text-slate-400 dark:border-slate-700 dark:bg-slate-800/50'
    }
}
</script>
