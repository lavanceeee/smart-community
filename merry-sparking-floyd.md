# Banner组件搜索功能改造方案

## 需求概述

将现有的Banner轮播组件改造为带搜索功能的版本：
- **默认样式**：保留轮播功能，在轮播上方添加搜索框
- **搜索范围**：社区服务页面、新闻公告、论坛帖子
- **交互方式**：输入关键词后显示匹配结果的链接列表，点击跳转
- **加载效果**：使用骨架屏加载动画

## 技术方案

### 1. 新增文件

#### 1.1 搜索Composable
**文件**: `app/composables/useGlobalSearch.ts`

实现全局搜索逻辑，包括：
- 搜索状态管理（query、loading、results）
- 防抖处理（300ms延迟）
- 三种数据源搜索：
  - 静态服务菜单（从LeftSiderBar获取）
  - 新闻公告（调用API: `getCommunityNewsApi`）
  - 论坛帖子（调用API: `getForumPostListApi`）
- 结果分类和排序

#### 1.2 搜索主组件
**文件**: `app/components/MainPage/SearchWithResults.vue`

功能特性：
- 搜索输入框（带搜索图标）
- 下拉结果面板（绝对定位）
- 结果分组显示（社区服务、公告新闻、论坛帖子）
- 骨架屏加载状态
- 空状态提示
- 点击外部关闭功能
- 键盘交互（Enter搜索、Escape关闭）

### 2. 修改文件

#### 2.1 Banner组件
**文件**: `app/components/MainPage/Banner.vue`

改动内容：
```vue
<template>
  <div class="w-full rounded ...">
    <!-- 新增：搜索框区域 -->
    <SearchWithResults class="mb-3" />

    <!-- 原有：轮播区域 -->
    <div class="flex gap-3">
      <div class="flex-1 min-w-0 h-[280px] ...">
        <!-- 保持原有轮播代码不变 -->
      </div>
    </div>

    <!-- 原有：轮播指示器 -->
  </div>
</template>

<script setup>
// 导入搜索组件
import SearchWithResults from './SearchWithResults.vue'
// 保持原有轮播逻辑不变
</script>
```

### 3. 数据结构设计

#### 3.1 搜索结果接口
```typescript
interface SearchResult {
  id: string | number
  type: 'service' | 'news' | 'forum'
  title: string
  description?: string
  icon: string
  path: string
  category?: string
}

interface SearchState {
  query: string
  loading: boolean
  results: {
    services: SearchResult[]
    news: SearchResult[]
    forum: SearchResult[]
  }
  isOpen: boolean
}
```

### 4. 搜索实现细节

#### 4.1 静态服务搜索
从`LeftSiderBar.vue`的菜单数据中提取：
```typescript
const staticServices = [
  { name: '社区论坛', path: '/service/community/forum', icon: 'lucide:layout-grid' },
  { name: '通知公告', path: '/service/community/news', icon: 'lucide:megaphone' },
  { name: '物业缴费', path: '/service/community/payment', icon: 'lucide:credit-card' },
  { name: '报修投诉', path: '/service/community/issues', icon: 'lucide:wrench' },
  { name: '停车服务', path: '/service/community/parking', icon: 'lucide:car' },
  { name: '访客管理', path: '/service/community/visitors', icon: 'lucide:users' },
  { name: '我的好友', path: '/service/community/friends', icon: 'lucide:user' },
  { name: '我的钱包', path: '/wallet', icon: 'lucide:wallet' },
  { name: '个人信息', path: '/profile', icon: 'lucide:user-circle' }
]
```

关键词匹配：`item.name.toLowerCase().includes(keyword.toLowerCase())`

#### 4.2 新闻搜索
调用现有API：
```typescript
await getCommunityNewsApi({
  keyword: searchQuery,
  pageNum: 1,
  pageSize: 5
})
```

#### 4.3 论坛帖子搜索
调用现有API：
```typescript
await getForumPostListApi({
  keyword: searchQuery,
  pageNo: 1,
  pageSize: 5,
  sortBy: 'latest'
})
```

#### 4.4 并行搜索优化
使用`Promise.all`同时请求三个数据源：
```typescript
const [servicesResults, newsResults, forumResults] = await Promise.all([
  searchStaticServices(keyword),
  searchNews(keyword),
  searchForumPosts(keyword)
])
```

### 5. UI设计方案

#### 5.1 搜索框样式
- 高度：48px
- 背景：白色/暗色模式自适应
- 边框：淡蓝色，聚焦时橙色高亮（#ff5000）
- 占位符：「搜索社区服务、公告、论坛...」
- 右侧图标：搜索图标（lucide:search）

#### 5.2 结果下拉面板
- 位置：搜索框正下方，绝对定位
- 最大高度：400px，超出滚动
- 背景：白色卡片带阴影/暗色模式
- 分组显示：
  ```
  社区服务 (2)
    🏠 社区论坛 - 邻里交流互动
    📢 通知公告 - 查看社区最新消息

  公告新闻 (3)
    📰 关于疫情封控的通知
    📰 智慧社区服务升级

  论坛帖子 (5)
    💬 寻找丢失的钥匙
    💬 小区停车位申请流程
  ```

#### 5.3 骨架屏样式
每个分类显示3个骨架项：
- 灰色矩形块模拟图标和文本
- 脉冲动画效果（animate-pulse）
- 保持与实际结果相同的高度和间距

#### 5.4 空状态
- 图标：搜索X图标（lucide:search-x）
- 文案：「未找到相关结果，换个关键词试试？」
- 居中显示，灰色文字

### 6. 交互流程

1. **输入搜索**：用户输入 → 300ms防抖 → 触发搜索
2. **显示加载**：显示骨架屏（3个/分类）
3. **获取结果**：并行调用三个API
4. **展示结果**：分组显示，隐藏空分类
5. **点击跳转**：点击结果项 → 使用`navigateTo(path)` → 关闭下拉框
6. **关闭面板**：点击外部/按Esc/点击结果时关闭

### 7. 关键技术点

#### 7.1 防抖实现
```typescript
import { useDebounceFn } from '@vueuse/core'

const debouncedSearch = useDebounceFn((keyword: string) => {
  performSearch(keyword)
}, 300)
```

#### 7.2 点击外部关闭
```typescript
import { onClickOutside } from '@vueuse/core'

const searchContainer = ref(null)
onClickOutside(searchContainer, () => {
  searchState.isOpen = false
})
```

#### 7.3 深色模式支持
所有样式使用Tailwind `dark:` 前缀：
```css
bg-white dark:bg-slate-800
text-slate-900 dark:text-slate-100
border-slate-200 dark:border-slate-700
```

### 8. 错误处理

- API调用失败时不影响其他结果显示
- 使用try-catch包裹每个搜索函数
- 控制台记录错误但不阻断流程
- 单个分类失败时仍显示其他分类结果

### 9. 性能优化

- 防抖降低API调用频率（300ms）
- 限制每类结果数量（5条）
- 使用并行请求减少总等待时间
- 组件卸载时取消未完成的请求

## 实施步骤

### 步骤1：创建搜索Composable
创建 `app/composables/useGlobalSearch.ts`，实现核心搜索逻辑

### 步骤2：创建搜索组件
创建 `app/components/MainPage/SearchWithResults.vue`，实现UI和交互

### 步骤3：修改Banner组件
修改 `app/components/MainPage/Banner.vue`，集成搜索组件

### 步骤4：样式调整和测试
- 调整间距布局
- 测试深色模式
- 测试所有搜索场景
- 移动端响应式适配

## 验证方案

### 功能验证
1. **搜索服务**：输入"论坛" → 显示"社区论坛"链接
2. **搜索新闻**：输入"疫情" → 显示相关公告
3. **搜索帖子**：输入"钥匙" → 显示相关帖子
4. **加载状态**：搜索时显示骨架屏
5. **空状态**：输入无结果关键词 → 显示提示信息
6. **跳转功能**：点击结果 → 正确跳转到目标页面
7. **关闭功能**：点击外部/Esc → 关闭下拉框

### 样式验证
1. 深色模式下所有样式正常
2. 移动端布局不错乱
3. 加载动画流畅
4. 悬浮效果正常

### 性能验证
1. 输入时防抖生效，不会频繁调用API
2. 并行请求速度快于串行
3. 组件卸载后不会内存泄漏

---

## 关键文件清单

**新增文件**：
- `app/composables/useGlobalSearch.ts` - 搜索逻辑
- `app/components/MainPage/SearchWithResults.vue` - 搜索UI组件

**修改文件**：
- `app/components/MainPage/Banner.vue` - 集成搜索组件

**依赖API**：
- `app/utils/api.ts` 中的 `getCommunityNewsApi` 和 `getForumPostListApi`

**参考文件**：
- `app/components/MainPage/LeftSiderBar.vue` - 静态服务菜单数据
