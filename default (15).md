# 管理端-物业费管理


## 获取账单详情


**接口地址**:`/api/admin/property-fee/bills/{billId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>根据账单ID获取账单详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|billId|账单ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPropertyFeeBillVO|
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
|data||PropertyFeeBillVO|PropertyFeeBillVO|
|&emsp;&emsp;billId|账单ID|integer(int64)||
|&emsp;&emsp;billNo|账单编号|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;billingPeriod|账期（如：2026-01）|string||
|&emsp;&emsp;propertyFee|物业费|number||
|&emsp;&emsp;waterFee|水费|number||
|&emsp;&emsp;electricityFee|电费|number||
|&emsp;&emsp;gasFee|燃气费|number||
|&emsp;&emsp;parkingFee|停车费|number||
|&emsp;&emsp;otherFee|其他费用|number||
|&emsp;&emsp;totalAmount|总金额|number||
|&emsp;&emsp;paidAmount|已缴金额|number||
|&emsp;&emsp;unpaidAmount|待缴金额|number||
|&emsp;&emsp;status|状态 0-未缴 1-已缴 2-部分缴纳|integer(int32)||
|&emsp;&emsp;statusText|状态描述|string||
|&emsp;&emsp;dueDate|缴费截止日期|string(date-time)||
|&emsp;&emsp;overdue|是否逾期|boolean||
|&emsp;&emsp;overdueDays|逾期天数|integer(int32)||
|&emsp;&emsp;paidTime|缴费时间|string(date-time)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"billId": 1,
		"billNo": "BILL202601130001",
		"userId": 1,
		"userName": "张三",
		"userPhone": "13800138000",
		"billingPeriod": "2026-01",
		"propertyFee": 200,
		"waterFee": 50,
		"electricityFee": 100,
		"gasFee": 30,
		"parkingFee": 150,
		"otherFee": 20,
		"totalAmount": 550,
		"paidAmount": 0,
		"unpaidAmount": 550,
		"status": 0,
		"statusText": "未缴",
		"dueDate": "",
		"overdue": false,
		"overdueDays": 0,
		"paidTime": "",
		"createTime": "",
		"updateTime": ""
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


## 更新账单


**接口地址**:`/api/admin/property-fee/bills/{billId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新物业费账单的费用项和截止日期</p>



**请求示例**:


```javascript
{
  "propertyFee": 200,
  "waterFee": 50,
  "electricityFee": 100,
  "gasFee": 30,
  "parkingFee": 150,
  "otherFee": 20,
  "dueDate": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|billId|账单ID|path|true|integer(int64)||
|updateBillRequest|更新账单请求|body|true|UpdateBillRequest|UpdateBillRequest|
|&emsp;&emsp;propertyFee|物业费||false|number||
|&emsp;&emsp;waterFee|水费||false|number||
|&emsp;&emsp;electricityFee|电费||false|number||
|&emsp;&emsp;gasFee|燃气费||false|number||
|&emsp;&emsp;parkingFee|停车费||false|number||
|&emsp;&emsp;otherFee|其他费用||false|number||
|&emsp;&emsp;dueDate|缴费截止日期||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPropertyFeeBill|
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
|data||PropertyFeeBill|PropertyFeeBill|
|&emsp;&emsp;billId||integer(int64)||
|&emsp;&emsp;billNo||string||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;billingPeriod||string||
|&emsp;&emsp;propertyFee||number||
|&emsp;&emsp;waterFee||number||
|&emsp;&emsp;electricityFee||number||
|&emsp;&emsp;gasFee||number||
|&emsp;&emsp;parkingFee||number||
|&emsp;&emsp;otherFee||number||
|&emsp;&emsp;totalAmount||number||
|&emsp;&emsp;paidAmount||number||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;dueDate||string(date-time)||
|&emsp;&emsp;paidTime||string(date-time)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"billId": 0,
		"billNo": "",
		"userId": 0,
		"billingPeriod": "",
		"propertyFee": 0,
		"waterFee": 0,
		"electricityFee": 0,
		"gasFee": 0,
		"parkingFee": 0,
		"otherFee": 0,
		"totalAmount": 0,
		"paidAmount": 0,
		"status": 0,
		"dueDate": "",
		"paidTime": "",
		"createTime": "",
		"updateTime": ""
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


## 删除账单


**接口地址**:`/api/admin/property-fee/bills/{billId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除指定的物业费账单（已有缴费记录的账单无法删除）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|billId|账单ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultVoid|
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


## 查询缴费记录


**接口地址**:`/api/admin/property-fee/payments/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询所有缴费记录，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "userId": 1,
  "paymentMethod": "WALLET",
  "status": 1,
  "startDate": "",
  "endDate": "",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|paymentQueryRequest|查询条件|body|true|PaymentQueryRequest|PaymentQueryRequest|
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;paymentMethod|支付方式（可选）：WALLET-钱包，ALIPAY-支付宝，WECHAT-微信||false|string||
|&emsp;&emsp;status|支付状态（可选）：0-失败，1-成功，2-退款||false|integer(int32)||
|&emsp;&emsp;startDate|开始日期（可选）||false|string(date-time)||
|&emsp;&emsp;endDate|结束日期（可选）||false|string(date-time)||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePropertyFeePayment|
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
|data||PagePropertyFeePayment|PagePropertyFeePayment|
|&emsp;&emsp;records|响应数据|array|PropertyFeePayment|
|&emsp;&emsp;&emsp;&emsp;paymentId||integer||
|&emsp;&emsp;&emsp;&emsp;paymentNo||string||
|&emsp;&emsp;&emsp;&emsp;billId||integer||
|&emsp;&emsp;&emsp;&emsp;userId||integer||
|&emsp;&emsp;&emsp;&emsp;amount||number||
|&emsp;&emsp;&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;&emsp;&emsp;transactionId||integer||
|&emsp;&emsp;&emsp;&emsp;status||integer||
|&emsp;&emsp;&emsp;&emsp;createTime||string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePropertyFeePayment|PagePropertyFeePayment|
|&emsp;&emsp;searchCount||PagePropertyFeePayment|PagePropertyFeePayment|
|&emsp;&emsp;optimizeJoinOfCountSql||boolean||
|&emsp;&emsp;maxLimit||integer(int64)||
|&emsp;&emsp;countId||string||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"records": [
			{
				"paymentId": 0,
				"paymentNo": "",
				"billId": 0,
				"userId": 0,
				"amount": 0,
				"paymentMethod": "",
				"transactionId": 0,
				"status": 0,
				"createTime": ""
			}
		],
		"total": 0,
		"size": 0,
		"current": 0,
		"orders": [
			{
				"column": "",
				"asc": true
			}
		],
		"optimizeCountSql": {},
		"searchCount": {},
		"optimizeJoinOfCountSql": true,
		"maxLimit": 0,
		"countId": "",
		"pages": 0
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


## 发送催缴通知


**接口地址**:`/api/admin/property-fee/bills/send-reminder`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>对指定账单发送催缴通知</p>



**请求示例**:


```javascript
[]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|integers|integer|body|true|array||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultInteger|
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
|data|响应数据|integer(int32)|integer(int32)|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": 0,
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


## 查询账单列表


**接口地址**:`/api/admin/property-fee/bills/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询所有物业费账单，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "userId": 1,
  "userName": "张三",
  "billingPeriod": "2026-01",
  "status": 0,
  "overdue": true,
  "startDate": "",
  "endDate": "",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminBillQueryRequest|查询条件|body|true|AdminBillQueryRequest|AdminBillQueryRequest|
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;userName|用户名（模糊查询）||false|string||
|&emsp;&emsp;billingPeriod|账期（如：2026-01）||false|string||
|&emsp;&emsp;status|账单状态（可选）：0-未缴，1-已缴，2-部分缴纳||false|integer(int32)||
|&emsp;&emsp;overdue|是否逾期（可选）||false|boolean||
|&emsp;&emsp;startDate|账单创建开始日期（可选）||false|string(date-time)||
|&emsp;&emsp;endDate|账单创建结束日期（可选）||false|string(date-time)||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePropertyFeeBillVO|
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
|data||PagePropertyFeeBillVO|PagePropertyFeeBillVO|
|&emsp;&emsp;records|物业费账单响应VO|array|PropertyFeeBillVO|
|&emsp;&emsp;&emsp;&emsp;billId|账单ID|integer||
|&emsp;&emsp;&emsp;&emsp;billNo|账单编号|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;billingPeriod|账期（如：2026-01）|string||
|&emsp;&emsp;&emsp;&emsp;propertyFee|物业费|number||
|&emsp;&emsp;&emsp;&emsp;waterFee|水费|number||
|&emsp;&emsp;&emsp;&emsp;electricityFee|电费|number||
|&emsp;&emsp;&emsp;&emsp;gasFee|燃气费|number||
|&emsp;&emsp;&emsp;&emsp;parkingFee|停车费|number||
|&emsp;&emsp;&emsp;&emsp;otherFee|其他费用|number||
|&emsp;&emsp;&emsp;&emsp;totalAmount|总金额|number||
|&emsp;&emsp;&emsp;&emsp;paidAmount|已缴金额|number||
|&emsp;&emsp;&emsp;&emsp;unpaidAmount|待缴金额|number||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-未缴 1-已缴 2-部分缴纳|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述|string||
|&emsp;&emsp;&emsp;&emsp;dueDate|缴费截止日期|string||
|&emsp;&emsp;&emsp;&emsp;overdue|是否逾期|boolean||
|&emsp;&emsp;&emsp;&emsp;overdueDays|逾期天数|integer||
|&emsp;&emsp;&emsp;&emsp;paidTime|缴费时间|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePropertyFeeBillVO|PagePropertyFeeBillVO|
|&emsp;&emsp;searchCount||PagePropertyFeeBillVO|PagePropertyFeeBillVO|
|&emsp;&emsp;optimizeJoinOfCountSql||boolean||
|&emsp;&emsp;maxLimit||integer(int64)||
|&emsp;&emsp;countId||string||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"records": [
			{
				"billId": 1,
				"billNo": "BILL202601130001",
				"userId": 1,
				"userName": "张三",
				"userPhone": "13800138000",
				"billingPeriod": "2026-01",
				"propertyFee": 200,
				"waterFee": 50,
				"electricityFee": 100,
				"gasFee": 30,
				"parkingFee": 150,
				"otherFee": 20,
				"totalAmount": 550,
				"paidAmount": 0,
				"unpaidAmount": 550,
				"status": 0,
				"statusText": "未缴",
				"dueDate": "",
				"overdue": false,
				"overdueDays": 0,
				"paidTime": "",
				"createTime": "",
				"updateTime": ""
			}
		],
		"total": 0,
		"size": 0,
		"current": 0,
		"orders": [
			{
				"column": "",
				"asc": true
			}
		],
		"optimizeCountSql": {},
		"searchCount": {},
		"optimizeJoinOfCountSql": true,
		"maxLimit": 0,
		"countId": "",
		"pages": 0
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


## 生成单个账单


**接口地址**:`/api/admin/property-fee/bills/generate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>为指定用户生成物业费账单</p>



**请求示例**:


```javascript
{
  "userId": 0,
  "billingPeriod": "",
  "propertyFee": 0,
  "waterFee": 0,
  "electricityFee": 0,
  "gasFee": 0,
  "parkingFee": 0,
  "otherFee": 0,
  "dueDate": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|generateBillRequest|生成账单请求|body|true|GenerateBillRequest|GenerateBillRequest|
|&emsp;&emsp;userId|||true|integer(int64)||
|&emsp;&emsp;billingPeriod|||true|string||
|&emsp;&emsp;propertyFee|||false|number||
|&emsp;&emsp;waterFee|||false|number||
|&emsp;&emsp;electricityFee|||false|number||
|&emsp;&emsp;gasFee|||false|number||
|&emsp;&emsp;parkingFee|||false|number||
|&emsp;&emsp;otherFee|||false|number||
|&emsp;&emsp;dueDate|||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPropertyFeeBill|
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
|data||PropertyFeeBill|PropertyFeeBill|
|&emsp;&emsp;billId||integer(int64)||
|&emsp;&emsp;billNo||string||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;billingPeriod||string||
|&emsp;&emsp;propertyFee||number||
|&emsp;&emsp;waterFee||number||
|&emsp;&emsp;electricityFee||number||
|&emsp;&emsp;gasFee||number||
|&emsp;&emsp;parkingFee||number||
|&emsp;&emsp;otherFee||number||
|&emsp;&emsp;totalAmount||number||
|&emsp;&emsp;paidAmount||number||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;dueDate||string(date-time)||
|&emsp;&emsp;paidTime||string(date-time)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"billId": 0,
		"billNo": "",
		"userId": 0,
		"billingPeriod": "",
		"propertyFee": 0,
		"waterFee": 0,
		"electricityFee": 0,
		"gasFee": 0,
		"parkingFee": 0,
		"otherFee": 0,
		"totalAmount": 0,
		"paidAmount": 0,
		"status": 0,
		"dueDate": "",
		"paidTime": "",
		"createTime": "",
		"updateTime": ""
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


## 批量生成账单


**接口地址**:`/api/admin/property-fee/bills/batch-generate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量为用户生成物业费账单，如果不指定用户则为所有普通用户生成</p>



**请求示例**:


```javascript
{
  "userIds": [],
  "billingPeriod": "2026-01",
  "propertyFee": 200,
  "waterFee": 50,
  "electricityFee": 100,
  "gasFee": 30,
  "parkingFee": 150,
  "otherFee": 20,
  "dueDate": "",
  "skipExistingBill": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|batchGenerateBillRequest|批量生成账单请求|body|true|BatchGenerateBillRequest|BatchGenerateBillRequest|
|&emsp;&emsp;userIds|用户ID列表（如果为空则为所有用户生成）||false|array|integer(int64)|
|&emsp;&emsp;billingPeriod|账期（如：2026-01）||true|string||
|&emsp;&emsp;propertyFee|物业费||false|number||
|&emsp;&emsp;waterFee|水费||false|number||
|&emsp;&emsp;electricityFee|电费||false|number||
|&emsp;&emsp;gasFee|燃气费||false|number||
|&emsp;&emsp;parkingFee|停车费||false|number||
|&emsp;&emsp;otherFee|其他费用||false|number||
|&emsp;&emsp;dueDate|缴费截止日期||true|string(date-time)||
|&emsp;&emsp;skipExistingBill|是否跳过已有账单的用户||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBatchGenerateBillResultVO|
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
|data||BatchGenerateBillResultVO|BatchGenerateBillResultVO|
|&emsp;&emsp;successCount|成功生成账单数|integer(int32)||
|&emsp;&emsp;skipCount|跳过的账单数（已有账单）|integer(int32)||
|&emsp;&emsp;failCount|失败的账单数|integer(int32)||
|&emsp;&emsp;totalCount|总处理数|integer(int32)||
|&emsp;&emsp;message|结果描述|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"successCount": 100,
		"skipCount": 10,
		"failCount": 0,
		"totalCount": 110,
		"message": "批量生成完成：成功100条，跳过10条，失败0条"
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


## 批量删除账单


**接口地址**:`/api/admin/property-fee/bills/batch-delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量删除物业费账单</p>



**请求示例**:


```javascript
[]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|integers|integer|body|true|array||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultInteger|
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
|data|响应数据|integer(int32)|integer(int32)|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": 0,
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


**接口地址**:`/api/admin/property-fee/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取物业费的各项统计数据，包括账单数量、金额、收缴率等</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPropertyFeeStatisticsVO|
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
|data||PropertyFeeStatisticsVO|PropertyFeeStatisticsVO|
|&emsp;&emsp;totalBills|账单总数|integer(int64)||
|&emsp;&emsp;unpaidBills|未缴账单数|integer(int64)||
|&emsp;&emsp;paidBills|已缴账单数|integer(int64)||
|&emsp;&emsp;partialPaidBills|部分缴纳账单数|integer(int64)||
|&emsp;&emsp;overdueBills|逾期账单数|integer(int64)||
|&emsp;&emsp;totalReceivableAmount|应收总金额|number||
|&emsp;&emsp;totalReceivedAmount|已收总金额|number||
|&emsp;&emsp;totalUnpaidAmount|未收总金额|number||
|&emsp;&emsp;overdueUnpaidAmount|逾期未收金额|number||
|&emsp;&emsp;currentMonthBills|当月账单数|integer(int64)||
|&emsp;&emsp;currentMonthReceivableAmount|当月应收金额|number||
|&emsp;&emsp;currentMonthReceivedAmount|当月已收金额|number||
|&emsp;&emsp;currentMonthPaymentRate|当月收缴率（百分比）|number||
|&emsp;&emsp;totalPropertyFee|物业费总额|number||
|&emsp;&emsp;totalWaterFee|水费总额|number||
|&emsp;&emsp;totalElectricityFee|电费总额|number||
|&emsp;&emsp;totalGasFee|燃气费总额|number||
|&emsp;&emsp;totalParkingFee|停车费总额|number||
|&emsp;&emsp;totalOtherFee|其他费用总额|number||
|&emsp;&emsp;overallPaymentRate|总收缴率（百分比）|number||
|&emsp;&emsp;todayReceivedAmount|今日收款金额|number||
|&emsp;&emsp;todayPaymentCount|今日收款笔数|integer(int64)||
|&emsp;&emsp;weekReceivedAmount|本周收款金额|number||
|&emsp;&emsp;weekPaymentCount|本周收款笔数|integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalBills": 1000,
		"unpaidBills": 100,
		"paidBills": 800,
		"partialPaidBills": 100,
		"overdueBills": 50,
		"totalReceivableAmount": 500000,
		"totalReceivedAmount": 400000,
		"totalUnpaidAmount": 100000,
		"overdueUnpaidAmount": 30000,
		"currentMonthBills": 200,
		"currentMonthReceivableAmount": 100000,
		"currentMonthReceivedAmount": 60000,
		"currentMonthPaymentRate": 60,
		"totalPropertyFee": 200000,
		"totalWaterFee": 50000,
		"totalElectricityFee": 100000,
		"totalGasFee": 30000,
		"totalParkingFee": 100000,
		"totalOtherFee": 20000,
		"overallPaymentRate": 80,
		"todayReceivedAmount": 5000,
		"todayPaymentCount": 10,
		"weekReceivedAmount": 30000,
		"weekPaymentCount": 50
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


## 获取逾期账单列表


**接口地址**:`/api/admin/property-fee/bills/overdue`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询所有逾期未缴的账单</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePropertyFeeBillVO|
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
|data||PagePropertyFeeBillVO|PagePropertyFeeBillVO|
|&emsp;&emsp;records|物业费账单响应VO|array|PropertyFeeBillVO|
|&emsp;&emsp;&emsp;&emsp;billId|账单ID|integer||
|&emsp;&emsp;&emsp;&emsp;billNo|账单编号|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;billingPeriod|账期（如：2026-01）|string||
|&emsp;&emsp;&emsp;&emsp;propertyFee|物业费|number||
|&emsp;&emsp;&emsp;&emsp;waterFee|水费|number||
|&emsp;&emsp;&emsp;&emsp;electricityFee|电费|number||
|&emsp;&emsp;&emsp;&emsp;gasFee|燃气费|number||
|&emsp;&emsp;&emsp;&emsp;parkingFee|停车费|number||
|&emsp;&emsp;&emsp;&emsp;otherFee|其他费用|number||
|&emsp;&emsp;&emsp;&emsp;totalAmount|总金额|number||
|&emsp;&emsp;&emsp;&emsp;paidAmount|已缴金额|number||
|&emsp;&emsp;&emsp;&emsp;unpaidAmount|待缴金额|number||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-未缴 1-已缴 2-部分缴纳|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述|string||
|&emsp;&emsp;&emsp;&emsp;dueDate|缴费截止日期|string||
|&emsp;&emsp;&emsp;&emsp;overdue|是否逾期|boolean||
|&emsp;&emsp;&emsp;&emsp;overdueDays|逾期天数|integer||
|&emsp;&emsp;&emsp;&emsp;paidTime|缴费时间|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePropertyFeeBillVO|PagePropertyFeeBillVO|
|&emsp;&emsp;searchCount||PagePropertyFeeBillVO|PagePropertyFeeBillVO|
|&emsp;&emsp;optimizeJoinOfCountSql||boolean||
|&emsp;&emsp;maxLimit||integer(int64)||
|&emsp;&emsp;countId||string||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"records": [
			{
				"billId": 1,
				"billNo": "BILL202601130001",
				"userId": 1,
				"userName": "张三",
				"userPhone": "13800138000",
				"billingPeriod": "2026-01",
				"propertyFee": 200,
				"waterFee": 50,
				"electricityFee": 100,
				"gasFee": 30,
				"parkingFee": 150,
				"otherFee": 20,
				"totalAmount": 550,
				"paidAmount": 0,
				"unpaidAmount": 550,
				"status": 0,
				"statusText": "未缴",
				"dueDate": "",
				"overdue": false,
				"overdueDays": 0,
				"paidTime": "",
				"createTime": "",
				"updateTime": ""
			}
		],
		"total": 0,
		"size": 0,
		"current": 0,
		"orders": [
			{
				"column": "",
				"asc": true
			}
		],
		"optimizeCountSql": {},
		"searchCount": {},
		"optimizeJoinOfCountSql": true,
		"maxLimit": 0,
		"countId": "",
		"pages": 0
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