
export const useParking = () => {
    const parkingList = ref<any[]>([])
    const isFetching = ref(false)

    // Fetch all parking data (using a large page size to ensure we get most spots for visualization)
    const fetchAllParking = async () => {
        isFetching.value = true
        try {
            // Assuming 1000 is enough to cover all spots for the visualization
            const res = await getAllParkingApi({ pageNum: 1, pageSize: 1000 }) as any
            if (res.code === 200) {
                parkingList.value = res.data.records
            } else {
                ElMessage.error(res.message || '获取车位信息失败')
            }
        } catch (error) {
            console.error('Fetch parking error:', error)
            ElMessage.error('网络请求失败')
        } finally {
            isFetching.value = false
        }
    }

    // Process data into zones
    // Returns structure: { 'A': { base: 100, spots: { 1: record, 5: record } }, 'B': ... }
    const groupedZones = computed(() => {
        const groups: Record<string, { base: number, spots: Record<number, any> }> = {}

        parkingList.value.forEach(record => {
            if (!record.spaceNo) return

            // Expected format: "PREFIX-NUMBER" e.g. "D-401", "V-002"
            // Split by the *first* hyphen, or distinct regex
            const parts = record.spaceNo.split('-')
            if (parts.length < 2) return // Invalid format skip

            const prefix = parts[0]
            const numStr = parts[1]
            const num = parseInt(numStr, 10)

            if (!groups[prefix]) {
                // Heuristic to find base: e.g. 401 -> base 400. 002 -> base 0.
                // We assume slots are 1-20. So (num - 1) // 20 * 20 ? 
                // Or simply Math.floor((num - 1) / 100) * 100?
                // Given "401", base is 400. "001", base is 0. "304", base is 300.
                // Let's use floor(num / 100) * 100 as a guess, assuming usually 100s based floors.
                // Exception: if it's just 1-20, base is 0.
                const base = Math.floor((num - 1) / 100) * 100
                groups[prefix] = { base, spots: {} }
            }

            // Calculate slot index 1-20
            // logic: (num - base)
            // e.g. 401 - 400 = 1. 002 - 0 = 2.
            const slotIndex = num - groups[prefix].base

            // Only add if it falls within valid 1-20 range (or relax this if data is dirty)
            if (slotIndex >= 1 && slotIndex <= 20) {
                groups[prefix].spots[slotIndex] = record
            }
        })

        // Ensure at least some order (A, B, C...)
        // Object keys iteration order is not guaranteed sorted but usually insertion order for strings.
        // We can let the component handle sorting keys.
        return groups
    })

    // Create parking application
    const createParkingApplication = async (data: any) => {
        isFetching.value = true
        try {
            const res = await registerParkingApi(data) as any
            if (res.code === 200) {
                ElMessage.success(res.message || '提交车位登记申请成功，请等待审核')
                // Optionally refresh list if needed
                await fetchAllParking()
                return true
            } else {
                ElMessage.error(res.message || '提交申请失败')
                return false
            }
        } catch (error) {
            console.error('Create parking application error:', error)
            ElMessage.error('网络请求失败')
            return false
        } finally {
            isFetching.value = false
        }
    }

    return {
        parkingList,
        isFetching,
        fetchAllParking,
        groupedZones,
        createParkingApplication
    }
}
