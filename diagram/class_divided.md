# 智慧社区管理平台 - 分模块类图

本文档将项目类图拆分为多个小型、易读的独立模块图。

---

## 📚 目录

### 社区功能模块
1. [用户认证与权限管理](#1-用户认证与权限管理)
2. [实时通信 - WebSocket](#2-实时通信---websocket)
3. [实时通信 - 私信聊天](#3-实时通信---私信聊天)
4. [社区论坛](#4-社区论坛)
5. [好友与通知](#5-好友与通知)
6. [物业服务管理](#6-物业服务管理)
7. [安保管理](#7-安保管理)
8. [AI 智能助手](#8-ai-智能助手)

### 商城功能模块
9. [商品与分类管理](#9-商品与分类管理)
10. [购物车管理](#10-购物车管理)
11. [订单管理](#11-订单管理)
12. [支付系统](#12-支付系统)
13. [钱包系统](#13-钱包系统)

---

## 社区功能模块

### 1. 用户认证与权限管理

```mermaid
classDiagram
    class UserInfo {
        +string userId
        +string userName
        +string phone
        +string email
        +string avatar
        +number userType
        +number status
    }

    class UserRole {
        +number roleId
        +string roleName
        +string roleCode
        +string description
    }

    class UserPermission {
        +number permissionId
        +string permissionName
        +string permissionCode
        +string description
    }

    class UserStore {
        +Ref~string~ token
        +Ref~UserInfo~ userInfo
        +Ref~UserRole[]~ userRoles
        +Ref~UserPermission[]~ userPermissions
        +Computed~boolean~ isLoggedIn
        +setLoginState(token, user)
        +setRoles(roles)
        +setPermissions(permissions)
        +logout()
    }

    class AuthComposable {
        +Ref~boolean~ loading
        +registerAction(formData)
        +loginAction(credentials, method)
    }

    class ApiClient {
        +string baseURL
        +onRequest(config)
        +fetch(url, options)
    }

    UserStore "1" *-- "1" UserInfo
    UserStore "1" *-- "0..*" UserRole
    UserStore "1" *-- "0..*" UserPermission
    AuthComposable ..> ApiClient : uses
    ApiClient ..> UserStore : injects token

    note for UserStore "Pinia Store\n持久化到 localStorage"
```

**说明**: 用户登录、注册、权限验证核心模块

---

### 2. 实时通信 - WebSocket

```mermaid
classDiagram
    class WebSocketMessage {
        +string type
        +number messageId
        +number fromUserId
        +string content
        +string createTime
    }

    class WebSocketManager {
        +Ref~WebSocket~ ws
        +Ref~boolean~ isConnected
        +Ref~boolean~ isConnecting
        +connect()
        +disconnect()
        +send(message)
        +sendHeartbeat()
        +onMessage(callback)
    }

    class UserStore {
        +logout()
    }

    WebSocketManager ..> WebSocketMessage : sends/receives
    WebSocketManager ..> UserStore : disconnects on logout

    note for WebSocketManager "单例模式\n支持心跳、自动重连"
```

**说明**: WebSocket 连接管理，支持实时消息推送

---

### 3. 实时通信 - 私信聊天

```mermaid
classDiagram
    class ChatMessage {
        +number messageId
        +number fromUserId
        +string fromUserName
        +number toUserId
        +string content
        +number isRead
        +string createTime
    }

    class ChatSession {
        +number userId
        +string userName
        +string avatar
        +number unreadCount
        +boolean isOnline
    }

    class ChatManager {
        +Ref~ChatMessage[]~ messages
        +Ref~number~ unreadCount
        +getChatHistory(userId)
        +sendMessage(toUserId, content)
        +markMessageRead(messageId)
        +openChat(user)
        +closeChat()
    }

    class WebSocketManager {
        +send(message)
        +onMessage(callback)
    }

    ChatManager "1" *-- "0..*" ChatMessage
    ChatManager ..> ChatSession
    ChatManager ..> WebSocketManager : uses

    note for ChatManager "Composable\n聊天功能管理"
```

**说明**: 用户间私信聊天功能

---

### 4. 社区论坛

```mermaid
classDiagram
    class ForumSection {
        +number sectionId
        +string sectionName
        +string sectionDesc
        +number postCount
        +number sortOrder
    }

    class ForumPost {
        +number postId
        +number sectionId
        +number userId
        +string userName
        +string title
        +string content
        +number viewCount
        +number likeCount
        +number commentCount
        +number isTop
        +number isEssence
        +boolean isLiked
        +boolean isCollected
    }

    class UserInfo {
        +string userId
        +string userName
    }

    ForumPost "0..*" -- "1" ForumSection : belongs to
    UserInfo "1" -- "0..*" ForumPost : creates
```

**说明**: 论坛板块和帖子管理

---

### 5. 好友与通知

```mermaid
classDiagram
    class Friend {
        +number friendId
        +number friendUserId
        +string friendUserName
        +string friendAvatar
        +string remark
        +number status
    }

    class FriendRequest {
        +number friendId
        +number fromUserId
        +number toUserId
        +string remark
        +number status
    }

    class Notification {
        +number notificationId
        +number userId
        +number type
        +string title
        +string content
        +number isRead
    }

    class UserInfo {
        +string userId
        +string userName
    }

    UserInfo "1" -- "0..*" Friend : has
    UserInfo "1" -- "0..*" Notification : receives
```

**说明**: 好友关系和系统通知

---

### 6. 物业服务管理

```mermaid
classDiagram
    class PropertyFeeBill {
        +number billId
        +number userId
        +string billingPeriod
        +number propertyFee
        +number waterFee
        +number electricityFee
        +number totalAmount
        +number status
        +string dueDate
    }

    class Repair {
        +number reportId
        +number userId
        +string reportType
        +string description
        +number status
        +string handleResult
    }

    class Complaint {
        +number complaintId
        +number userId
        +string complaintType
        +string description
        +number status
        +string handleResult
    }

    class Announcement {
        +number announceId
        +string title
        +string content
        +string publishUserName
    }

    class UserInfo {
        +string userId
        +string userName
    }

    UserInfo "1" -- "0..*" PropertyFeeBill : has
    UserInfo "1" -- "0..*" Repair : submits
    UserInfo "1" -- "0..*" Complaint : submits
```

**说明**: 物业费、报修、投诉、公告管理

---

### 7. 安保管理

```mermaid
classDiagram
    class Visitor {
        +number registerId
        +number userId
        +string visitorName
        +string visitorPhone
        +string visitPurpose
        +string visitTime
        +number status
    }

    class ParkingSpace {
        +number spaceId
        +string spaceNo
        +number userId
        +string carNumber
        +string carModel
        +number status
    }

    class UserInfo {
        +string userId
        +string userName
    }

    UserInfo "1" -- "0..*" Visitor : registers
    UserInfo "1" -- "0..*" ParkingSpace : applies
```

**说明**: 访客登记和车位管理

---

### 8. AI 智能助手

```mermaid
classDiagram
    class AgentStore {
        +string|number sessionId
        +string sessionTitle
        +setSession(id, title)
        +updateTitle(title)
        +clearSession()
    }

    class UserInfo {
        +string userId
        +string userName
    }

    AgentStore ..> UserInfo : session belongs to user

    note for AgentStore "Pinia Store\nAI Agent 会话管理"
```

**说明**: AI 智能助手会话管理

---

## 商城功能模块

### 9. 商品与分类管理

```mermaid
classDiagram
    class MallProduct {
        +number productId
        +string productName
        +number price
        +number originalPrice
        +string coverImg
        +number stock
        +number categoryId
        +boolean isCollected
    }

    class MallCategory {
        +number categoryId
        +string categoryName
        +string description
        +number sortOrder
    }

    class MallGoodsManager {
        +State~MallProduct[]~ goodsList
        +State~MallCategory[]~ categoryList
        +State~string~ searchKeyword
        +fetchCategories()
        +fetchGoodsList(page)
        +handleSearch(keyword, categoryId)
        +fetchDetail(productId)
        +fetchCollect(productId)
    }

    MallProduct "0..*" -- "1" MallCategory : belongs to
    MallGoodsManager "1" *-- "0..*" MallProduct
    MallGoodsManager "1" *-- "0..*" MallCategory

    note for MallGoodsManager "Composable\nuseState 跨组件共享"
```

**说明**: 商品浏览、搜索、分类管理

---

### 10. 购物车管理

```mermaid
classDiagram
    class CartItem {
        +number cartId
        +number productId
        +string productName
        +string productImage
        +number quantity
        +number price
        +number subtotal
    }

    class MallProduct {
        +number productId
        +string productName
        +number price
    }

    class MallGoodsManager {
        +State~CartItem[]~ cartList
        +fetchAddToCart(data)
        +fetchCartList()
        +fetchRemoveCart(cartItemId)
        +fetchUpdateCartQuantity(item, qty)
    }

    class UserInfo {
        +string userId
    }

    CartItem "0..*" -- "1" MallProduct : references
    MallGoodsManager "1" *-- "0..*" CartItem
    UserInfo "1" -- "0..*" CartItem : has
```

**说明**: 购物车增删改查

---

### 11. 订单管理

```mermaid
classDiagram
    class Order {
        +number orderId
        +string orderNo
        +number userId
        +string orderType
        +number amount
        +string paymentMethod
        +number status
        +string statusDesc
        +number storeId
        +string storeName
    }

    class OrderProduct {
        +number productId
        +string productName
        +number quantity
        +number price
        +number subtotal
    }

    class Store {
        +number storeId
        +string storeName
        +string address
        +string contactPhone
    }

    class UserInfo {
        +string userId
    }

    Order "1" *-- "0..*" OrderProduct : contains
    Order "0..*" -- "1" Store : pickup at
    UserInfo "1" -- "0..*" Order : places

    note for Order "订单类型: PRODUCT, PROPERTY_FEE, RECHARGE"
```

**说明**: 订单创建、查询、管理

---

### 12. 支付系统

```mermaid
classDiagram
    class Payment {
        +string orderNo
        +number amount
        +string paymentMethod
        +number status
        +string createTime
        +string callbackTime
    }

    class PaymentMethodEnum {
        <<enumeration>>
        ALIPAY
        WECHAT
        WALLET
    }

    class PaymentManager {
        +createOrder(data)
        +initiatePayment(orderNo)
        +queryOrderStatus(orderNo)
        +changePayMethod(orderNo, method)
    }

    class Order {
        +string orderNo
        +number amount
    }

    Payment ..> PaymentMethodEnum : uses
    PaymentManager ..> Payment : manages
    Order "1" -- "1" Payment : paid by
```

**说明**: 支付流程管理

---

### 13. 钱包系统

```mermaid
classDiagram
    class Wallet {
        +number walletId
        +number userId
        +number balance
        +string updateTime
    }

    class WalletTransaction {
        +number transactionId
        +number walletId
        +string type
        +number amount
        +number balanceBefore
        +number balanceAfter
        +string description
    }

    class TransactionTypeEnum {
        <<enumeration>>
        RECHARGE
        PAYMENT
        REFUND
        WITHDRAW
    }

    class WalletManager {
        +Ref~Wallet~ walletInfo
        +Ref~WalletTransaction[]~ transactions
        +getWalletInfo()
        +getTransactions(params)
        +recharge(amount)
    }

    class UserInfo {
        +string userId
    }

    Wallet "1" *-- "0..*" WalletTransaction : records
    WalletTransaction ..> TransactionTypeEnum : uses
    WalletManager "1" *-- "1" Wallet
    UserInfo "1" -- "0..1" Wallet : owns
```

**说明**: 钱包余额和交易记录管理

---

## 📊 技术架构总览

### 状态管理层次
- **Pinia Stores**: UserStore, AgentStore（全局状态）
- **Composables**: ChatManager, MallGoodsManager, OrderManager, WalletManager（业务逻辑）
- **useState**: 跨组件共享状态（商城列表、购物车等）

### 通信机制
- **WebSocket**: 实时消息推送（聊天、通知）
- **HTTP API**: RESTful API（CRUD 操作）
- **JWT Token**: Bearer Token 认证

### 设计模式
- **单例模式**: WebSocketManager
- **观察者模式**: WebSocket 消息回调
- **组合模式**: Composable 函数组合
- **仓储模式**: Pinia Store

---

## 🔗 模块间关系

### 社区功能依赖关系
```
UserStore (核心)
    ↓
WebSocketManager → ChatManager
    ↓
Forum, Friend, Notification, Property, Security
```

### 商城功能依赖关系
```
UserStore (核心)
    ↓
MallGoodsManager → CartItem
    ↓
OrderManager → PaymentManager
    ↓
WalletManager
```

---

**生成时间**: 2026-01-14
**框架版本**: Nuxt 4.2.2, Vue 3.5.26
**项目类型**: 智慧社区管理平台（全栈应用）
