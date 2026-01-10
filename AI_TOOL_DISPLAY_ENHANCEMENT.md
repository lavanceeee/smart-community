# AI 工具调用展示增强功能

## 概述

基于后端提供的工具元数据系统，前端现已实现更丰富的 AI 工具调用展示效果。不再直接显示技术性的工具名称，而是展示用户友好的描述信息和视觉效果。

## 实现的功能

### 1. 工具元数据 API 集成

**文件**: `app/utils/API/agent.ts`

添加了获取工具元数据的 API 接口：

```typescript
getToolMetadata: () => {
    return $agentApi('/api/tools/metadata', {
        method: 'GET',
    })
}
```

### 2. 工具调用历史列表组件

**文件**: `app/components/Agent/Homepage/ToolCallHistory.vue`

创建了工具调用历史列表容器，具有以下特性：

- **统计面板**:
  - 总计：显示所有工具调用数量
  - 进行中：蓝色标识，显示正在调用的工具数量
  - 已完成：绿色标识，显示已完成的工具数量

- **折叠/展开功能**:
  - 默认展开，可点击折叠
  - 平滑的展开/收起动画
  - 保存展开状态

- **视觉层次**:
  - 灰色标题栏，清晰的分组
  - 左侧边框线连接所有工具调用项
  - 紧凑的列表布局

### 3. 工具调用指示器组件

**文件**: `app/components/Agent/Homepage/ToolCallIndicator.vue`

创建了专门的工具调用展示组件，具有以下特性：

- **状态区分**: 
  - 调用中：蓝色主题，加载动画
  - 已完成：绿色主题，完成图标
  
- **图标映射**: 支持多种工具类型图标
  - notification (通知)
  - message (消息)
  - bill (账单)
  - parking (停车)
  - repair (维修)
  - complaint (投诉)
  - 其他通用图标

- **响应式设计**: 支持暗色/亮色主题

- **紧凑样式**: 
  - 小尺寸图标和文字
  - 优化的间距
  - 适合列表展示

- **动画效果**: 
  - 调用中时的脉冲动画
  - 加载旋转图标
  - 状态过渡动画

### 3. useAgent Composable 增强

**文件**: `app/composables/agent/useAgent.ts`

#### 新增类型定义

```typescript
export interface ToolCall {
    id: string              // 唯一标识
    toolName: string        // 工具技术名称
    displayName: string     // 展示名称
    message: string         // 用户友好的描述
    icon: string           // 图标标识
    category: string       // 分类
    status: 'calling' | 'completed'  // 状态
    startTime: Date        // 开始时间
    endTime?: Date         // 结束时间
}
```

#### 新增功能

1. **工具调用记录管理**:
   - `toolCalls`: 存储所有工具调用记录
   - 自动追踪工具调用的开始和完成
   - 支持多个工具并发调用

2. **工具元数据缓存**:
   - `toolMetadata`: 缓存从后端获取的工具元数据
   - 页面加载时自动获取元数据
   - 提升后续工具调用的展示性能

3. **WebSocket 消息处理增强**:
   - 识别后端发送的 `tool_calling` 状态
   - 提取工具元数据（display_name, message, icon, category）
   - 创建工具调用记录并更新状态
   - 自动标记工具调用完成

#### 工具调用流程

```
用户发送消息
    ↓
后端 AI 开始处理
    ↓
后端发送: { type: "status", status: "tool_calling", data: {...} }
    ↓
前端创建工具调用记录 (status: "calling")
    ↓
展示工具调用指示器（蓝色，加载中）
    ↓
后端发送: { type: "status", status: "tool_completed", data: {...} }
    ↓
前端更新工具调用记录 (status: "completed")
    ↓
工具调用指示器变为绿色，显示完成图标
```

### 4. 聊天内容组件更新

**文件**: `app/components/Agent/Homepage/ContentCo.vue`

#### 新增功能

1. **工具调用展示区域**:
   - 在 assistant 消息气泡上方显示工具调用
   - 仅在最新的 assistant 消息中显示当前会话的工具调用
   - 每个工具调用独立展示，支持多个工具

2. **自动滚动优化**:
   - 监听 `toolCalls` 的变化
   - 工具调用状态更新时自动滚动到底部
   - 保持用户视野聚焦在最新内容

#### UI 布局

```
[用户头像] 用户消息
           ↓
[AI头像] + [状态指示器]（如果正在处理）
         ↓
         [工具调用1 - 已完成] ✓
         [工具调用2 - 进行中] ⟳
         ↓
         AI 回复消息气泡
```

### 5. 主页面集成

**文件**: `app/pages/agent.vue`

将 `toolCalls` 数据从 `useAgent` 传递到 `ContentCo` 组件：

```vue
<AgentHomepageContentCo 
    :messages="messages" 
    :agent-status="agentStatus" 
    :tool-calls="toolCalls" 
/>
```

## 用户体验改进

### 之前的展示

```
🤖 正在使用工具: get_user_notifications
```

用户看到的是技术性的函数名，不直观。

### 现在的展示

```
┌─────────────────────────────────────┐
│ 🔔  正在查询您的通知记录        ⟳  │  (蓝色，动画)
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│ 🔔  查询通知完成                 ✓  │  (绿色，完成)
└─────────────────────────────────────┘
```

用户看到的是友好的中文描述，配合图标和状态指示。

## 支持的工具类型图标

| 图标标识 | Lucide 图标 | 用途 |
|---------|------------|------|
| notification | lucide:bell | 通知相关 |
| message | lucide:mail | 消息/私信 |
| bill | lucide:file-text | 账单相关 |
| parking | lucide:car | 停车相关 |
| repair | lucide:wrench | 报修相关 |
| complaint | lucide:message-square-warning | 投诉相关 |
| tool | lucide:tool | 通用工具 |
| database | lucide:database | 数据查询 |
| search | lucide:search | 搜索功能 |
| user | lucide:user | 用户操作 |
| settings | lucide:settings | 设置操作 |
| default | lucide:zap | 默认图标 |

## 视觉设计

### 调用中状态（Calling）

- **背景色**: 
  - 亮色模式: `bg-blue-50 border-blue-200`
  - 暗色模式: `bg-blue-900/20 border-blue-800`
- **文字色**: 蓝色系
- **图标**: 加载旋转动画
- **效果**: 轻微脉冲动画

### 完成状态（Completed）

- **背景色**: 
  - 亮色模式: `bg-emerald-50 border-emerald-200`
  - 暗色模式: `bg-emerald-900/20 border-emerald-800`
- **文字色**: 绿色系
- **图标**: 对勾完成图标
- **效果**: 静态展示

### 响应式布局

- 自动适应容器宽度
- 图标 + 描述 + 状态指示横向排列
- 多个工具调用纵向堆叠
- 圆角设计，现代化界面

## 扩展性

### 添加新工具类型

只需在 `ToolCallIndicator.vue` 中的 `ICON_MAP` 添加映射：

```typescript
const ICON_MAP: Record<string, string> = {
    // ... 现有映射
    your_new_tool: 'lucide:your-icon',
}
```

### 自定义样式

组件使用 Tailwind CSS，可轻松自定义：
- 修改颜色主题
- 调整间距和大小
- 添加新的状态类型

## 技术特性

1. **类型安全**: 完整的 TypeScript 类型定义
2. **响应式**: 基于 Vue 3 Composition API
3. **性能优化**: 
   - 元数据缓存
   - 按需更新
   - 自动清理
4. **用户体验**: 
   - 平滑动画
   - 自动滚动
   - 状态反馈

## 与后端的契约

前端期望后端 WebSocket 消息格式：

### 工具调用开始

```json
{
  "type": "status",
  "status": "tool_calling",
  "data": {
    "tool": "get_user_notifications",
    "display_name": "查询通知",
    "message": "正在查询您的通知记录",
    "icon": "notification",
    "category": "notification"
  }
}
```

### 工具调用完成

```json
{
  "type": "status",
  "status": "tool_completed",
  "data": {
    "tool": "get_user_notifications",
    "display_name": "查询通知",
    "message": "查询通知完成",
    "icon": "notification",
    "category": "notification"
  }
}
```

## 总结

本次增强完全基于文档 `tool_metadata_usage.md` 的设计，实现了：

✅ 用户友好的工具调用展示
✅ 丰富的视觉反馈
✅ 实时状态更新
✅ 可扩展的图标系统
✅ 暗色/亮色主题支持
✅ 不暴露技术细节给用户

用户现在可以清晰地看到 AI 正在执行什么操作，而不是看到晦涩的函数名称。

