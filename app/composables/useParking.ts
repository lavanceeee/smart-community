
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
        // Pre-populate standard zones A-F
        const groups: Record<string, { base: number, spots: Record<number, any> }> = {
            'A': { base: 100, spots: {} },
            'B': { base: 200, spots: {} },
            'C': { base: 300, spots: {} },
            'D': { base: 400, spots: {} },
            'E': { base: 500, spots: {} },
            'F': { base: 600, spots: {} }
        }

        parkingList.value.forEach(record => {
            if (!record.spaceNo) return

            // Expected format: "PREFIX-NUMBER" e.g. "D-401", "V-002"
            const parts = record.spaceNo.split('-')
            if (parts.length < 2) return // Invalid format skip

            const prefix = parts[0]
            const numStr = parts[1]
            const num = parseInt(numStr, 10)

            if (!groups[prefix]) {
                // Heuristic for unknown zones: base inferred from number
                const base = Math.floor((num - 1) / 100) * 100
                groups[prefix] = { base, spots: {} }
            }

            // Calculate slot index 1-20
            const base = groups[prefix].base
            const slotIndex = num - base

            if (slotIndex >= 1 && slotIndex <= 20) {
                groups[prefix].spots[slotIndex] = record
            }
        })

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
