# 管理端-数据看板


## 获取完整数据看板


**接口地址**:`/api/admin/dashboard`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取后台首页所有统计数据，包含用户、订单、报修投诉、车位访客、物业费、论坛等多维度数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultDashboardVO|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||DashboardVO|DashboardVO|
|&emsp;&emsp;userStatistics|用户统计数据|UserStatistics|UserStatistics|
|&emsp;&emsp;&emsp;&emsp;totalUsers|用户总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayNewUsers|今日新增用户|integer||
|&emsp;&emsp;&emsp;&emsp;weekNewUsers|本周新增用户|integer||
|&emsp;&emsp;&emsp;&emsp;monthNewUsers|本月新增用户|integer||
|&emsp;&emsp;&emsp;&emsp;activeUsers|活跃用户数（正常状态）|integer||
|&emsp;&emsp;&emsp;&emsp;frozenUsers|冻结用户数|integer||
|&emsp;&emsp;&emsp;&emsp;normalUsers|普通用户数|integer||
|&emsp;&emsp;&emsp;&emsp;merchantAdmins|商户管理员数|integer||
|&emsp;&emsp;&emsp;&emsp;communityAdmins|社区管理员数|integer||
|&emsp;&emsp;orderStatistics|订单统计数据|OrderStatistics|OrderStatistics|
|&emsp;&emsp;&emsp;&emsp;totalOrders|订单总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayOrders|今日订单数|integer||
|&emsp;&emsp;&emsp;&emsp;weekOrders|本周订单数|integer||
|&emsp;&emsp;&emsp;&emsp;monthOrders|本月订单数|integer||
|&emsp;&emsp;&emsp;&emsp;pendingPaymentOrders|待付款订单数|integer||
|&emsp;&emsp;&emsp;&emsp;paidOrders|已付款订单数|integer||
|&emsp;&emsp;&emsp;&emsp;waitingPickupOrders|待取货订单数|integer||
|&emsp;&emsp;&emsp;&emsp;completedOrders|已完成订单数|integer||
|&emsp;&emsp;&emsp;&emsp;cancelledOrders|已取消订单数|integer||
|&emsp;&emsp;&emsp;&emsp;todayAmount|今日交易金额|number||
|&emsp;&emsp;&emsp;&emsp;monthAmount|本月交易金额|number||
|&emsp;&emsp;&emsp;&emsp;totalAmount|总交易金额|number||
|&emsp;&emsp;serviceStatistics|报修投诉统计数据|ServiceStatistics|ServiceStatistics|
|&emsp;&emsp;&emsp;&emsp;totalRepairs|报修总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayRepairs|今日报修数|integer||
|&emsp;&emsp;&emsp;&emsp;pendingRepairs|待处理报修数|integer||
|&emsp;&emsp;&emsp;&emsp;processingRepairs|处理中报修数|integer||
|&emsp;&emsp;&emsp;&emsp;completedRepairs|已完成报修数|integer||
|&emsp;&emsp;&emsp;&emsp;rejectedRepairs|已驳回报修数|integer||
|&emsp;&emsp;&emsp;&emsp;totalComplaints|投诉总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayComplaints|今日投诉数|integer||
|&emsp;&emsp;&emsp;&emsp;pendingComplaints|待处理投诉数|integer||
|&emsp;&emsp;&emsp;&emsp;processingComplaints|处理中投诉数|integer||
|&emsp;&emsp;&emsp;&emsp;completedComplaints|已完成投诉数|integer||
|&emsp;&emsp;&emsp;&emsp;rejectedComplaints|已驳回投诉数|integer||
|&emsp;&emsp;securityStatistics|车位访客统计数据|SecurityStatistics|SecurityStatistics|
|&emsp;&emsp;&emsp;&emsp;totalParkingSpaces|车位登记总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayParkingSpaces|今日新增车位登记|integer||
|&emsp;&emsp;&emsp;&emsp;pendingParkingSpaces|待审核车位数|integer||
|&emsp;&emsp;&emsp;&emsp;approvedParkingSpaces|已通过车位数|integer||
|&emsp;&emsp;&emsp;&emsp;totalVisitors|访客登记总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayVisitors|今日访客登记数|integer||
|&emsp;&emsp;&emsp;&emsp;pendingVisitors|待审核访客数|integer||
|&emsp;&emsp;&emsp;&emsp;approvedVisitors|已通过访客数|integer||
|&emsp;&emsp;propertyFeeStatistics|物业费统计数据|PropertyFeeStatistics|PropertyFeeStatistics|
|&emsp;&emsp;&emsp;&emsp;totalBills|账单总数|integer||
|&emsp;&emsp;&emsp;&emsp;unpaidBills|未缴账单数|integer||
|&emsp;&emsp;&emsp;&emsp;paidBills|已缴账单数|integer||
|&emsp;&emsp;&emsp;&emsp;partialPaidBills|部分缴纳账单数|integer||
|&emsp;&emsp;&emsp;&emsp;unpaidAmount|未缴总金额|number||
|&emsp;&emsp;&emsp;&emsp;paidAmount|已缴总金额|number||
|&emsp;&emsp;&emsp;&emsp;monthReceivableAmount|本月应收金额|number||
|&emsp;&emsp;&emsp;&emsp;monthReceivedAmount|本月实收金额|number||
|&emsp;&emsp;&emsp;&emsp;paymentRate|缴费率（百分比）|number||
|&emsp;&emsp;forumStatistics|论坛统计数据|ForumStatistics|ForumStatistics|
|&emsp;&emsp;&emsp;&emsp;totalPosts|帖子总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayPosts|今日发帖数|integer||
|&emsp;&emsp;&emsp;&emsp;weekPosts|本周发帖数|integer||
|&emsp;&emsp;&emsp;&emsp;totalComments|评论总数|integer||
|&emsp;&emsp;&emsp;&emsp;todayComments|今日评论数|integer||
|&emsp;&emsp;&emsp;&emsp;pendingPosts|待审核帖子数|integer||
|&emsp;&emsp;&emsp;&emsp;essencePosts|精华帖子数|integer||
|&emsp;&emsp;&emsp;&emsp;topPosts|置顶帖子数|integer||
|&emsp;&emsp;&emsp;&emsp;totalViews|总浏览量|integer||
|&emsp;&emsp;&emsp;&emsp;totalLikes|总点赞数|integer||
|&emsp;&emsp;userTrend|趋势数据|array|TrendData|
|&emsp;&emsp;&emsp;&emsp;date|日期|string||
|&emsp;&emsp;&emsp;&emsp;count|数值|integer||
|&emsp;&emsp;&emsp;&emsp;amount|金额（可选）|number||
|&emsp;&emsp;orderTrend|趋势数据|array|TrendData|
|&emsp;&emsp;&emsp;&emsp;date|日期|string||
|&emsp;&emsp;&emsp;&emsp;count|数值|integer||
|&emsp;&emsp;&emsp;&emsp;amount|金额（可选）|number||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userStatistics": {
			"totalUsers": 1000,
			"todayNewUsers": 10,
			"weekNewUsers": 50,
			"monthNewUsers": 200,
			"activeUsers": 950,
			"frozenUsers": 50,
			"normalUsers": 800,
			"merchantAdmins": 150,
			"communityAdmins": 50
		},
		"orderStatistics": {
			"totalOrders": 5000,
			"todayOrders": 50,
			"weekOrders": 300,
			"monthOrders": 1000,
			"pendingPaymentOrders": 100,
			"paidOrders": 200,
			"waitingPickupOrders": 50,
			"completedOrders": 4500,
			"cancelledOrders": 150,
			"todayAmount": 5000,
			"monthAmount": 150000,
			"totalAmount": 800000
		},
		"serviceStatistics": {
			"totalRepairs": 500,
			"todayRepairs": 5,
			"pendingRepairs": 50,
			"processingRepairs": 30,
			"completedRepairs": 400,
			"rejectedRepairs": 20,
			"totalComplaints": 200,
			"todayComplaints": 3,
			"pendingComplaints": 20,
			"processingComplaints": 10,
			"completedComplaints": 160,
			"rejectedComplaints": 10
		},
		"securityStatistics": {
			"totalParkingSpaces": 300,
			"todayParkingSpaces": 5,
			"pendingParkingSpaces": 10,
			"approvedParkingSpaces": 280,
			"totalVisitors": 1000,
			"todayVisitors": 20,
			"pendingVisitors": 15,
			"approvedVisitors": 950
		},
		"propertyFeeStatistics": {
			"totalBills": 2000,
			"unpaidBills": 200,
			"paidBills": 1700,
			"partialPaidBills": 100,
			"unpaidAmount": 50000,
			"paidAmount": 500000,
			"monthReceivableAmount": 100000,
			"monthReceivedAmount": 80000,
			"paymentRate": 85
		},
		"forumStatistics": {
			"totalPosts": 1000,
			"todayPosts": 20,
			"weekPosts": 100,
			"totalComments": 5000,
			"todayComments": 50,
			"pendingPosts": 10,
			"essencePosts": 50,
			"topPosts": 5,
			"totalViews": 100000,
			"totalLikes": 20000
		},
		"userTrend": [
			{
				"date": "2026-01-01",
				"count": 100,
				"amount": 5000
			}
		],
		"orderTrend": [
			{
				"date": "2026-01-01",
				"count": 100,
				"amount": 5000
			}
		]
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


## 获取用户统计数据


**接口地址**:`/api/admin/dashboard/user`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>单独获取用户相关的统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserStatistics|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserStatistics|UserStatistics|
|&emsp;&emsp;totalUsers|用户总数|integer(int64)||
|&emsp;&emsp;todayNewUsers|今日新增用户|integer(int64)||
|&emsp;&emsp;weekNewUsers|本周新增用户|integer(int64)||
|&emsp;&emsp;monthNewUsers|本月新增用户|integer(int64)||
|&emsp;&emsp;activeUsers|活跃用户数（正常状态）|integer(int64)||
|&emsp;&emsp;frozenUsers|冻结用户数|integer(int64)||
|&emsp;&emsp;normalUsers|普通用户数|integer(int64)||
|&emsp;&emsp;merchantAdmins|商户管理员数|integer(int64)||
|&emsp;&emsp;communityAdmins|社区管理员数|integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalUsers": 1000,
		"todayNewUsers": 10,
		"weekNewUsers": 50,
		"monthNewUsers": 200,
		"activeUsers": 950,
		"frozenUsers": 50,
		"normalUsers": 800,
		"merchantAdmins": 150,
		"communityAdmins": 50
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


## 获取报修投诉统计数据


**接口地址**:`/api/admin/dashboard/service`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>单独获取报修和投诉相关的统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultServiceStatistics|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ServiceStatistics|ServiceStatistics|
|&emsp;&emsp;totalRepairs|报修总数|integer(int64)||
|&emsp;&emsp;todayRepairs|今日报修数|integer(int64)||
|&emsp;&emsp;pendingRepairs|待处理报修数|integer(int64)||
|&emsp;&emsp;processingRepairs|处理中报修数|integer(int64)||
|&emsp;&emsp;completedRepairs|已完成报修数|integer(int64)||
|&emsp;&emsp;rejectedRepairs|已驳回报修数|integer(int64)||
|&emsp;&emsp;totalComplaints|投诉总数|integer(int64)||
|&emsp;&emsp;todayComplaints|今日投诉数|integer(int64)||
|&emsp;&emsp;pendingComplaints|待处理投诉数|integer(int64)||
|&emsp;&emsp;processingComplaints|处理中投诉数|integer(int64)||
|&emsp;&emsp;completedComplaints|已完成投诉数|integer(int64)||
|&emsp;&emsp;rejectedComplaints|已驳回投诉数|integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalRepairs": 500,
		"todayRepairs": 5,
		"pendingRepairs": 50,
		"processingRepairs": 30,
		"completedRepairs": 400,
		"rejectedRepairs": 20,
		"totalComplaints": 200,
		"todayComplaints": 3,
		"pendingComplaints": 20,
		"processingComplaints": 10,
		"completedComplaints": 160,
		"rejectedComplaints": 10
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


## 获取车位访客统计数据


**接口地址**:`/api/admin/dashboard/security`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>单独获取车位和访客相关的统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultSecurityStatistics|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||SecurityStatistics|SecurityStatistics|
|&emsp;&emsp;totalParkingSpaces|车位登记总数|integer(int64)||
|&emsp;&emsp;todayParkingSpaces|今日新增车位登记|integer(int64)||
|&emsp;&emsp;pendingParkingSpaces|待审核车位数|integer(int64)||
|&emsp;&emsp;approvedParkingSpaces|已通过车位数|integer(int64)||
|&emsp;&emsp;totalVisitors|访客登记总数|integer(int64)||
|&emsp;&emsp;todayVisitors|今日访客登记数|integer(int64)||
|&emsp;&emsp;pendingVisitors|待审核访客数|integer(int64)||
|&emsp;&emsp;approvedVisitors|已通过访客数|integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalParkingSpaces": 300,
		"todayParkingSpaces": 5,
		"pendingParkingSpaces": 10,
		"approvedParkingSpaces": 280,
		"totalVisitors": 1000,
		"todayVisitors": 20,
		"pendingVisitors": 15,
		"approvedVisitors": 950
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


## 获取物业费统计数据


**接口地址**:`/api/admin/dashboard/property-fee`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>单独获取物业费相关的统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPropertyFeeStatistics|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PropertyFeeStatistics|PropertyFeeStatistics|
|&emsp;&emsp;totalBills|账单总数|integer(int64)||
|&emsp;&emsp;unpaidBills|未缴账单数|integer(int64)||
|&emsp;&emsp;paidBills|已缴账单数|integer(int64)||
|&emsp;&emsp;partialPaidBills|部分缴纳账单数|integer(int64)||
|&emsp;&emsp;unpaidAmount|未缴总金额|number||
|&emsp;&emsp;paidAmount|已缴总金额|number||
|&emsp;&emsp;monthReceivableAmount|本月应收金额|number||
|&emsp;&emsp;monthReceivedAmount|本月实收金额|number||
|&emsp;&emsp;paymentRate|缴费率（百分比）|number||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalBills": 2000,
		"unpaidBills": 200,
		"paidBills": 1700,
		"partialPaidBills": 100,
		"unpaidAmount": 50000,
		"paidAmount": 500000,
		"monthReceivableAmount": 100000,
		"monthReceivedAmount": 80000,
		"paymentRate": 85
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


## 获取订单统计数据


**接口地址**:`/api/admin/dashboard/order`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>单独获取订单相关的统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultOrderStatistics|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||OrderStatistics|OrderStatistics|
|&emsp;&emsp;totalOrders|订单总数|integer(int64)||
|&emsp;&emsp;todayOrders|今日订单数|integer(int64)||
|&emsp;&emsp;weekOrders|本周订单数|integer(int64)||
|&emsp;&emsp;monthOrders|本月订单数|integer(int64)||
|&emsp;&emsp;pendingPaymentOrders|待付款订单数|integer(int64)||
|&emsp;&emsp;paidOrders|已付款订单数|integer(int64)||
|&emsp;&emsp;waitingPickupOrders|待取货订单数|integer(int64)||
|&emsp;&emsp;completedOrders|已完成订单数|integer(int64)||
|&emsp;&emsp;cancelledOrders|已取消订单数|integer(int64)||
|&emsp;&emsp;todayAmount|今日交易金额|number||
|&emsp;&emsp;monthAmount|本月交易金额|number||
|&emsp;&emsp;totalAmount|总交易金额|number||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalOrders": 5000,
		"todayOrders": 50,
		"weekOrders": 300,
		"monthOrders": 1000,
		"pendingPaymentOrders": 100,
		"paidOrders": 200,
		"waitingPickupOrders": 50,
		"completedOrders": 4500,
		"cancelledOrders": 150,
		"todayAmount": 5000,
		"monthAmount": 150000,
		"totalAmount": 800000
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


## 获取论坛统计数据


**接口地址**:`/api/admin/dashboard/forum`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>单独获取论坛相关的统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultForumStatistics|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ForumStatistics|ForumStatistics|
|&emsp;&emsp;totalPosts|帖子总数|integer(int64)||
|&emsp;&emsp;todayPosts|今日发帖数|integer(int64)||
|&emsp;&emsp;weekPosts|本周发帖数|integer(int64)||
|&emsp;&emsp;totalComments|评论总数|integer(int64)||
|&emsp;&emsp;todayComments|今日评论数|integer(int64)||
|&emsp;&emsp;pendingPosts|待审核帖子数|integer(int64)||
|&emsp;&emsp;essencePosts|精华帖子数|integer(int64)||
|&emsp;&emsp;topPosts|置顶帖子数|integer(int64)||
|&emsp;&emsp;totalViews|总浏览量|integer(int64)||
|&emsp;&emsp;totalLikes|总点赞数|integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalPosts": 1000,
		"todayPosts": 20,
		"weekPosts": 100,
		"totalComments": 5000,
		"todayComments": 50,
		"pendingPosts": 10,
		"essencePosts": 50,
		"topPosts": 5,
		"totalViews": 100000,
		"totalLikes": 20000
	},
	"timestamp": 1640995200000
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {},
	"timestamp": 1640995200000
}
```