# 智能社区后端API文档


**简介**:智能社区后端API文档


**HOST**:http://localhost:8080/api


**联系人**:开发团队


**Version**:1.0.0


**接口路径**:/api/v3/api-docs


[TOC]






# 商品图片管理


## 调整图片排序


**接口地址**:`/api/product/{productId}/images/sort`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量更新商品图片的显示顺序</p>



**请求示例**:


```javascript
{
  "imageOrders": [
    {
      "imageId": 0,
      "sortOrder": 0
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId|商品ID|path|true|integer(int64)||
|updateImageOrderRequest|图片排序数据|body|true|UpdateImageOrderRequest|UpdateImageOrderRequest|
|&emsp;&emsp;imageOrders|||false|array|ImageOrder|
|&emsp;&emsp;&emsp;&emsp;imageId|||false|integer||
|&emsp;&emsp;&emsp;&emsp;sortOrder|||false|integer||


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


## 设置主图


**接口地址**:`/api/product/images/{imageId}/set-main`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>将指定图片设置为商品主图（封面）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|imageId|图片ID|path|true|integer(int64)||


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


## 获取商品图片列表


**接口地址**:`/api/product/{productId}/images`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定商品的所有图片，按排序顺序返回</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId|商品ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListProductImage|
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
|data|响应数据|array|ProductImage|
|&emsp;&emsp;imageId||integer(int64)||
|&emsp;&emsp;productId||integer(int64)||
|&emsp;&emsp;imageUrl||string||
|&emsp;&emsp;isMain||integer(int32)||
|&emsp;&emsp;sortOrder||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"imageId": 0,
			"productId": 0,
			"imageUrl": "",
			"isMain": 0,
			"sortOrder": 0,
			"createTime": "",
			"updateTime": ""
		}
	],
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


## 上传商品图片


**接口地址**:`/api/product/{productId}/images`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>上传商品图片，支持设置为主图</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId|商品ID|path|true|integer(int64)||
|file|图片文件|query|true|file||
|isMain|是否设为主图|query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductImage|
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
|data||ProductImage|ProductImage|
|&emsp;&emsp;imageId||integer(int64)||
|&emsp;&emsp;productId||integer(int64)||
|&emsp;&emsp;imageUrl||string||
|&emsp;&emsp;isMain||integer(int32)||
|&emsp;&emsp;sortOrder||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"imageId": 0,
		"productId": 0,
		"imageUrl": "",
		"isMain": 0,
		"sortOrder": 0,
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


## 获取图片详情


**接口地址**:`/api/product/images/{imageId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定图片的详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|imageId|图片ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductImage|
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
|data||ProductImage|ProductImage|
|&emsp;&emsp;imageId||integer(int64)||
|&emsp;&emsp;productId||integer(int64)||
|&emsp;&emsp;imageUrl||string||
|&emsp;&emsp;isMain||integer(int32)||
|&emsp;&emsp;sortOrder||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"imageId": 0,
		"productId": 0,
		"imageUrl": "",
		"isMain": 0,
		"sortOrder": 0,
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


## 删除图片


**接口地址**:`/api/product/images/{imageId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除指定的商品图片</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|imageId|图片ID|path|true|integer(int64)||


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


# 论坛评论管理


## 点赞评论


**接口地址**:`/api/forum/comment/{commentId}/like`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>给评论点赞</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentId|评论ID|path|true|integer(int64)||


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


## 取消点赞


**接口地址**:`/api/forum/comment/{commentId}/like`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>取消评论点赞</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentId|评论ID|path|true|integer(int64)||


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


## 发表评论


**接口地址**:`/api/forum/comment/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>发表评论或回复</p>



**请求示例**:


```javascript
{
  "postId": 0,
  "parentId": 0,
  "replyToUserId": 0,
  "content": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createCommentRequest|创建评论请求|body|true|CreateCommentRequest|CreateCommentRequest|
|&emsp;&emsp;postId|帖子ID||true|integer(int64)||
|&emsp;&emsp;parentId|父评论ID，0表示一级评论||false|integer(int64)||
|&emsp;&emsp;replyToUserId|回复的用户ID||false|integer(int64)||
|&emsp;&emsp;content|评论内容||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultLong|
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
|data|响应数据|integer(int64)|integer(int64)|
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


## 获取帖子评论


**接口地址**:`/api/forum/comment/post/{postId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取帖子的评论列表（树形结构）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageCommentResponse|
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
|data||PageCommentResponse|PageCommentResponse|
|&emsp;&emsp;records|评论响应|array|CommentResponse|
|&emsp;&emsp;&emsp;&emsp;commentId|评论ID|integer||
|&emsp;&emsp;&emsp;&emsp;postId|帖子ID|integer||
|&emsp;&emsp;&emsp;&emsp;userId|评论用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|评论用户名|string||
|&emsp;&emsp;&emsp;&emsp;userAvatar|评论用户头像|string||
|&emsp;&emsp;&emsp;&emsp;parentId|父评论ID|integer||
|&emsp;&emsp;&emsp;&emsp;replyToUserId|回复的用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;replyToUserName|回复的用户名|string||
|&emsp;&emsp;&emsp;&emsp;content|评论内容|string||
|&emsp;&emsp;&emsp;&emsp;likeCount|点赞数|integer||
|&emsp;&emsp;&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;replies|子评论列表|array|CommentResponse|
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageCommentResponse|PageCommentResponse|
|&emsp;&emsp;searchCount||PageCommentResponse|PageCommentResponse|
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
				"commentId": 0,
				"postId": 0,
				"userId": 0,
				"userName": "",
				"userAvatar": "",
				"parentId": 0,
				"replyToUserId": 0,
				"replyToUserName": "",
				"content": "",
				"likeCount": 0,
				"isLiked": true,
				"createTime": "",
				"replies": [
					{
						"commentId": 0,
						"postId": 0,
						"userId": 0,
						"userName": "",
						"userAvatar": "",
						"parentId": 0,
						"replyToUserId": 0,
						"replyToUserName": "",
						"content": "",
						"likeCount": 0,
						"isLiked": true,
						"createTime": "",
						"replies": [
							{}
						]
					}
				]
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


## 删除评论


**接口地址**:`/api/forum/comment/{commentId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除评论</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentId|评论ID|path|true|integer(int64)||


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


# 通知管理


## 标记已读


**接口地址**:`/api/notification/{notificationId}/read`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>标记通知为已读</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|notificationId|通知ID|path|true|integer(int64)||


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


## 全部已读


**接口地址**:`/api/notification/read-all`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>标记所有通知为已读</p>



**请求参数**:


暂无


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


## 未读数量


**接口地址**:`/api/notification/unread-count`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取未读通知数量</p>



**请求参数**:


暂无


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


## 获取通知列表


**接口地址**:`/api/notification/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取我的通知列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageNotificationResponse|
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
|data||PageNotificationResponse|PageNotificationResponse|
|&emsp;&emsp;records|通知响应|array|NotificationResponse|
|&emsp;&emsp;&emsp;&emsp;notificationId|通知ID|integer||
|&emsp;&emsp;&emsp;&emsp;type|通知类型 1-系统通知 2-点赞通知 3-评论通知 4-好友申请 5-私信通知|integer||
|&emsp;&emsp;&emsp;&emsp;title|通知标题|string||
|&emsp;&emsp;&emsp;&emsp;content|通知内容|string||
|&emsp;&emsp;&emsp;&emsp;relatedId|关联ID|integer||
|&emsp;&emsp;&emsp;&emsp;isRead|是否已读 0-未读 1-已读|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageNotificationResponse|PageNotificationResponse|
|&emsp;&emsp;searchCount||PageNotificationResponse|PageNotificationResponse|
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
				"notificationId": 0,
				"type": 0,
				"title": "",
				"content": "",
				"relatedId": 0,
				"isRead": 0,
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


## 删除通知


**接口地址**:`/api/notification/{notificationId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除通知</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|notificationId|通知ID|path|true|integer(int64)||


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


# 管理员论坛板块管理


## 查询板块详情


**接口地址**:`/api/admin/forum/section/{sectionId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询指定板块的详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sectionId|板块ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultSectionDetailVO|
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
|data||SectionDetailVO|SectionDetailVO|
|&emsp;&emsp;sectionId|板块ID|integer(int64)||
|&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;sectionDesc|板块描述|string||
|&emsp;&emsp;iconUrl|板块图标URL|string||
|&emsp;&emsp;sortOrder|排序序号|integer(int32)||
|&emsp;&emsp;postCount|帖子数量|integer(int32)||
|&emsp;&emsp;status|状态 0-禁用 1-启用|integer(int32)||
|&emsp;&emsp;statusDesc|状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"sectionId": 0,
		"sectionName": "",
		"sectionDesc": "",
		"iconUrl": "",
		"sortOrder": 0,
		"postCount": 0,
		"status": 0,
		"statusDesc": "",
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


## 更新板块


**接口地址**:`/api/admin/forum/section/{sectionId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员更新板块信息</p>



**请求示例**:


```javascript
{
  "sectionName": "社区公告",
  "sectionDesc": "社区官方公告和重要通知",
  "iconUrl": "https://example.com/icon.png",
  "sortOrder": 1,
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sectionId|板块ID|path|true|integer(int64)||
|updateSectionRequest|更新请求|body|true|UpdateSectionRequest|UpdateSectionRequest|
|&emsp;&emsp;sectionName|板块名称||true|string||
|&emsp;&emsp;sectionDesc|板块描述||false|string||
|&emsp;&emsp;iconUrl|板块图标URL||false|string||
|&emsp;&emsp;sortOrder|排序序号||true|integer(int32)||
|&emsp;&emsp;status|状态 0-禁用 1-启用||true|integer(int32)||


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


## 删除板块


**接口地址**:`/api/admin/forum/section/{sectionId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员删除板块（板块下不能有帖子）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sectionId|板块ID|path|true|integer(int64)||


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


## 启用-禁用板块


**接口地址**:`/api/admin/forum/section/{sectionId}/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员启用或禁用板块</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sectionId|板块ID|path|true|integer(int64)||
|status|状态（0-禁用，1-启用）|query|true|integer(int32)||


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


## 查询所有板块


**接口地址**:`/api/admin/forum/section/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有板块，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "sectionName": "公告",
  "status": 1,
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminSectionQueryRequest|查询条件|body|true|AdminSectionQueryRequest|AdminSectionQueryRequest|
|&emsp;&emsp;sectionName|板块名称（模糊搜索）||false|string||
|&emsp;&emsp;status|状态（0-禁用，1-启用）||false|integer(int32)||
|&emsp;&emsp;pageNum|页码||true|integer(int32)||
|&emsp;&emsp;pageSize|每页大小||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageSectionDetailVO|
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
|data||PageSectionDetailVO|PageSectionDetailVO|
|&emsp;&emsp;records|板块详情|array|SectionDetailVO|
|&emsp;&emsp;&emsp;&emsp;sectionId|板块ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;&emsp;&emsp;sectionDesc|板块描述|string||
|&emsp;&emsp;&emsp;&emsp;iconUrl|板块图标URL|string||
|&emsp;&emsp;&emsp;&emsp;sortOrder|排序序号|integer||
|&emsp;&emsp;&emsp;&emsp;postCount|帖子数量|integer||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-禁用 1-启用|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|状态描述|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageSectionDetailVO|PageSectionDetailVO|
|&emsp;&emsp;searchCount||PageSectionDetailVO|PageSectionDetailVO|
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
				"sectionId": 0,
				"sectionName": "",
				"sectionDesc": "",
				"iconUrl": "",
				"sortOrder": 0,
				"postCount": 0,
				"status": 0,
				"statusDesc": "",
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


## 创建板块


**接口地址**:`/api/admin/forum/section/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员创建新的论坛板块</p>



**请求示例**:


```javascript
{
  "sectionName": "社区公告",
  "sectionDesc": "社区官方公告和重要通知",
  "iconUrl": "https://example.com/icon.png",
  "sortOrder": 1,
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createSectionRequest|创建请求|body|true|CreateSectionRequest|CreateSectionRequest|
|&emsp;&emsp;sectionName|板块名称||true|string||
|&emsp;&emsp;sectionDesc|板块描述||false|string||
|&emsp;&emsp;iconUrl|板块图标URL||false|string||
|&emsp;&emsp;sortOrder|排序序号||true|integer(int32)||
|&emsp;&emsp;status|状态 0-禁用 1-启用||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultLong|
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
|data|响应数据|integer(int64)|integer(int64)|
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


## 板块统计


**接口地址**:`/api/admin/forum/section/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取板块统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 订单管理接口


## 确认收货-完成订单


**接口地址**:`/api/orders/{orderId}/confirm`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>确认收货，订单状态变为已完成</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderId|订单ID|path|true|integer(int64)||


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


## 取消订单


**接口地址**:`/api/orders/{orderId}/cancel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>取消待支付的订单</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderId|订单ID|path|true|integer(int64)||


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


## 创建商品订单


**接口地址**:`/api/orders/product/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>从购物车创建商品订单</p>



**请求示例**:


```javascript
{
  "storeId": 0,
  "cartItemIds": [],
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createProductOrderRequest|创建商品订单请求|body|true|CreateProductOrderRequest|CreateProductOrderRequest|
|&emsp;&emsp;storeId|取货门店ID||true|integer(int64)||
|&emsp;&emsp;cartItemIds|购物车项ID列表||true|array|integer(int64)|
|&emsp;&emsp;remark|订单备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultOrderDetailVO|
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
|data||OrderDetailVO|OrderDetailVO|
|&emsp;&emsp;orderId|订单ID|integer(int64)||
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;orderType|订单类型(PRODUCT-商品订单,RECHARGE-充值,PROPERTY_FEE-物业费等)|string||
|&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;paymentMethod|支付方式(ALIPAY-支付宝,WECHAT-微信,WALLET-钱包)|string||
|&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer(int32)||
|&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;storeId|取货门店ID|integer(int64)||
|&emsp;&emsp;storeName|取货门店名称|string||
|&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;relatedId|关联业务ID|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;callbackTime|支付时间|string(date-time)||
|&emsp;&emsp;pickUpTime|取货时间|string(date-time)||
|&emsp;&emsp;finishTime|完成时间|string(date-time)||
|&emsp;&emsp;expireTime|过期时间|string(date-time)||
|&emsp;&emsp;products|订单商品信息|array|OrderProductVO|
|&emsp;&emsp;&emsp;&emsp;productId|商品ID|integer||
|&emsp;&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;productImage|商品图片|string||
|&emsp;&emsp;&emsp;&emsp;quantity|商品数量|integer||
|&emsp;&emsp;&emsp;&emsp;price|商品单价|number||
|&emsp;&emsp;&emsp;&emsp;subtotal|小计金额|number||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderId": 0,
		"orderNo": "",
		"userId": 0,
		"userName": "",
		"userPhone": "",
		"orderType": "",
		"orderTypeDesc": "",
		"amount": 0,
		"paymentMethod": "",
		"paymentMethodDesc": "",
		"status": 0,
		"statusDesc": "",
		"storeId": 0,
		"storeName": "",
		"description": "",
		"relatedId": 0,
		"createTime": "",
		"callbackTime": "",
		"pickUpTime": "",
		"finishTime": "",
		"expireTime": "",
		"products": [
			{
				"productId": 0,
				"productName": "",
				"productImage": "",
				"quantity": 0,
				"price": 0,
				"subtotal": 0
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


## 查询订单详情


**接口地址**:`/api/orders/{orderId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>根据订单ID查询订单详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderId|订单ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultOrderDetailVO|
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
|data||OrderDetailVO|OrderDetailVO|
|&emsp;&emsp;orderId|订单ID|integer(int64)||
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;orderType|订单类型(PRODUCT-商品订单,RECHARGE-充值,PROPERTY_FEE-物业费等)|string||
|&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;paymentMethod|支付方式(ALIPAY-支付宝,WECHAT-微信,WALLET-钱包)|string||
|&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer(int32)||
|&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;storeId|取货门店ID|integer(int64)||
|&emsp;&emsp;storeName|取货门店名称|string||
|&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;relatedId|关联业务ID|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;callbackTime|支付时间|string(date-time)||
|&emsp;&emsp;pickUpTime|取货时间|string(date-time)||
|&emsp;&emsp;finishTime|完成时间|string(date-time)||
|&emsp;&emsp;expireTime|过期时间|string(date-time)||
|&emsp;&emsp;products|订单商品信息|array|OrderProductVO|
|&emsp;&emsp;&emsp;&emsp;productId|商品ID|integer||
|&emsp;&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;productImage|商品图片|string||
|&emsp;&emsp;&emsp;&emsp;quantity|商品数量|integer||
|&emsp;&emsp;&emsp;&emsp;price|商品单价|number||
|&emsp;&emsp;&emsp;&emsp;subtotal|小计金额|number||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderId": 0,
		"orderNo": "",
		"userId": 0,
		"userName": "",
		"userPhone": "",
		"orderType": "",
		"orderTypeDesc": "",
		"amount": 0,
		"paymentMethod": "",
		"paymentMethodDesc": "",
		"status": 0,
		"statusDesc": "",
		"storeId": 0,
		"storeName": "",
		"description": "",
		"relatedId": 0,
		"createTime": "",
		"callbackTime": "",
		"pickUpTime": "",
		"finishTime": "",
		"expireTime": "",
		"products": [
			{
				"productId": 0,
				"productName": "",
				"productImage": "",
				"quantity": 0,
				"price": 0,
				"subtotal": 0
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


## 查询我的所有订单


**接口地址**:`/api/orders/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>分页查询当前用户的所有订单</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageOrderListVO|
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
|data||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;records|订单列表项|array|OrderListVO|
|&emsp;&emsp;&emsp;&emsp;orderId|订单ID|integer||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;&emsp;&emsp;storeName|取货门店名称(商品订单)|string||
|&emsp;&emsp;&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;&emsp;&emsp;productCount|商品数量(商品订单)|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;expireTime|过期时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;searchCount||PageOrderListVO|PageOrderListVO|
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
				"orderId": 0,
				"orderNo": "",
				"userId": 0,
				"userName": "",
				"userPhone": "",
				"orderType": "",
				"orderTypeDesc": "",
				"amount": 0,
				"status": 0,
				"statusDesc": "",
				"paymentMethod": "",
				"paymentMethodDesc": "",
				"storeName": "",
				"description": "",
				"productCount": 0,
				"createTime": "",
				"expireTime": ""
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


## 按类型查询订单


**接口地址**:`/api/orders/list/by-type`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>按类型筛选订单：PRODUCT-商品订单，RECHARGE-充值，PROPERTY_FEE-物业费，PARKING_FEE-停车费等</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderType|订单类型|query|true|string||
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageOrderListVO|
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
|data||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;records|订单列表项|array|OrderListVO|
|&emsp;&emsp;&emsp;&emsp;orderId|订单ID|integer||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;&emsp;&emsp;storeName|取货门店名称(商品订单)|string||
|&emsp;&emsp;&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;&emsp;&emsp;productCount|商品数量(商品订单)|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;expireTime|过期时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;searchCount||PageOrderListVO|PageOrderListVO|
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
				"orderId": 0,
				"orderNo": "",
				"userId": 0,
				"userName": "",
				"userPhone": "",
				"orderType": "",
				"orderTypeDesc": "",
				"amount": 0,
				"status": 0,
				"statusDesc": "",
				"paymentMethod": "",
				"paymentMethodDesc": "",
				"storeName": "",
				"description": "",
				"productCount": 0,
				"createTime": "",
				"expireTime": ""
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


## 按状态查询订单


**接口地址**:`/api/orders/list/by-status`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>按状态筛选订单：0-待支付，1-支付中，2-支付成功/待取货，3-已完成，4-支付失败，5-已取消，6-已退款</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|status|订单状态|query|true|integer(int32)||
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageOrderListVO|
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
|data||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;records|订单列表项|array|OrderListVO|
|&emsp;&emsp;&emsp;&emsp;orderId|订单ID|integer||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;&emsp;&emsp;storeName|取货门店名称(商品订单)|string||
|&emsp;&emsp;&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;&emsp;&emsp;productCount|商品数量(商品订单)|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;expireTime|过期时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;searchCount||PageOrderListVO|PageOrderListVO|
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
				"orderId": 0,
				"orderNo": "",
				"userId": 0,
				"userName": "",
				"userPhone": "",
				"orderType": "",
				"orderTypeDesc": "",
				"amount": 0,
				"status": 0,
				"statusDesc": "",
				"paymentMethod": "",
				"paymentMethodDesc": "",
				"storeName": "",
				"description": "",
				"productCount": 0,
				"createTime": "",
				"expireTime": ""
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


# 物业管理-事项投诉


## 处理投诉（管理员）


**接口地址**:`/api/complaint/admin/{complaintId}/handle`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员处理用户提交的投诉。可以将状态更新为处理中、已完成或已驳回，并填写处理结果。</p>



**请求示例**:


```javascript
{
  "status": 2,
  "handleResult": "已安排工作人员进行处理，问题已解决"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintId|投诉ID|path|true|integer(int64)||
|complaintHandleRequest|处理请求|body|true|ComplaintHandleRequest|ComplaintHandleRequest|
|&emsp;&emsp;status|处理状态：1-处理中，2-已完成，3-已驳回||true|integer(int32)||
|&emsp;&emsp;handleResult|处理结果||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|处理成功||
|400|参数错误|ResultVoid|
|401|未授权，token无效或过期|ResultComplaintResponse|
|403|Forbidden|ResultVoid|
|404|投诉记录不存在||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ComplaintResponse|ComplaintResponse|
|&emsp;&emsp;complaintId|投诉ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"complaintId": 1,
		"userId": 1,
		"complaintType": "噪音扰民",
		"description": "楼上住户深夜装修，噪音严重影响休息",
		"location": "3号楼2单元1002",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
	},
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


## 提交事项投诉


**接口地址**:`/api/complaint/submit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`application/json,*/*`


**接口描述**:<p>用户提交事项投诉。需要选择投诉类型（如噪音扰民、违规停车等）并详细描述投诉内容。提交后状态为待处理，社区管理人员会及时处理。</p>



**请求示例**:


```javascript
{
  "complaintType": "噪音扰民",
  "description": "楼上住户深夜装修，噪音严重影响休息",
  "location": "3号楼2单元1002"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintRequest|事项投诉请求参数|body|true|ComplaintRequest|ComplaintRequest|
|&emsp;&emsp;complaintType|投诉类型,可用值:噪音扰民,违规停车,垃圾处理,物业服务,安全问题,设施损坏,其他||true|string||
|&emsp;&emsp;description|投诉描述，请详细描述投诉内容和诉求||true|string||
|&emsp;&emsp;location|投诉位置||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|提交成功|Result|
|400|请求参数错误|ResultVoid|
|401|未授权，token无效或过期|ResultComplaintResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ComplaintResponse|ComplaintResponse|
|&emsp;&emsp;complaintId|投诉ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"complaintId": 1,
		"userId": 1,
		"complaintType": "噪音扰民",
		"description": "楼上住户深夜装修，噪音严重影响休息",
		"location": "3号楼2单元1002",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
	},
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


## 查询所有投诉列表（管理员）


**接口地址**:`/api/complaint/admin/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询用户提交的投诉信息。支持按投诉类型、处理状态、用户ID、关键词等条件筛选，支持分页查询。</p>



**请求示例**:


```javascript
{
  "complaintType": "噪音扰民",
  "status": 0,
  "userId": 1,
  "keyword": "噪音",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintQueryRequest|查询条件|body|true|ComplaintQueryRequest|ComplaintQueryRequest|
|&emsp;&emsp;complaintType|投诉类型（可选）||false|string||
|&emsp;&emsp;status|处理状态（可选）：0-待处理，1-处理中，2-已完成，3-已驳回||false|integer(int32)||
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;keyword|关键词搜索（可选，搜索投诉描述和位置）||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权，token无效或过期|ResultPageComplaintResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageComplaintResponse|PageComplaintResponse|
|&emsp;&emsp;records|事项投诉响应数据|array|ComplaintResponse|
|&emsp;&emsp;&emsp;&emsp;complaintId|投诉ID，唯一标识|integer||
|&emsp;&emsp;&emsp;&emsp;userId|提交用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|提交时间|string||
|&emsp;&emsp;&emsp;&emsp;handleTime|处理时间，未处理时为null|string||
|&emsp;&emsp;&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer||
|&emsp;&emsp;&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageComplaintResponse|PageComplaintResponse|
|&emsp;&emsp;searchCount||PageComplaintResponse|PageComplaintResponse|
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
				"complaintId": 1,
				"userId": 1,
				"complaintType": "噪音扰民",
				"description": "楼上住户深夜装修，噪音严重影响休息",
				"location": "3号楼2单元1002",
				"status": 2,
				"statusText": "已完成",
				"createTime": "",
				"handleTime": "",
				"handleUserId": 1,
				"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
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


## 查询投诉详情


**接口地址**:`/api/complaint/{complaintId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定投诉的详细信息，包括处理状态、处理时间、处理人员、处理结果等完整信息。只能查询自己提交的投诉记录。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintId|投诉ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权，token无效或过期|ResultComplaintResponse|
|403|Forbidden|ResultVoid|
|404|投诉记录不存在或无权访问||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ComplaintResponse|ComplaintResponse|
|&emsp;&emsp;complaintId|投诉ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"complaintId": 1,
		"userId": 1,
		"complaintType": "噪音扰民",
		"description": "楼上住户深夜装修，噪音严重影响休息",
		"location": "3号楼2单元1002",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
	},
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


## 查询我的投诉列表


**接口地址**:`/api/complaint/my-list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户提交的所有投诉记录。支持按处理状态筛选（待处理、处理中、已完成、已驳回），支持分页查询。结果按创建时间倒序排列，最新的记录在前面。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码，从1开始|query|true|integer(int32)||
|pageSize|每页记录数|query|true|integer(int32)||
|status|处理状态筛选（可选）,可用值:0,1,2,3|query|false|integer||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权，token无效或过期|ResultPageComplaintResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageComplaintResponse|PageComplaintResponse|
|&emsp;&emsp;records|事项投诉响应数据|array|ComplaintResponse|
|&emsp;&emsp;&emsp;&emsp;complaintId|投诉ID，唯一标识|integer||
|&emsp;&emsp;&emsp;&emsp;userId|提交用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|提交时间|string||
|&emsp;&emsp;&emsp;&emsp;handleTime|处理时间，未处理时为null|string||
|&emsp;&emsp;&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer||
|&emsp;&emsp;&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageComplaintResponse|PageComplaintResponse|
|&emsp;&emsp;searchCount||PageComplaintResponse|PageComplaintResponse|
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
				"complaintId": 1,
				"userId": 1,
				"complaintType": "噪音扰民",
				"description": "楼上住户深夜装修，噪音严重影响休息",
				"location": "3号楼2单元1002",
				"status": 2,
				"statusText": "已完成",
				"createTime": "",
				"handleTime": "",
				"handleUserId": 1,
				"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
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


# 文件上传


## 上传多张图片


**接口地址**:`/api/upload/images`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:<p>批量上传多张图片文件，返回所有图片URL（逗号分隔）及详细信息。支持jpg、png、gif、webp等格式，单个文件大小不超过10MB，最多支持10张图片。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|files|图片文件数组（最多10张，每张大小不超过10MB）|query|true|array|file|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|上传成功||
|400|参数错误或文件格式不支持|ResultVoid|
|401|未授权（token无效或过期）|ResultMultipleFileUploadResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常|ResultMultipleFileUploadResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||MultipleFileUploadResponse|MultipleFileUploadResponse|
|&emsp;&emsp;urls|所有文件URL，逗号分隔|string||
|&emsp;&emsp;successCount|上传成功的文件数量|integer(int32)||
|&emsp;&emsp;files|文件上传响应|array|FileUploadResponse|
|&emsp;&emsp;&emsp;&emsp;url|文件访问URL|string||
|&emsp;&emsp;&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;&emsp;&emsp;size|文件大小（字节）|integer||
|&emsp;&emsp;&emsp;&emsp;contentType|文件类型|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"urls": "http://localhost:8080/uploads/images/20260107/abc123.jpg,http://localhost:8080/uploads/images/20260107/def456.jpg",
		"successCount": 3,
		"files": [
			{
				"url": "",
				"originalFilename": "",
				"size": 0,
				"contentType": ""
			}
		]
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||MultipleFileUploadResponse|MultipleFileUploadResponse|
|&emsp;&emsp;urls|所有文件URL，逗号分隔|string||
|&emsp;&emsp;successCount|上传成功的文件数量|integer(int32)||
|&emsp;&emsp;files|文件上传响应|array|FileUploadResponse|
|&emsp;&emsp;&emsp;&emsp;url|文件访问URL|string||
|&emsp;&emsp;&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;&emsp;&emsp;size|文件大小（字节）|integer||
|&emsp;&emsp;&emsp;&emsp;contentType|文件类型|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"urls": "http://localhost:8080/uploads/images/20260107/abc123.jpg,http://localhost:8080/uploads/images/20260107/def456.jpg",
		"successCount": 3,
		"files": [
			{
				"url": "",
				"originalFilename": "",
				"size": 0,
				"contentType": ""
			}
		]
	},
	"timestamp": 1640995200000
}
```


## 上传单张图片


**接口地址**:`/api/upload/image`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>上传单张图片文件，返回图片访问URL。支持jpg、png、gif、webp等格式，单个文件大小不超过10MB。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|图片文件（支持jpg、png、gif、webp等格式，大小不超过10MB）|query|true|file||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|上传成功||
|400|参数错误或文件格式不支持|ResultVoid|
|401|未授权（token无效或过期）|ResultFileUploadResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常|ResultFileUploadResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||FileUploadResponse|FileUploadResponse|
|&emsp;&emsp;url|文件访问URL|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;size|文件大小（字节）|integer(int64)||
|&emsp;&emsp;contentType|文件类型|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"url": "",
		"originalFilename": "",
		"size": 0,
		"contentType": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||FileUploadResponse|FileUploadResponse|
|&emsp;&emsp;url|文件访问URL|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;size|文件大小（字节）|integer(int64)||
|&emsp;&emsp;contentType|文件类型|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"url": "",
		"originalFilename": "",
		"size": 0,
		"contentType": ""
	},
	"timestamp": 1640995200000
}
```


# 测试接口


## 信息接口


**接口地址**:`/api/test/info`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>接收并返回信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|info|信息内容|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## Hello接口


**接口地址**:`/api/test/hello`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>返回Hello World消息</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 回显接口


**接口地址**:`/api/test/echo/{message}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>返回传入的消息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|message|要回显的消息|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


# 公告管理


## 发布公告（管理员）


**接口地址**:`/api/announcement/publish`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员输入公告标题和内容，发布至用户消息系统，供用户查看</p>



**请求示例**:


```javascript
{
  "title": "关于小区停水的通知",
  "content": "尊敬的各位业主：\n因市政水管维修，本小区将于2026年1月10日（周五）上午8:00-12:00进行停水。\n请各位业主提前做好储水准备，给您带来的不便敬请谅解。"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|announcementPublishRequest|发布公告请求|body|true|AnnouncementPublishRequest|AnnouncementPublishRequest|
|&emsp;&emsp;title|公告标题||true|string||
|&emsp;&emsp;content|公告内容||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|发布成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultAnnouncementResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常|ResultAnnouncementResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||AnnouncementResponse|AnnouncementResponse|
|&emsp;&emsp;announceId|公告ID|integer(int64)||
|&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;publishUserId|发布人ID|integer(int64)||
|&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;readCount|阅读次数|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"announceId": 1,
		"title": "关于小区停水的通知",
		"content": "因水管维修，明天上午8:00-12:00停水...",
		"publishUserId": 100,
		"publishUserName": "张三",
		"publishTime": "",
		"readCount": 128
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||AnnouncementResponse|AnnouncementResponse|
|&emsp;&emsp;announceId|公告ID|integer(int64)||
|&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;publishUserId|发布人ID|integer(int64)||
|&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;readCount|阅读次数|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"announceId": 1,
		"title": "关于小区停水的通知",
		"content": "因水管维修，明天上午8:00-12:00停水...",
		"publishUserId": 100,
		"publishUserName": "张三",
		"publishTime": "",
		"readCount": 128
	},
	"timestamp": 1640995200000
}
```


## 公告详情


**接口地址**:`/api/announcement/{announceId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取公告详细信息,并增加阅读次数</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|announceId|公告ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultAnnouncementResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如公告不存在）|ResultAnnouncementResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||AnnouncementResponse|AnnouncementResponse|
|&emsp;&emsp;announceId|公告ID|integer(int64)||
|&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;publishUserId|发布人ID|integer(int64)||
|&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;readCount|阅读次数|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"announceId": 1,
		"title": "关于小区停水的通知",
		"content": "因水管维修，明天上午8:00-12:00停水...",
		"publishUserId": 100,
		"publishUserName": "张三",
		"publishTime": "",
		"readCount": 128
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||AnnouncementResponse|AnnouncementResponse|
|&emsp;&emsp;announceId|公告ID|integer(int64)||
|&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;publishUserId|发布人ID|integer(int64)||
|&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;readCount|阅读次数|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"announceId": 1,
		"title": "关于小区停水的通知",
		"content": "因水管维修，明天上午8:00-12:00停水...",
		"publishUserId": 100,
		"publishUserName": "张三",
		"publishTime": "",
		"readCount": 128
	},
	"timestamp": 1640995200000
}
```


## 公告列表查询


**接口地址**:`/api/announcement/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>分页查询社区公告列表
支持功能:</p>
<ol>
<li>关键词搜索(keyword)</li>
<li>检索范围选择: ALL-全文检索, TITLE-仅标题(searchScope)</li>
<li>时间范围筛选: ALL-全部, WEEK-最近一周, MONTH-最近一月, YEAR-最近一年(timeRange)</li>
<li>排序方式: TIME-按时间排序, RELEVANCE-按相关度排序(sortType)</li>
</ol>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|request|公告查询请求|query|true|AnnouncementQueryRequest|AnnouncementQueryRequest|
|&emsp;&emsp;keyword|关键词(搜索标题和内容)||false|string||
|&emsp;&emsp;searchScope|检索范围: ALL-全文检索, TITLE-仅标题,可用值:ALL,TITLE||false|string||
|&emsp;&emsp;timeRange|时间范围: ALL-全部, WEEK-最近一周, MONTH-最近一月, YEAR-最近一年,可用值:ALL,WEEK,MONTH,YEAR||false|string||
|&emsp;&emsp;sortType|排序方式: TIME-按时间排序, RELEVANCE-按相关度排序(仅在有关键词时生效),可用值:TIME,RELEVANCE||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultPageAnnouncementResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageAnnouncementResponse|PageAnnouncementResponse|
|&emsp;&emsp;records|公告响应|array|AnnouncementResponse|
|&emsp;&emsp;&emsp;&emsp;announceId|公告ID|integer||
|&emsp;&emsp;&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;&emsp;&emsp;publishUserId|发布人ID|integer||
|&emsp;&emsp;&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;&emsp;&emsp;publishTime|发布时间|string||
|&emsp;&emsp;&emsp;&emsp;readCount|阅读次数|integer||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageAnnouncementResponse|PageAnnouncementResponse|
|&emsp;&emsp;searchCount||PageAnnouncementResponse|PageAnnouncementResponse|
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
				"announceId": 1,
				"title": "关于小区停水的通知",
				"content": "因水管维修，明天上午8:00-12:00停水...",
				"publishUserId": 100,
				"publishUserName": "张三",
				"publishTime": "",
				"readCount": 128
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


# 管理员投诉管理


## 处理投诉


**接口地址**:`/api/admin/complaint/{complaintId}/handle`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员处理投诉</p>



**请求示例**:


```javascript
{
  "status": 2,
  "handleResult": "已安排工作人员进行处理，问题已解决"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintId|投诉ID|path|true|integer(int64)||
|complaintHandleRequest|处理请求|body|true|ComplaintHandleRequest|ComplaintHandleRequest|
|&emsp;&emsp;status|处理状态：1-处理中，2-已完成，3-已驳回||true|integer(int32)||
|&emsp;&emsp;handleResult|处理结果||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultComplaintResponse|
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
|data||ComplaintResponse|ComplaintResponse|
|&emsp;&emsp;complaintId|投诉ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"complaintId": 1,
		"userId": 1,
		"complaintType": "噪音扰民",
		"description": "楼上住户深夜装修，噪音严重影响休息",
		"location": "3号楼2单元1002",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
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


## 查询所有投诉


**接口地址**:`/api/admin/complaint/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有投诉，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "complaintType": "噪音扰民",
  "status": 0,
  "userId": 1,
  "keyword": "噪音",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintQueryRequest|查询条件|body|true|ComplaintQueryRequest|ComplaintQueryRequest|
|&emsp;&emsp;complaintType|投诉类型（可选）||false|string||
|&emsp;&emsp;status|处理状态（可选）：0-待处理，1-处理中，2-已完成，3-已驳回||false|integer(int32)||
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;keyword|关键词搜索（可选，搜索投诉描述和位置）||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageComplaintResponse|
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
|data||PageComplaintResponse|PageComplaintResponse|
|&emsp;&emsp;records|事项投诉响应数据|array|ComplaintResponse|
|&emsp;&emsp;&emsp;&emsp;complaintId|投诉ID，唯一标识|integer||
|&emsp;&emsp;&emsp;&emsp;userId|提交用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;complaintType|投诉类型|string||
|&emsp;&emsp;&emsp;&emsp;description|投诉描述|string||
|&emsp;&emsp;&emsp;&emsp;location|投诉位置|string||
|&emsp;&emsp;&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|提交时间|string||
|&emsp;&emsp;&emsp;&emsp;handleTime|处理时间，未处理时为null|string||
|&emsp;&emsp;&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer||
|&emsp;&emsp;&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageComplaintResponse|PageComplaintResponse|
|&emsp;&emsp;searchCount||PageComplaintResponse|PageComplaintResponse|
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
				"complaintId": 1,
				"userId": 1,
				"complaintType": "噪音扰民",
				"description": "楼上住户深夜装修，噪音严重影响休息",
				"location": "3号楼2单元1002",
				"status": 2,
				"statusText": "已完成",
				"createTime": "",
				"handleTime": "",
				"handleUserId": 1,
				"handleResult": "已加强噪音管理，并与楼上住户沟通，问题已解决"
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


## 批量处理投诉


**接口地址**:`/api/admin/complaint/batch-handle`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员批量处理投诉</p>



**请求示例**:


```javascript
{
  "status": 2,
  "handleResult": "已安排工作人员进行处理，问题已解决"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|complaintIds|投诉ID列表|query|true|array|integer|
|complaintHandleRequest|处理请求|body|true|ComplaintHandleRequest|ComplaintHandleRequest|
|&emsp;&emsp;status|处理状态：1-处理中，2-已完成，3-已驳回||true|integer(int32)||
|&emsp;&emsp;handleResult|处理结果||true|string||


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


## 投诉统计


**接口地址**:`/api/admin/complaint/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取投诉统计数据</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime|开始时间|query|false|string||
|endTime|结束时间|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 后台用户管理


## 获取用户详情


**接口地址**:`/api/admin/users/{userId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查看用户详细信息，包括角色和钱包信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserDetailVO|
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
|data||UserDetailVO|UserDetailVO|
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;userName||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;gender||integer(int32)||
|&emsp;&emsp;age||integer(int32)||
|&emsp;&emsp;userType||integer(int32)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;roles||array|RoleInfo|
|&emsp;&emsp;&emsp;&emsp;roleId||integer||
|&emsp;&emsp;&emsp;&emsp;roleName||string||
|&emsp;&emsp;&emsp;&emsp;roleCode||string||
|&emsp;&emsp;wallet||WalletInfo|WalletInfo|
|&emsp;&emsp;&emsp;&emsp;balance||number||
|&emsp;&emsp;&emsp;&emsp;totalRecharge||number||
|&emsp;&emsp;&emsp;&emsp;totalExpense||number||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0,
		"roles": [
			{
				"roleId": 0,
				"roleName": "",
				"roleCode": ""
			}
		],
		"wallet": {
			"balance": 0,
			"totalRecharge": 0,
			"totalExpense": 0
		},
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


## 更新用户信息


**接口地址**:`/api/admin/users/{userId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新用户基本信息</p>



**请求示例**:


```javascript
{
  "userName": "",
  "email": "",
  "gender": 0,
  "age": 0,
  "avatar": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||
|updateUserInfoRequest|更新请求|body|true|UpdateUserInfoRequest|UpdateUserInfoRequest|
|&emsp;&emsp;userName|||false|string||
|&emsp;&emsp;email|||false|string||
|&emsp;&emsp;gender|||false|integer(int32)||
|&emsp;&emsp;age|||false|integer(int32)||
|&emsp;&emsp;avatar|||false|string||


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


## 删除用户


**接口地址**:`/api/admin/users/{userId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除用户账号（软删除，将状态设为冻结）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||


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


## 更新用户状态


**接口地址**:`/api/admin/users/{userId}/status`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>启用或冻结用户账号</p>



**请求示例**:


```javascript
{
  "status": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||
|updateUserStatusRequest|状态请求|body|true|UpdateUserStatusRequest|UpdateUserStatusRequest|
|&emsp;&emsp;status|||true|integer(int32)||


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


## 分配角色


**接口地址**:`/api/admin/users/{userId}/roles`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>为用户分配角色（覆盖现有角色）</p>



**请求示例**:


```javascript
{
  "roleIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||
|assignRolesRequest|角色分配请求|body|true|AssignRolesRequest|AssignRolesRequest|
|&emsp;&emsp;roleIds|||true|array|integer(int64)|


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


## 查询用户列表


**接口地址**:`/api/admin/users`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>分页查询用户列表，支持关键词搜索和条件筛选</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|request||query|true|UserQueryRequest|UserQueryRequest|
|&emsp;&emsp;page|||false|integer(int32)||
|&emsp;&emsp;size|||false|integer(int32)||
|&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;userType|||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageUserManagementVO|
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
|data||PageUserManagementVO|PageUserManagementVO|
|&emsp;&emsp;records||array|UserManagementVO|
|&emsp;&emsp;&emsp;&emsp;userId||integer||
|&emsp;&emsp;&emsp;&emsp;userName||string||
|&emsp;&emsp;&emsp;&emsp;phone||string||
|&emsp;&emsp;&emsp;&emsp;email||string||
|&emsp;&emsp;&emsp;&emsp;avatar||string||
|&emsp;&emsp;&emsp;&emsp;gender||integer||
|&emsp;&emsp;&emsp;&emsp;age||integer||
|&emsp;&emsp;&emsp;&emsp;userType||integer||
|&emsp;&emsp;&emsp;&emsp;status||integer||
|&emsp;&emsp;&emsp;&emsp;roles||array|string|
|&emsp;&emsp;&emsp;&emsp;createTime||string||
|&emsp;&emsp;&emsp;&emsp;updateTime||string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageUserManagementVO|PageUserManagementVO|
|&emsp;&emsp;searchCount||PageUserManagementVO|PageUserManagementVO|
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
				"userId": 0,
				"userName": "",
				"phone": "",
				"email": "",
				"avatar": "",
				"gender": 0,
				"age": 0,
				"userType": 0,
				"status": 0,
				"roles": [],
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


# 论坛帖子管理


## 更新帖子


**接口地址**:`/api/forum/post/update/{postId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新帖子内容</p>



**请求示例**:


```javascript
{
  "title": "",
  "content": "",
  "images": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|updatePostRequest|更新帖子请求|body|true|UpdatePostRequest|UpdatePostRequest|
|&emsp;&emsp;title|帖子标题||true|string||
|&emsp;&emsp;content|帖子内容||true|string||
|&emsp;&emsp;images|图片URL列表，逗号分隔||false|string||


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


## 设置-取消置顶


**接口地址**:`/api/forum/post/{postId}/top`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员设置或取消帖子置顶状态</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|isTop|是否置顶（0-否，1-是）|query|true|integer(int32)||


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


## 设置-取消精华


**接口地址**:`/api/forum/post/{postId}/essence`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员设置或取消帖子精华状态</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|isEssence|是否精华（0-否，1-是）|query|true|integer(int32)||


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


## 点赞帖子


**接口地址**:`/api/forum/post/new/{postId}/like`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>给帖子点赞</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


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


## 收藏帖子


**接口地址**:`/api/forum/post/new/{postId}/collect`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>收藏帖子</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


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


## 获取帖子列表


**接口地址**:`/api/forum/post/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>分页查询帖子列表，返回当前用户的点赞和收藏状态</p>



**请求示例**:


```javascript
{
  "pageNo": 0,
  "pageSize": 0,
  "orderBy1": "",
  "isAsc1": true,
  "orderBy2": "",
  "isAsc2": true,
  "sectionId": 0,
  "keyword": "",
  "isEssence": 0,
  "sortBy": "latest"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postListRequest|帖子列表查询请求|body|true|PostListRequest|PostListRequest|
|&emsp;&emsp;pageNo|页码数||false|integer(int64)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int64)||
|&emsp;&emsp;orderBy1|排序字段1||false|string||
|&emsp;&emsp;isAsc1|排序字段1是否升序||false|boolean||
|&emsp;&emsp;orderBy2|排序字段2，排序顺序排在排序字段1后边，如果排序字段1未设置，该字段也可以排序||false|string||
|&emsp;&emsp;isAsc2|排序字段2是否升序||false|boolean||
|&emsp;&emsp;sectionId|板块ID，不传则查询所有板块||false|integer(int64)||
|&emsp;&emsp;keyword|关键词搜索||false|string||
|&emsp;&emsp;isEssence|是否只看精华 0-否 1-是||false|integer(int32)||
|&emsp;&emsp;sortBy|排序方式：latest-最新, hot-最热, essence-精华||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePostListItemResponse|
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
|data||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;records|帖子列表项响应|array|PostListItemResponse|
|&emsp;&emsp;&emsp;&emsp;postId|帖子ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionId|板块ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;&emsp;&emsp;userId|发帖用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|发帖用户名|string||
|&emsp;&emsp;&emsp;&emsp;userAvatar|发帖用户头像|string||
|&emsp;&emsp;&emsp;&emsp;title|帖子标题|string||
|&emsp;&emsp;&emsp;&emsp;contentSummary|帖子内容摘要|string||
|&emsp;&emsp;&emsp;&emsp;firstImage|首图URL|string||
|&emsp;&emsp;&emsp;&emsp;viewCount|浏览次数|integer||
|&emsp;&emsp;&emsp;&emsp;likeCount|点赞数|integer||
|&emsp;&emsp;&emsp;&emsp;commentCount|评论数|integer||
|&emsp;&emsp;&emsp;&emsp;isTop|是否置顶 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isEssence|是否精华 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;&emsp;&emsp;isCollected|当前用户是否已收藏|boolean||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;searchCount||PagePostListItemResponse|PagePostListItemResponse|
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
				"postId": 0,
				"sectionId": 0,
				"sectionName": "",
				"userId": 0,
				"userName": "",
				"userAvatar": "",
				"title": "",
				"contentSummary": "",
				"firstImage": "",
				"viewCount": 0,
				"likeCount": 0,
				"commentCount": 0,
				"isTop": 0,
				"isEssence": 0,
				"isLiked": true,
				"isCollected": false,
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


## 发布帖子


**接口地址**:`/api/forum/post/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户发布新帖子</p>



**请求示例**:


```javascript
{
  "sectionId": 0,
  "title": "",
  "content": "",
  "images": "http://example.com/1.jpg,http://example.com/2.jpg"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createPostRequest|创建帖子请求|body|true|CreatePostRequest|CreatePostRequest|
|&emsp;&emsp;sectionId|板块ID||true|integer(int64)||
|&emsp;&emsp;title|帖子标题||true|string||
|&emsp;&emsp;content|帖子内容||true|string||
|&emsp;&emsp;images|图片URL列表，逗号分隔||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultLong|
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
|data|响应数据|integer(int64)|integer(int64)|
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


## 我的帖子


**接口地址**:`/api/forum/post/my`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取我发布的帖子列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePostListItemResponse|
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
|data||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;records|帖子列表项响应|array|PostListItemResponse|
|&emsp;&emsp;&emsp;&emsp;postId|帖子ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionId|板块ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;&emsp;&emsp;userId|发帖用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|发帖用户名|string||
|&emsp;&emsp;&emsp;&emsp;userAvatar|发帖用户头像|string||
|&emsp;&emsp;&emsp;&emsp;title|帖子标题|string||
|&emsp;&emsp;&emsp;&emsp;contentSummary|帖子内容摘要|string||
|&emsp;&emsp;&emsp;&emsp;firstImage|首图URL|string||
|&emsp;&emsp;&emsp;&emsp;viewCount|浏览次数|integer||
|&emsp;&emsp;&emsp;&emsp;likeCount|点赞数|integer||
|&emsp;&emsp;&emsp;&emsp;commentCount|评论数|integer||
|&emsp;&emsp;&emsp;&emsp;isTop|是否置顶 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isEssence|是否精华 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;&emsp;&emsp;isCollected|当前用户是否已收藏|boolean||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;searchCount||PagePostListItemResponse|PagePostListItemResponse|
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
				"postId": 0,
				"sectionId": 0,
				"sectionName": "",
				"userId": 0,
				"userName": "",
				"userAvatar": "",
				"title": "",
				"contentSummary": "",
				"firstImage": "",
				"viewCount": 0,
				"likeCount": 0,
				"commentCount": 0,
				"isTop": 0,
				"isEssence": 0,
				"isLiked": true,
				"isCollected": false,
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


## 我收藏的帖子


**接口地址**:`/api/forum/post/my/collected`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取我收藏的帖子列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePostListItemResponse|
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
|data||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;records|帖子列表项响应|array|PostListItemResponse|
|&emsp;&emsp;&emsp;&emsp;postId|帖子ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionId|板块ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;&emsp;&emsp;userId|发帖用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|发帖用户名|string||
|&emsp;&emsp;&emsp;&emsp;userAvatar|发帖用户头像|string||
|&emsp;&emsp;&emsp;&emsp;title|帖子标题|string||
|&emsp;&emsp;&emsp;&emsp;contentSummary|帖子内容摘要|string||
|&emsp;&emsp;&emsp;&emsp;firstImage|首图URL|string||
|&emsp;&emsp;&emsp;&emsp;viewCount|浏览次数|integer||
|&emsp;&emsp;&emsp;&emsp;likeCount|点赞数|integer||
|&emsp;&emsp;&emsp;&emsp;commentCount|评论数|integer||
|&emsp;&emsp;&emsp;&emsp;isTop|是否置顶 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isEssence|是否精华 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;&emsp;&emsp;isCollected|当前用户是否已收藏|boolean||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;searchCount||PagePostListItemResponse|PagePostListItemResponse|
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
				"postId": 0,
				"sectionId": 0,
				"sectionName": "",
				"userId": 0,
				"userName": "",
				"userAvatar": "",
				"title": "",
				"contentSummary": "",
				"firstImage": "",
				"viewCount": 0,
				"likeCount": 0,
				"commentCount": 0,
				"isTop": 0,
				"isEssence": 0,
				"isLiked": true,
				"isCollected": false,
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


## 获取帖子详情


**接口地址**:`/api/forum/post/get/{postId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取帖子详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPostDetailResponse|
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
|data||PostDetailResponse|PostDetailResponse|
|&emsp;&emsp;postId|帖子ID|integer(int64)||
|&emsp;&emsp;sectionId|板块ID|integer(int64)||
|&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;userId|发帖用户ID|integer(int64)||
|&emsp;&emsp;userName|发帖用户名|string||
|&emsp;&emsp;userAvatar|发帖用户头像|string||
|&emsp;&emsp;title|帖子标题|string||
|&emsp;&emsp;content|帖子内容|string||
|&emsp;&emsp;images|图片URL列表，逗号分隔|string||
|&emsp;&emsp;viewCount|浏览次数|integer(int32)||
|&emsp;&emsp;likeCount|点赞数|integer(int32)||
|&emsp;&emsp;commentCount|评论数|integer(int32)||
|&emsp;&emsp;collectCount|收藏数|integer(int32)||
|&emsp;&emsp;isTop|是否置顶 0-否 1-是|integer(int32)||
|&emsp;&emsp;isEssence|是否精华 0-否 1-是|integer(int32)||
|&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;isCollected|当前用户是否已收藏|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"postId": 0,
		"sectionId": 0,
		"sectionName": "",
		"userId": 0,
		"userName": "",
		"userAvatar": "",
		"title": "",
		"content": "",
		"images": "",
		"viewCount": 0,
		"likeCount": 0,
		"commentCount": 0,
		"collectCount": 0,
		"isTop": 0,
		"isEssence": 0,
		"isLiked": true,
		"isCollected": true,
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


## 删除帖子


**接口地址**:`/api/forum/post/delete/{postId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除帖子（软删除）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


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


## 取消点赞


**接口地址**:`/api/forum/post/cancel/{postId}/like`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>取消帖子点赞</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


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


## 取消收藏


**接口地址**:`/api/forum/post/cancel/{postId}/collect`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>取消收藏帖子</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


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


# 管理员报修管理


## 处理报修


**接口地址**:`/api/admin/repair/{reportId}/handle`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员处理报修</p>



**请求示例**:


```javascript
{
  "status": 2,
  "handleResult": "已安排维修人员上门处理，问题已解决"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reportId|报修ID|path|true|integer(int64)||
|repairHandleRequest|处理请求|body|true|RepairHandleRequest|RepairHandleRequest|
|&emsp;&emsp;status|处理状态：1-处理中，2-已完成，3-已驳回||true|integer(int32)||
|&emsp;&emsp;handleResult|处理结果||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultRepairReportResponse|
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
|data||RepairReportResponse|RepairReportResponse|
|&emsp;&emsp;reportId|报事ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"reportId": 1,
		"userId": 1,
		"reportType": "水电维修",
		"description": "厨房水龙头漏水，需要维修",
		"location": "21号楼2单元201",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已安排维修人员上门处理，问题已解决"
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


## 查询所有报修


**接口地址**:`/api/admin/repair/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有报修，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "reportType": "水电维修",
  "status": 0,
  "userId": 1,
  "keyword": "水龙头",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|repairQueryRequest|查询条件|body|true|RepairQueryRequest|RepairQueryRequest|
|&emsp;&emsp;reportType|事项类型（可选）||false|string||
|&emsp;&emsp;status|处理状态（可选）：0-待处理，1-处理中，2-已完成，3-已驳回||false|integer(int32)||
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;keyword|关键词搜索（可选，搜索事项描述和地点）||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageRepairReportResponse|
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
|data||PageRepairReportResponse|PageRepairReportResponse|
|&emsp;&emsp;records|报事维修响应数据|array|RepairReportResponse|
|&emsp;&emsp;&emsp;&emsp;reportId|报事ID，唯一标识|integer||
|&emsp;&emsp;&emsp;&emsp;userId|提交用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|提交时间|string||
|&emsp;&emsp;&emsp;&emsp;handleTime|处理时间，未处理时为null|string||
|&emsp;&emsp;&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer||
|&emsp;&emsp;&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageRepairReportResponse|PageRepairReportResponse|
|&emsp;&emsp;searchCount||PageRepairReportResponse|PageRepairReportResponse|
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
				"reportId": 1,
				"userId": 1,
				"reportType": "水电维修",
				"description": "厨房水龙头漏水，需要维修",
				"location": "21号楼2单元201",
				"status": 2,
				"statusText": "已完成",
				"createTime": "",
				"handleTime": "",
				"handleUserId": 1,
				"handleResult": "已安排维修人员上门处理，问题已解决"
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


## 批量处理报修


**接口地址**:`/api/admin/repair/batch-handle`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员批量处理报修</p>



**请求示例**:


```javascript
{
  "status": 2,
  "handleResult": "已安排维修人员上门处理，问题已解决"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reportIds|报修ID列表|query|true|array|integer|
|repairHandleRequest|处理请求|body|true|RepairHandleRequest|RepairHandleRequest|
|&emsp;&emsp;status|处理状态：1-处理中，2-已完成，3-已驳回||true|integer(int32)||
|&emsp;&emsp;handleResult|处理结果||false|string||


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


## 报修统计


**接口地址**:`/api/admin/repair/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取报修统计数据</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime|开始时间|query|false|string||
|endTime|结束时间|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 用户管理


## 获取个人资料


**接口地址**:`/api/user/profile`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取当前登录用户的个人资料</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|获取成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultUserProfileResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserProfileResponse|UserProfileResponse|
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;userType|用户类型(1-普通用户,2-商户管理员,3-社区管理员)|integer(int32)||
|&emsp;&emsp;status|用户状态(0-冻结,1-正常)|integer(int32)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0,
		"createTime": "",
		"updateTime": ""
	},
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


## 更新个人资料


**接口地址**:`/api/user/profile`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新当前登录用户的个人资料（只更新非空字段）</p>



**请求示例**:


```javascript
{
  "userName": "张三",
  "email": "zhangsan@example.com",
  "gender": 1,
  "age": 25
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateProfileRequest|更新个人资料请求|body|true|UpdateProfileRequest|UpdateProfileRequest|
|&emsp;&emsp;userName|用户名||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)||false|integer(int32)||
|&emsp;&emsp;age|年龄||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|更新成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultUserProfileResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常|ResultUserProfileResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserProfileResponse|UserProfileResponse|
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;userType|用户类型(1-普通用户,2-商户管理员,3-社区管理员)|integer(int32)||
|&emsp;&emsp;status|用户状态(0-冻结,1-正常)|integer(int32)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0,
		"createTime": "",
		"updateTime": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserProfileResponse|UserProfileResponse|
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;userType|用户类型(1-普通用户,2-商户管理员,3-社区管理员)|integer(int32)||
|&emsp;&emsp;status|用户状态(0-冻结,1-正常)|integer(int32)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0,
		"createTime": "",
		"updateTime": ""
	},
	"timestamp": 1640995200000
}
```


## 发送邮箱验证码


**接口地址**:`/api/user/send-verify-code`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>发送验证码到指定邮箱，用于忘记密码等场景（60秒内只能发送一次）</p>



**请求示例**:


```javascript
{
  "email": "user@example.com"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sendVerifyCodeRequest|发送验证码请求|body|true|SendVerifyCodeRequest|SendVerifyCodeRequest|
|&emsp;&emsp;email|邮箱地址||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|发送成功|ResultVoid|
|400|参数错误|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如发送过于频繁）|ResultVoid|


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


**响应状态码-600**:


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


## 用户注册


**接口地址**:`/api/user/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>任何具有中国公民资格的人员都可以通过此接口进行注册</p>



**请求示例**:


```javascript
{
  "phone": "13800138000",
  "password": "123456",
  "confirmPassword": "123456",
  "userName": "张三",
  "age": 25,
  "gender": 1,
  "email": "zhangsan@example.com"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userRegisterRequest|用户注册信息|body|true|UserRegisterRequest|UserRegisterRequest|
|&emsp;&emsp;phone|手机号码（唯一标识）||true|string||
|&emsp;&emsp;password|登录密码||true|string||
|&emsp;&emsp;confirmPassword|确认密码||true|string||
|&emsp;&emsp;userName|真实姓名||true|string||
|&emsp;&emsp;age|年龄||true|integer(int32)||
|&emsp;&emsp;gender|性别（0-未知 1-男 2-女）||true|integer(int32)||
|&emsp;&emsp;email|邮箱||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|注册成功|ResultVoid|
|400|参数错误|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如手机号已注册）|ResultUserRegisterResponse|


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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserRegisterResponse|UserRegisterResponse|
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;gender|性别（0-未知 1-男 2-女）|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;userType|用户类型（1-普通用户 2-商户管理员 3-社区管理员）|integer(int32)||
|&emsp;&emsp;status|状态（0-冻结 1-正常）|integer(int32)||
|&emsp;&emsp;createTime|注册时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 1,
		"userName": "张三",
		"phone": "13800138000",
		"gender": 1,
		"age": 25,
		"email": "zhangsan@example.com",
		"userType": 1,
		"status": 1,
		"createTime": ""
	},
	"timestamp": 1640995200000
}
```


## 退出登录


**接口地址**:`/api/user/logout`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>用户退出登录，清除token（客户端需删除本地token）</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|退出成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultVoid|
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


**响应状态码-401**:


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


## 用户登录（手机号+密码）


**接口地址**:`/api/user/login`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>使用手机号和密码进行登录，返回用户信息和JWT令牌</p>



**请求示例**:


```javascript
{
  "phone": "13800138000",
  "password": "123456"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userLoginRequest|用户登录信息|body|true|UserLoginRequest|UserLoginRequest|
|&emsp;&emsp;phone|手机号||true|string||
|&emsp;&emsp;password|密码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登录成功|ResultVoid|
|400|参数错误|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如用户不存在、密码错误、账号被冻结）|ResultUserLoginResponse|


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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserLoginResponse|UserLoginResponse|
|&emsp;&emsp;token|访问令牌(JWT)|string||
|&emsp;&emsp;tokenType|令牌类型|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;userType|用户类型(1-普通用户,2-商户管理员,3-社区管理员)|integer(int32)||
|&emsp;&emsp;status|用户状态(0-冻结,1-正常)|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"token": "",
		"tokenType": "Bearer",
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0
	},
	"timestamp": 1640995200000
}
```


## 邮箱验证码登录


**接口地址**:`/api/user/login-by-email`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>使用邮箱和验证码进行登录，返回用户信息和JWT令牌</p>



**请求示例**:


```javascript
{
  "email": "user@example.com",
  "verifyCode": "123456"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|emailLoginRequest|邮箱验证码登录信息|body|true|EmailLoginRequest|EmailLoginRequest|
|&emsp;&emsp;email|邮箱地址||true|string||
|&emsp;&emsp;verifyCode|邮箱验证码（6位数字）||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登录成功|ResultVoid|
|400|参数错误|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如验证码错误、邮箱未注册、账号被冻结）|ResultUserLoginResponse|


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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserLoginResponse|UserLoginResponse|
|&emsp;&emsp;token|访问令牌(JWT)|string||
|&emsp;&emsp;tokenType|令牌类型|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;userType|用户类型(1-普通用户,2-商户管理员,3-社区管理员)|integer(int32)||
|&emsp;&emsp;status|用户状态(0-冻结,1-正常)|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"token": "",
		"tokenType": "Bearer",
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0
	},
	"timestamp": 1640995200000
}
```


## 忘记密码


**接口地址**:`/api/user/forgot-password`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>通过邮箱和验证码重置密码</p>



**请求示例**:


```javascript
{
  "email": "user@example.com",
  "verifyCode": "123456",
  "newPassword": "123456",
  "confirmPassword": "123456"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|forgotPasswordRequest|忘记密码请求|body|true|ForgotPasswordRequest|ForgotPasswordRequest|
|&emsp;&emsp;email|邮箱地址||true|string||
|&emsp;&emsp;verifyCode|邮箱验证码||true|string||
|&emsp;&emsp;newPassword|新密码||true|string||
|&emsp;&emsp;confirmPassword|确认新密码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|重置成功|ResultVoid|
|400|参数错误|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如验证码错误、邮箱未注册）|ResultVoid|


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


**响应状态码-600**:


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


## 修改密码


**接口地址**:`/api/user/change-password`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>修改当前登录用户的密码（需要验证旧密码）</p>



**请求示例**:


```javascript
{
  "oldPassword": "123456",
  "newPassword": "newpass123",
  "confirmPassword": "newpass123"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|changePasswordRequest|修改密码请求|body|true|ChangePasswordRequest|ChangePasswordRequest|
|&emsp;&emsp;oldPassword|旧密码||true|string||
|&emsp;&emsp;newPassword|新密码||true|string||
|&emsp;&emsp;confirmPassword|确认新密码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|修改成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如旧密码错误）|ResultVoid|


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


**响应状态码-401**:


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


**响应状态码-600**:


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


## 上传头像


**接口地址**:`/api/user/avatar/upload`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户上传头像图片，返回头像URL。需要在请求头中携带JWT令牌</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|头像图片文件（支持jpg、png、gif等格式，大小不超过10MB）|query|true|file||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|上传成功|ResultVoid|
|400|参数错误或文件格式不支持|ResultVoid|
|401|未授权（token无效或过期）|ResultFileUploadResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常|ResultFileUploadResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||FileUploadResponse|FileUploadResponse|
|&emsp;&emsp;url|文件访问URL|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;size|文件大小（字节）|integer(int64)||
|&emsp;&emsp;contentType|文件类型|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"url": "",
		"originalFilename": "",
		"size": 0,
		"contentType": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||FileUploadResponse|FileUploadResponse|
|&emsp;&emsp;url|文件访问URL|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;size|文件大小（字节）|integer(int64)||
|&emsp;&emsp;contentType|文件类型|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"url": "",
		"originalFilename": "",
		"size": 0,
		"contentType": ""
	},
	"timestamp": 1640995200000
}
```


## 获取当前用户信息


**接口地址**:`/api/user/info`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取当前登录用户的详细信息</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|获取成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultUserLoginResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||UserLoginResponse|UserLoginResponse|
|&emsp;&emsp;token|访问令牌(JWT)|string||
|&emsp;&emsp;tokenType|令牌类型|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;gender|性别(0-未知,1-男,2-女)|integer(int32)||
|&emsp;&emsp;age|年龄|integer(int32)||
|&emsp;&emsp;userType|用户类型(1-普通用户,2-商户管理员,3-社区管理员)|integer(int32)||
|&emsp;&emsp;status|用户状态(0-冻结,1-正常)|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"token": "",
		"tokenType": "Bearer",
		"userId": 0,
		"userName": "",
		"phone": "",
		"email": "",
		"avatar": "",
		"gender": 0,
		"age": 0,
		"userType": 0,
		"status": 0
	},
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


# 物业费管理


## 缴纳物业费


**接口地址**:`/api/property-fee/pay`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>使用钱包或其他方式缴纳物业费</p>



**请求示例**:


```javascript
{
  "billId": 0,
  "amount": 0,
  "paymentMethod": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|payPropertyFeeRequest|缴费请求|body|true|PayPropertyFeeRequest|PayPropertyFeeRequest|
|&emsp;&emsp;billId|||true|integer(int64)||
|&emsp;&emsp;amount|||true|number||
|&emsp;&emsp;paymentMethod|||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPropertyFeePayment|
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
|data||PropertyFeePayment|PropertyFeePayment|
|&emsp;&emsp;paymentId||integer(int64)||
|&emsp;&emsp;paymentNo||string||
|&emsp;&emsp;billId||integer(int64)||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;amount||number||
|&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;transactionId||integer(int64)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"paymentId": 0,
		"paymentNo": "",
		"billId": 0,
		"userId": 0,
		"amount": 0,
		"paymentMethod": "",
		"transactionId": 0,
		"status": 0,
		"createTime": ""
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


## 查询所有缴费记录（管理员）


**接口地址**:`/api/property-fee/admin/payments/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询用户在本系统内的缴费情况。支持按用户ID、支付方式、支付状态、时间范围等条件筛选，支持分页查询。</p>



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
|paymentQueryRequest|缴费记录查询条件|body|true|PaymentQueryRequest|PaymentQueryRequest|
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


## 查询缴费记录


**接口地址**:`/api/property-fee/payments`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户的缴费记录</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|page|页码|query|false|integer(int32)||
|size|每页数量|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListPropertyFeePayment|
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
|data|响应数据|array|PropertyFeePayment|
|&emsp;&emsp;paymentId||integer(int64)||
|&emsp;&emsp;paymentNo||string||
|&emsp;&emsp;billId||integer(int64)||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;amount||number||
|&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;transactionId||integer(int64)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
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


## 查询我的物业费账单


**接口地址**:`/api/property-fee/bills`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户的物业费账单列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|status|账单状态（0-未缴 1-已缴 2-部分缴纳）|query|false|integer(int32)||
|page|页码|query|false|integer(int32)||
|size|每页数量|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListPropertyFeeBill|
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
|data|响应数据|array|PropertyFeeBill|
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
	"data": [
		{
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
		}
	],
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


## 获取账单详情


**接口地址**:`/api/property-fee/bills/{billId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定账单的详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|billId|账单ID|path|true|integer(int64)||


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


# 安保管理-车位管理


## 车位详情


**接口地址**:`/api/parking/{spaceId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取车位详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|spaceId|车位ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultParkingSpaceResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如车位不存在）|ResultParkingSpaceResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
	"timestamp": 1640995200000
}
```


## 更新车位信息


**接口地址**:`/api/parking/{spaceId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新车位绑定的车牌号</p>



**请求示例**:


```javascript
{
  "spaceNo": "A-101",
  "carNumber": "京A12345"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|spaceId|车位ID|path|true|integer(int64)||
|parkingSpaceRequest|车位登记请求|body|true|ParkingSpaceRequest|ParkingSpaceRequest|
|&emsp;&emsp;spaceNo|车位编号||true|string||
|&emsp;&emsp;carNumber|绑定车牌号||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|更新成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultParkingSpaceResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如车位不存在或车牌号已被绑定）|ResultParkingSpaceResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
	"timestamp": 1640995200000
}
```


## 删除车位


**接口地址**:`/api/parking/{spaceId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除车位信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|spaceId|车位ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|删除成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如车位不存在）|ResultVoid|


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


**响应状态码-401**:


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


**响应状态码-600**:


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


## 审核车位申请（管理员）


**接口地址**:`/api/parking/admin/{spaceId}/audit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员审核用户提交的车位登记申请。可以通过或拒绝申请，拒绝时必须填写拒绝原因。</p>



**请求示例**:


```javascript
{
  "status": 1,
  "rejectReason": "车位编号不符合规范"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|spaceId|车位ID|path|true|integer(int64)||
|parkingAuditRequest|审核请求|body|true|ParkingAuditRequest|ParkingAuditRequest|
|&emsp;&emsp;status|审核状态：1-通过，2-拒绝||true|integer(int32)||
|&emsp;&emsp;rejectReason|拒绝原因（拒绝时必填）||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|审核成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultParkingSpaceResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如车位不存在或已审核）|ResultParkingSpaceResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
	"timestamp": 1640995200000
}
```


## 提交车位登记申请


**接口地址**:`/api/parking/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户提交车位登记申请，填写车位编号和车牌号。提交后状态为待审核，需要社区管理人员审核通过后才能生效。</p>



**请求示例**:


```javascript
{
  "spaceNo": "A-101",
  "carNumber": "京A12345"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|parkingSpaceRequest|车位登记请求|body|true|ParkingSpaceRequest|ParkingSpaceRequest|
|&emsp;&emsp;spaceNo|车位编号||true|string||
|&emsp;&emsp;carNumber|绑定车牌号||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|提交成功||
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultParkingSpaceResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如车位编号已存在或车牌号已被绑定）|ResultParkingSpaceResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingSpaceResponse|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"spaceId": 1,
		"userId": 1,
		"userName": "张三",
		"spaceNo": "A-101",
		"carNumber": "京A12345",
		"status": 1,
		"statusText": "已通过",
		"createTime": "",
		"updateTime": "",
		"auditTime": "",
		"auditUserId": 1,
		"rejectReason": ""
	},
	"timestamp": 1640995200000
}
```


## 我的车位列表


**接口地址**:`/api/parking/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户的所有车位申请记录，包括待审核、已通过和已拒绝的记录。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultListParkingSpaceResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data|响应数据|array|ParkingSpaceResponse|
|&emsp;&emsp;spaceId|车位ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;status|审核状态,可用值:0,1,2|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间，未审核时为null|string(date-time)||
|&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer(int64)||
|&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"spaceId": 1,
			"userId": 1,
			"userName": "张三",
			"spaceNo": "A-101",
			"carNumber": "京A12345",
			"status": 1,
			"statusText": "已通过",
			"createTime": "",
			"updateTime": "",
			"auditTime": "",
			"auditUserId": 1,
			"rejectReason": ""
		}
	],
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


## 查询所有车位列表


**接口地址**:`/api/parking/all`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询系统中所有车位信息，支持按车位编号和车牌号模糊搜索，支持分页查询。结果按创建时间倒序排列。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码，从1开始|query|true|integer(int32)||
|pageSize|每页记录数|query|true|integer(int32)||
|spaceNo|车位编号（可选，支持模糊查询）|query|false|string||
|carNumber|车牌号（可选，支持模糊查询）|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权，token无效或过期|ResultPageParkingSpaceResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageParkingSpaceResponse|PageParkingSpaceResponse|
|&emsp;&emsp;records|车位信息响应|array|ParkingSpaceResponse|
|&emsp;&emsp;&emsp;&emsp;spaceId|车位ID|integer||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;spaceNo|车位编号|string||
|&emsp;&emsp;&emsp;&emsp;carNumber|绑定车牌号|string||
|&emsp;&emsp;&emsp;&emsp;status|审核状态,可用值:0,1,2|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;&emsp;&emsp;auditTime|审核时间，未审核时为null|string||
|&emsp;&emsp;&emsp;&emsp;auditUserId|审核人ID，未审核时为null|integer||
|&emsp;&emsp;&emsp;&emsp;rejectReason|拒绝原因，未拒绝时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageParkingSpaceResponse|PageParkingSpaceResponse|
|&emsp;&emsp;searchCount||PageParkingSpaceResponse|PageParkingSpaceResponse|
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
				"spaceId": 1,
				"userId": 1,
				"userName": "张三",
				"spaceNo": "A-101",
				"carNumber": "京A12345",
				"status": 1,
				"statusText": "已通过",
				"createTime": "",
				"updateTime": "",
				"auditTime": "",
				"auditUserId": 1,
				"rejectReason": ""
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


## 车位统计数据（管理员）


**接口地址**:`/api/parking/admin/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询车位信息统计数据，包括总车位数、已通过、待审核、已拒绝的数量以及车位使用率。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultParkingStatisticsResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||ParkingStatisticsResponse|ParkingStatisticsResponse|
|&emsp;&emsp;totalSpaces|总车位数|integer(int64)||
|&emsp;&emsp;approvedSpaces|已审核通过的车位数|integer(int64)||
|&emsp;&emsp;pendingSpaces|待审核的车位数|integer(int64)||
|&emsp;&emsp;rejectedSpaces|已拒绝的车位数|integer(int64)||
|&emsp;&emsp;usageRate|车位使用率|number(double)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalSpaces": 100,
		"approvedSpaces": 80,
		"pendingSpaces": 15,
		"rejectedSpaces": 5,
		"usageRate": 80
	},
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


# 权限管理


## 更新权限


**接口地址**:`/api/permission/{permissionId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新指定权限的信息</p>



**请求示例**:


```javascript
{
  "permissionName": "查看用户",
  "permissionCode": "user:view",
  "resourceType": "api",
  "description": "查看用户信息",
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|permissionId|权限ID|path|true|integer(int64)||
|updatePermissionRequest|更新权限请求|body|true|UpdatePermissionRequest|UpdatePermissionRequest|
|&emsp;&emsp;permissionName|权限名称||true|string||
|&emsp;&emsp;permissionCode|权限编码||true|string||
|&emsp;&emsp;resourceType|资源类型（menu-菜单 button-按钮 api-接口）||false|string||
|&emsp;&emsp;description|权限描述||false|string||
|&emsp;&emsp;status|状态 0-禁用 1-启用||false|integer(int32)||


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


## 删除权限


**接口地址**:`/api/permission/{permissionId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除指定权限（会同时删除相关的角色权限关联）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|permissionId|权限ID|path|true|integer(int64)||


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


## 更新角色


**接口地址**:`/api/permission/role/{roleId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新指定角色的信息</p>



**请求示例**:


```javascript
{
  "roleName": "社区管理员",
  "roleCode": "ROLE_COMMUNITY_ADMIN",
  "description": "社区管理相关权限",
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleId|角色ID|path|true|integer(int64)||
|updateRoleRequest|更新角色请求|body|true|UpdateRoleRequest|UpdateRoleRequest|
|&emsp;&emsp;roleName|角色名称||true|string||
|&emsp;&emsp;roleCode|角色编码||true|string||
|&emsp;&emsp;description|角色描述||false|string||
|&emsp;&emsp;status|状态 0-禁用 1-启用||false|integer(int32)||


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


## 删除角色


**接口地址**:`/api/permission/role/{roleId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除指定角色（会同时删除相关的角色权限关联和用户角色关联）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleId|角色ID|path|true|integer(int64)||


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


## 移除用户角色


**接口地址**:`/api/permission/user/remove-roles`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>移除指定用户的一组角色</p>



**请求示例**:


```javascript
{
  "userId": 1,
  "roleIds": [
    1,
    2,
    3
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|removeRoleRequest|移除角色请求|body|true|RemoveRoleRequest|RemoveRoleRequest|
|&emsp;&emsp;userId|用户ID||true|integer(int64)||
|&emsp;&emsp;roleIds|角色ID列表||true|array|integer(int64)|


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


## 为用户分配角色


**接口地址**:`/api/permission/user/assign-roles`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>为指定用户分配一组角色</p>



**请求示例**:


```javascript
{
  "userId": 0,
  "roleIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|assignRoleRequest|分配角色请求|body|true|AssignRoleRequest|AssignRoleRequest|
|&emsp;&emsp;userId|||true|integer(int64)||
|&emsp;&emsp;roleIds|||true|array|integer(int64)|


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


## 同步超级管理员权限


**接口地址**:`/api/permission/sync-super-admin`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>让超级管理员角色自动获得系统中所有的权限（包括新添加的权限）。仅超级管理员可用。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultSyncPermissionResponse|
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
|data||SyncPermissionResponse|SyncPermissionResponse|
|&emsp;&emsp;superAdminRoleId|超级管理员角色ID|integer(int64)||
|&emsp;&emsp;superAdminRoleName|超级管理员角色名称|string||
|&emsp;&emsp;totalPermissions|系统中所有权限总数|integer(int32)||
|&emsp;&emsp;existingPermissions|同步前已有的权限数|integer(int32)||
|&emsp;&emsp;addedPermissions|本次新增的权限数|integer(int32)||
|&emsp;&emsp;finalPermissions|同步后的权限总数|integer(int32)||
|&emsp;&emsp;success|同步是否成功|boolean||
|&emsp;&emsp;message|同步消息|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"superAdminRoleId": 0,
		"superAdminRoleName": "",
		"totalPermissions": 0,
		"existingPermissions": 0,
		"addedPermissions": 0,
		"finalPermissions": 0,
		"success": true,
		"message": ""
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


## 扫描并同步权限


**接口地址**:`/api/permission/scan`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>扫描所有Controller中的权限注解并自动存入数据库（仅超级管理员可用）</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPermissionScanResult|
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
|data||PermissionScanResult|PermissionScanResult|
|&emsp;&emsp;totalScanned||integer(int32)||
|&emsp;&emsp;newAdded||integer(int32)||
|&emsp;&emsp;alreadyExists||integer(int32)||
|&emsp;&emsp;newPermissions||array|string|
|&emsp;&emsp;existingPermissions||array|string|
|&emsp;&emsp;controllerCount||integer(int32)||
|&emsp;&emsp;methodCount||integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalScanned": 0,
		"newAdded": 0,
		"alreadyExists": 0,
		"newPermissions": [],
		"existingPermissions": [],
		"controllerCount": 0,
		"methodCount": 0
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


## 创建角色


**接口地址**:`/api/permission/role/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建新的角色</p>



**请求示例**:


```javascript
{
  "roleName": "",
  "roleCode": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createRoleRequest|创建角色请求|body|true|CreateRoleRequest|CreateRoleRequest|
|&emsp;&emsp;roleName|||true|string||
|&emsp;&emsp;roleCode|||true|string||
|&emsp;&emsp;description|||false|string||


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


## 为角色分配权限


**接口地址**:`/api/permission/role/assign-permissions`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>为指定角色分配一组权限</p>



**请求示例**:


```javascript
{
  "roleId": 0,
  "permissionIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|assignPermissionRequest|分配权限请求|body|true|AssignPermissionRequest|AssignPermissionRequest|
|&emsp;&emsp;roleId|||true|integer(int64)||
|&emsp;&emsp;permissionIds|||true|array|integer(int64)|


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


## 创建权限


**接口地址**:`/api/permission/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建新的权限</p>



**请求示例**:


```javascript
{
  "permissionName": "",
  "permissionCode": "",
  "resourceType": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createPermissionRequest|创建权限请求|body|true|CreatePermissionRequest|CreatePermissionRequest|
|&emsp;&emsp;permissionName|||true|string||
|&emsp;&emsp;permissionCode|||true|string||
|&emsp;&emsp;resourceType|||false|string||
|&emsp;&emsp;description|||false|string||


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


## 获取用户权限信息


**接口地址**:`/api/permission/user/{userId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定用户的所有角色和权限</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserPermissionResponse|
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
|data||UserPermissionResponse|UserPermissionResponse|
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;roles||array|RoleDTO|
|&emsp;&emsp;&emsp;&emsp;roleId||integer||
|&emsp;&emsp;&emsp;&emsp;roleName||string||
|&emsp;&emsp;&emsp;&emsp;roleCode||string||
|&emsp;&emsp;&emsp;&emsp;description||string||
|&emsp;&emsp;&emsp;&emsp;status||integer||
|&emsp;&emsp;permissions||array|PermissionDTO|
|&emsp;&emsp;&emsp;&emsp;permissionId||integer||
|&emsp;&emsp;&emsp;&emsp;permissionName||string||
|&emsp;&emsp;&emsp;&emsp;permissionCode||string||
|&emsp;&emsp;&emsp;&emsp;resourceType||string||
|&emsp;&emsp;&emsp;&emsp;description||string||
|&emsp;&emsp;&emsp;&emsp;status||integer||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 0,
		"roles": [
			{
				"roleId": 0,
				"roleName": "",
				"roleCode": "",
				"description": "",
				"status": 0
			}
		],
		"permissions": [
			{
				"permissionId": 0,
				"permissionName": "",
				"permissionCode": "",
				"resourceType": "",
				"description": "",
				"status": 0
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


## 获取当前用户权限信息


**接口地址**:`/api/permission/user/current`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前登录用户的所有角色和权限</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserPermissionResponse|
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
|data||UserPermissionResponse|UserPermissionResponse|
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;roles||array|RoleDTO|
|&emsp;&emsp;&emsp;&emsp;roleId||integer||
|&emsp;&emsp;&emsp;&emsp;roleName||string||
|&emsp;&emsp;&emsp;&emsp;roleCode||string||
|&emsp;&emsp;&emsp;&emsp;description||string||
|&emsp;&emsp;&emsp;&emsp;status||integer||
|&emsp;&emsp;permissions||array|PermissionDTO|
|&emsp;&emsp;&emsp;&emsp;permissionId||integer||
|&emsp;&emsp;&emsp;&emsp;permissionName||string||
|&emsp;&emsp;&emsp;&emsp;permissionCode||string||
|&emsp;&emsp;&emsp;&emsp;resourceType||string||
|&emsp;&emsp;&emsp;&emsp;description||string||
|&emsp;&emsp;&emsp;&emsp;status||integer||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"userId": 0,
		"roles": [
			{
				"roleId": 0,
				"roleName": "",
				"roleCode": "",
				"description": "",
				"status": 0
			}
		],
		"permissions": [
			{
				"permissionId": 0,
				"permissionName": "",
				"permissionCode": "",
				"resourceType": "",
				"description": "",
				"status": 0
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


## 获取角色的权限列表


**接口地址**:`/api/permission/role/{roleId}/permissions`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定角色拥有的所有权限</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleId|角色ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListPermissionDTO|
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
|data|响应数据|array|PermissionDTO|
|&emsp;&emsp;permissionId||integer(int64)||
|&emsp;&emsp;permissionName||string||
|&emsp;&emsp;permissionCode||string||
|&emsp;&emsp;resourceType||string||
|&emsp;&emsp;description||string||
|&emsp;&emsp;status||integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"permissionId": 0,
			"permissionName": "",
			"permissionCode": "",
			"resourceType": "",
			"description": "",
			"status": 0
		}
	],
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


## 获取所有角色


**接口地址**:`/api/permission/role/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询系统中所有的角色列表</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListRoleDTO|
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
|data|响应数据|array|RoleDTO|
|&emsp;&emsp;roleId||integer(int64)||
|&emsp;&emsp;roleName||string||
|&emsp;&emsp;roleCode||string||
|&emsp;&emsp;description||string||
|&emsp;&emsp;status||integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"roleId": 0,
			"roleName": "",
			"roleCode": "",
			"description": "",
			"status": 0
		}
	],
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


## 获取所有权限


**接口地址**:`/api/permission/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询系统中所有的权限列表</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListPermissionDTO|
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
|data|响应数据|array|PermissionDTO|
|&emsp;&emsp;permissionId||integer(int64)||
|&emsp;&emsp;permissionName||string||
|&emsp;&emsp;permissionCode||string||
|&emsp;&emsp;resourceType||string||
|&emsp;&emsp;description||string||
|&emsp;&emsp;status||integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"permissionId": 0,
			"permissionName": "",
			"permissionCode": "",
			"resourceType": "",
			"description": "",
			"status": 0
		}
	],
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


# OSS测试


## 测试OSS配置


**接口地址**:`/api/test/oss-config`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>检查OSS配置是否正确，是否能连接到OSS服务</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 权限测试


## 查看用户权限测试


**接口地址**:`/api/test/permission/user-view`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>需要 user:view 权限</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 多权限AND测试


**接口地址**:`/api/test/permission/user-update-and-view`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>需要同时拥有 user:view 和 user:update 权限</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 创建用户权限测试


**接口地址**:`/api/test/permission/user-create`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>需要 user:create 权限</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 公开接口


**接口地址**:`/api/test/permission/public`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>无需权限即可访问</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 删除权限测试


**接口地址**:`/api/test/permission/permission-delete`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>需要 permission:delete 权限（默认只有超级管理员拥有）</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 多权限OR测试


**接口地址**:`/api/test/permission/complaint-or-repair`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>拥有 complaint:view 或 repair:view 任意一个权限即可</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 多角色OR测试


**接口地址**:`/api/test/permission/admin-or-community`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>超级管理员或社区管理员可以访问</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## 管理员角色测试


**接口地址**:`/api/test/permission/admin-only`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>只有超级管理员可以访问</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


# WebSocket信息


## WebSocket连接说明


**接口地址**:`/api/websocket/info`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<h1 id="websocket-即时通讯使用指南">WebSocket 即时通讯使用指南</h1>
<h2 id="连接地址">连接地址</h2>
<pre><code>ws://localhost:8080/ws/chat?token=YOUR_JWT_TOKEN
</code></pre>
<h2 id="连接参数">连接参数</h2>
<ul>
<li><strong>token</strong>: 必填，用户的JWT令牌（通过登录接口获取）</li>
</ul>
<h2 id="消息格式">消息格式</h2>
<h3 id="1-发送消息（客户端-→-服务端）">1. 发送消息（客户端 → 服务端）</h3>
<h4 id="心跳消息">心跳消息</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;HEARTBEAT&quot;,
  &quot;content&quot;: &quot;ping&quot;
}
</code></pre>
<h4 id="已读回执">已读回执</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;READ_RECEIPT&quot;,
  &quot;messageId&quot;: 123,
  &quot;toUserId&quot;: 456
}
</code></pre>
<h3 id="2-接收消息（服务端-→-客户端）">2. 接收消息（服务端 → 客户端）</h3>
<h4 id="系统消息">系统消息</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;SYSTEM&quot;,
  &quot;content&quot;: &quot;连接成功&quot;,
  &quot;createTime&quot;: &quot;2026-01-08T10:00:00&quot;
}
</code></pre>
<h4 id="聊天消息">聊天消息</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;CHAT&quot;,
  &quot;messageId&quot;: 123,
  &quot;fromUserId&quot;: 1,
  &quot;fromUserName&quot;: &quot;张三&quot;,
  &quot;fromUserAvatar&quot;: &quot;https://xxx.com/avatar.jpg&quot;,
  &quot;toUserId&quot;: 2,
  &quot;content&quot;: &quot;你好！&quot;,
  &quot;createTime&quot;: &quot;2026-01-08T10:00:00&quot;,
  &quot;isRead&quot;: 0
}
</code></pre>
<h4 id="已读回执-1">已读回执</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;READ_RECEIPT&quot;,
  &quot;messageId&quot;: 123,
  &quot;fromUserId&quot;: 2,
  &quot;toUserId&quot;: 1,
  &quot;createTime&quot;: &quot;2026-01-08T10:01:00&quot;
}
</code></pre>
<h4 id="心跳响应">心跳响应</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;HEARTBEAT&quot;,
  &quot;content&quot;: &quot;pong&quot;,
  &quot;createTime&quot;: &quot;2026-01-08T10:00:00&quot;
}
</code></pre>
<h4 id="错误消息">错误消息</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;ERROR&quot;,
  &quot;content&quot;: &quot;错误信息&quot;,
  &quot;createTime&quot;: &quot;2026-01-08T10:00:00&quot;
}
</code></pre>
<h2 id="消息类型说明">消息类型说明</h2>
<ul>
<li><strong>SYSTEM</strong>: 系统消息（连接成功等）</li>
<li><strong>CHAT</strong>: 聊天消息（私信）</li>
<li><strong>HEARTBEAT</strong>: 心跳消息（保持连接）</li>
<li><strong>READ_RECEIPT</strong>: 已读回执</li>
<li><strong>ERROR</strong>: 错误消息</li>
</ul>
<h2 id="使用流程">使用流程</h2>
<ol>
<li><strong>用户登录</strong> → 获取JWT token</li>
<li><strong>建立WebSocket连接</strong> → ws://localhost:8080/ws/chat?token=xxx</li>
<li><strong>接收系统消息</strong> → 连接成功</li>
<li><strong>发送私信</strong> → 调用 POST /message/send 接口</li>
<li><strong>接收消息</strong> → 通过WebSocket实时推送</li>
<li><strong>发送心跳</strong> → 每30秒发送一次心跳消息</li>
<li><strong>标记已读</strong> → 调用 POST /message/{messageId}/read 接口，同时通过WebSocket发送已读回执</li>
</ol>
<h2 id="前端示例代码（javascript）">前端示例代码（JavaScript）</h2>
<pre><code class="language-javascript">// 1. 建立连接
const token = localStorage.getItem(&#39;token&#39;);
const ws = new WebSocket(`ws://localhost:8080/ws/chat?token=${token}`);

// 2. 连接成功
ws.onopen = () =&gt; {
  console.log(&#39;WebSocket连接成功&#39;);

  // 启动心跳
  setInterval(() =&gt; {
    ws.send(JSON.stringify({
      type: &#39;HEARTBEAT&#39;,
      content: &#39;ping&#39;
    }));
  }, 30000);
};

// 3. 接收消息
ws.onmessage = (event) =&gt; {
  const message = JSON.parse(event.data);

  switch(message.type) {
    case &#39;CHAT&#39;:
      // 显示新消息
      displayMessage(message);
      break;
    case &#39;READ_RECEIPT&#39;:
      // 更新消息已读状态
      updateMessageReadStatus(message.messageId);
      break;
    case &#39;SYSTEM&#39;:
      console.log(&#39;系统消息:&#39;, message.content);
      break;
  }
};

// 4. 发送已读回执
function sendReadReceipt(messageId, toUserId) {
  ws.send(JSON.stringify({
    type: &#39;READ_RECEIPT&#39;,
    messageId: messageId,
    toUserId: toUserId
  }));
}

// 5. 连接关闭
ws.onclose = () =&gt; {
  console.log(&#39;WebSocket连接关闭&#39;);
};

// 6. 连接错误
ws.onerror = (error) =&gt; {
  console.error(&#39;WebSocket错误:&#39;, error);
};
</code></pre>
<h2 id="注意事项">注意事项</h2>
<ol>
<li><strong>Token验证</strong>: 连接时必须提供有效的JWT token</li>
<li><strong>心跳保持</strong>: 建议每30秒发送一次心跳消息，避免连接超时</li>
<li><strong>断线重连</strong>: 网络断开时需要实现自动重连机制</li>
<li><strong>消息持久化</strong>: 即使WebSocket推送失败，消息仍会保存到数据库</li>
<li><strong>离线消息</strong>: 用户上线后可通过 GET /message/chat/{otherUserId} 接口获取离线消息</li>
</ol>
<h2 id="配合使用的rest接口">配合使用的REST接口</h2>
<ul>
<li><strong>POST /message/send</strong> - 发送私信（会自动通过WebSocket推送）</li>
<li><strong>GET /message/chat/{otherUserId}</strong> - 获取聊天记录</li>
<li><strong>POST /message/{messageId}/read</strong> - 标记已读（会自动发送已读回执）</li>
<li><strong>GET /message/unread-count</strong> - 获取未读消息数</li>
<li><strong>GET /message/online/{userId}</strong> - 检查用户在线状态</li>
<li><strong>GET /message/online-count</strong> - 获取在线人数</li>
</ul>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


## 消息格式示例


**接口地址**:`/api/websocket/example/message`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<h2 id="完整的消息交互示例">完整的消息交互示例</h2>
<h3 id="场景：用户a给用户b发送消息">场景：用户A给用户B发送消息</h3>
<h4 id="步骤1-用户a调用rest接口发送消息">步骤1: 用户A调用REST接口发送消息</h4>
<pre><code>POST /message/send
{
  &quot;toUserId&quot;: 2,
  &quot;content&quot;: &quot;你好，在吗？&quot;
}
</code></pre>
<h4 id="步骤2-用户b通过websocket实时收到消息">步骤2: 用户B通过WebSocket实时收到消息</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;CHAT&quot;,
  &quot;messageId&quot;: 123,
  &quot;fromUserId&quot;: 1,
  &quot;fromUserName&quot;: &quot;张三&quot;,
  &quot;fromUserAvatar&quot;: &quot;https://xxx.com/avatar.jpg&quot;,
  &quot;toUserId&quot;: 2,
  &quot;content&quot;: &quot;你好，在吗？&quot;,
  &quot;createTime&quot;: &quot;2026-01-08T10:00:00&quot;,
  &quot;isRead&quot;: 0
}
</code></pre>
<h4 id="步骤3-用户b阅读消息后，调用rest接口标记已读">步骤3: 用户B阅读消息后，调用REST接口标记已读</h4>
<pre><code>POST /message/123/read
</code></pre>
<h4 id="步骤4-用户a通过websocket收到已读回执">步骤4: 用户A通过WebSocket收到已读回执</h4>
<pre><code class="language-json">{
  &quot;type&quot;: &quot;READ_RECEIPT&quot;,
  &quot;messageId&quot;: 123,
  &quot;fromUserId&quot;: 2,
  &quot;toUserId&quot;: 1,
  &quot;createTime&quot;: &quot;2026-01-08T10:01:00&quot;
}
</code></pre>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


## WebSocket连接示例


**接口地址**:`/api/websocket/example/connect`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<h2 id="javascript-连接示例">JavaScript 连接示例</h2>
<pre><code class="language-javascript">const token = &#39;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&#39;;
const ws = new WebSocket(`ws://localhost:8080/ws/chat?token=${token}`);

ws.onopen = () =&gt; console.log(&#39;连接成功&#39;);
ws.onmessage = (event) =&gt; console.log(&#39;收到消息:&#39;, event.data);
</code></pre>
<h2 id="java-连接示例（使用-spring-websocket-client）">Java 连接示例（使用 Spring WebSocket Client）</h2>
<pre><code class="language-java">WebSocketClient client = new StandardWebSocketClient();
WebSocketStompClient stompClient = new WebSocketStompClient(client);
String url = &quot;ws://localhost:8080/ws/chat?token=&quot; + token;
stompClient.connect(url, new WebSocketHandler() {
    // 实现处理逻辑
});
</code></pre>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
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
|data|响应数据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": "",
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


# 管理员订单管理


## 处理订单


**接口地址**:`/api/admin/orders/{orderId}/handle`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员处理订单（发货、完成、退款、取消）</p>



**请求示例**:


```javascript
{
  "action": "deliver",
  "remark": "已安排发货"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderId|订单ID|path|true|integer(int64)||
|adminHandleOrderRequest|处理请求|body|true|AdminHandleOrderRequest|AdminHandleOrderRequest|
|&emsp;&emsp;action|操作类型（deliver-发货, complete-完成, refund-退款, cancel-取消）||true|string||
|&emsp;&emsp;remark|备注||false|string||


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


## 查询所有订单


**接口地址**:`/api/admin/orders/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有订单，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "orderType": "PRODUCT",
  "status": 0,
  "orderNo": "ORDER20260108123456ABCD",
  "userId": 1,
  "startTime": "2026-01-01 00:00:00",
  "endTime": "2026-01-31 23:59:59",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminOrderQueryRequest|查询条件|body|true|AdminOrderQueryRequest|AdminOrderQueryRequest|
|&emsp;&emsp;orderType|订单类型（PRODUCT-商品订单, RECHARGE-充值, PROPERTY_FEE-物业费, PARKING_FEE-停车费）||false|string||
|&emsp;&emsp;status|订单状态（0-待支付, 1-支付中, 2-支付成功, 3-已完成, 4-支付失败, 5-已取消, 6-已退款）||false|integer(int32)||
|&emsp;&emsp;orderNo|订单号||false|string||
|&emsp;&emsp;userId|用户ID||false|integer(int64)||
|&emsp;&emsp;startTime|开始时间||false|string||
|&emsp;&emsp;endTime|结束时间||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页大小||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageOrderListVO|
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
|data||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;records|订单列表项|array|OrderListVO|
|&emsp;&emsp;&emsp;&emsp;orderId|订单ID|integer||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;&emsp;&emsp;storeName|取货门店名称(商品订单)|string||
|&emsp;&emsp;&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;&emsp;&emsp;productCount|商品数量(商品订单)|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;expireTime|过期时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageOrderListVO|PageOrderListVO|
|&emsp;&emsp;searchCount||PageOrderListVO|PageOrderListVO|
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
				"orderId": 0,
				"orderNo": "",
				"userId": 0,
				"userName": "",
				"userPhone": "",
				"orderType": "",
				"orderTypeDesc": "",
				"amount": 0,
				"status": 0,
				"statusDesc": "",
				"paymentMethod": "",
				"paymentMethodDesc": "",
				"storeName": "",
				"description": "",
				"productCount": 0,
				"createTime": "",
				"expireTime": ""
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


## 查询订单详情


**接口地址**:`/api/admin/orders/{orderId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询指定订单的详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderId|订单ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultOrderDetailVO|
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
|data||OrderDetailVO|OrderDetailVO|
|&emsp;&emsp;orderId|订单ID|integer(int64)||
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;orderType|订单类型(PRODUCT-商品订单,RECHARGE-充值,PROPERTY_FEE-物业费等)|string||
|&emsp;&emsp;orderTypeDesc|订单类型描述|string||
|&emsp;&emsp;amount|订单金额|number||
|&emsp;&emsp;paymentMethod|支付方式(ALIPAY-支付宝,WECHAT-微信,WALLET-钱包)|string||
|&emsp;&emsp;paymentMethodDesc|支付方式描述|string||
|&emsp;&emsp;status|订单状态(0-待支付,1-支付中,2-支付成功/待取货,3-已完成,4-支付失败,5-已取消,6-已退款)|integer(int32)||
|&emsp;&emsp;statusDesc|订单状态描述|string||
|&emsp;&emsp;storeId|取货门店ID|integer(int64)||
|&emsp;&emsp;storeName|取货门店名称|string||
|&emsp;&emsp;description|订单描述|string||
|&emsp;&emsp;relatedId|关联业务ID|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;callbackTime|支付时间|string(date-time)||
|&emsp;&emsp;pickUpTime|取货时间|string(date-time)||
|&emsp;&emsp;finishTime|完成时间|string(date-time)||
|&emsp;&emsp;expireTime|过期时间|string(date-time)||
|&emsp;&emsp;products|订单商品信息|array|OrderProductVO|
|&emsp;&emsp;&emsp;&emsp;productId|商品ID|integer||
|&emsp;&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;productImage|商品图片|string||
|&emsp;&emsp;&emsp;&emsp;quantity|商品数量|integer||
|&emsp;&emsp;&emsp;&emsp;price|商品单价|number||
|&emsp;&emsp;&emsp;&emsp;subtotal|小计金额|number||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderId": 0,
		"orderNo": "",
		"userId": 0,
		"userName": "",
		"userPhone": "",
		"orderType": "",
		"orderTypeDesc": "",
		"amount": 0,
		"paymentMethod": "",
		"paymentMethodDesc": "",
		"status": 0,
		"statusDesc": "",
		"storeId": 0,
		"storeName": "",
		"description": "",
		"relatedId": 0,
		"createTime": "",
		"callbackTime": "",
		"pickUpTime": "",
		"finishTime": "",
		"expireTime": "",
		"products": [
			{
				"productId": 0,
				"productName": "",
				"productImage": "",
				"quantity": 0,
				"price": 0,
				"subtotal": 0
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


## 订单统计


**接口地址**:`/api/admin/orders/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取订单统计数据</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime|开始时间|query|false|string||
|endTime|结束时间|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 好友管理


## 拒绝好友申请


**接口地址**:`/api/friend/{friendId}/reject`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>拒绝好友申请</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|friendId|好友关系ID|path|true|integer(int64)||


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


## 接受好友申请


**接口地址**:`/api/friend/{friendId}/accept`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>接受好友申请</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|friendId|好友关系ID|path|true|integer(int64)||


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


## 搜索用户


**接口地址**:`/api/friend/search`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据手机号或姓名搜索用户，返回用户列表及好友状态</p>



**请求示例**:


```javascript
{
  "keyword": "张三",
  "pageNum": 1,
  "pageSize": 20
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userSearchRequest|用户搜索请求|body|true|UserSearchRequest|UserSearchRequest|
|&emsp;&emsp;keyword|搜索关键词（手机号或姓名）||true|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页大小||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageUserSearchResponse|
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
|data||PageUserSearchResponse|PageUserSearchResponse|
|&emsp;&emsp;records|用户搜索响应|array|UserSearchResponse|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像URL|string||
|&emsp;&emsp;&emsp;&emsp;gender|性别 0-未知 1-男 2-女|integer||
|&emsp;&emsp;&emsp;&emsp;age|年龄|integer||
|&emsp;&emsp;&emsp;&emsp;friendStatus|好友状态：0-非好友，1-待审核，2-已是好友|integer||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageUserSearchResponse|PageUserSearchResponse|
|&emsp;&emsp;searchCount||PageUserSearchResponse|PageUserSearchResponse|
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
				"userId": 1,
				"userName": "张三",
				"phone": "138****8000",
				"avatar": "https://xxx.com/avatar.jpg",
				"gender": 1,
				"age": 28,
				"friendStatus": 0
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


## 发送好友申请


**接口地址**:`/api/friend/request`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>向其他用户发送好友申请</p>



**请求示例**:


```javascript
{
  "friendUserId": 0,
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|addFriendRequest|添加好友请求|body|true|AddFriendRequest|AddFriendRequest|
|&emsp;&emsp;friendUserId|好友用户ID||true|integer(int64)||
|&emsp;&emsp;remark|好友备注||false|string||


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


## 获取好友申请列表


**接口地址**:`/api/friend/requests`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取收到的好友申请列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageFriendResponse|
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
|data||PageFriendResponse|PageFriendResponse|
|&emsp;&emsp;records|好友信息响应|array|FriendResponse|
|&emsp;&emsp;&emsp;&emsp;friendId|好友关系ID|integer||
|&emsp;&emsp;&emsp;&emsp;friendUserId|好友用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;friendUserName|好友用户名|string||
|&emsp;&emsp;&emsp;&emsp;friendAvatar|好友头像|string||
|&emsp;&emsp;&emsp;&emsp;remark|好友备注|string||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-待确认 1-已同意 2-已拒绝|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageFriendResponse|PageFriendResponse|
|&emsp;&emsp;searchCount||PageFriendResponse|PageFriendResponse|
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
				"friendId": 0,
				"friendUserId": 0,
				"friendUserName": "",
				"friendAvatar": "",
				"remark": "",
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


## 获取好友列表


**接口地址**:`/api/friend/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取我的好友列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageFriendResponse|
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
|data||PageFriendResponse|PageFriendResponse|
|&emsp;&emsp;records|好友信息响应|array|FriendResponse|
|&emsp;&emsp;&emsp;&emsp;friendId|好友关系ID|integer||
|&emsp;&emsp;&emsp;&emsp;friendUserId|好友用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;friendUserName|好友用户名|string||
|&emsp;&emsp;&emsp;&emsp;friendAvatar|好友头像|string||
|&emsp;&emsp;&emsp;&emsp;remark|好友备注|string||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-待确认 1-已同意 2-已拒绝|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageFriendResponse|PageFriendResponse|
|&emsp;&emsp;searchCount||PageFriendResponse|PageFriendResponse|
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
				"friendId": 0,
				"friendUserId": 0,
				"friendUserName": "",
				"friendAvatar": "",
				"remark": "",
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


## 删除好友


**接口地址**:`/api/friend/{friendUserId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除好友关系</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|friendUserId|好友用户ID|path|true|integer(int64)||


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


# 私信管理


## 标记已读


**接口地址**:`/api/message/{messageId}/read`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>标记消息为已读</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|messageId|消息ID|path|true|integer(int64)||


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


## 发送私信


**接口地址**:`/api/message/send`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>向其他用户发送私信</p>



**请求示例**:


```javascript
{
  "toUserId": 0,
  "content": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sendMessageRequest|发送私信请求|body|true|SendMessageRequest|SendMessageRequest|
|&emsp;&emsp;toUserId|接收者ID||true|integer(int64)||
|&emsp;&emsp;content|消息内容||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultLong|
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
|data|响应数据|integer(int64)|integer(int64)|
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


## 全部已读


**接口地址**:`/api/message/read-all/{otherUserId}`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>标记与某人的所有消息为已读</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|otherUserId|对方用户ID|path|true|integer(int64)||


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


## 未读数量


**接口地址**:`/api/message/unread-count`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取未读消息数量</p>



**请求参数**:


暂无


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


## 检查用户在线状态


**接口地址**:`/api/message/online/{userId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>检查指定用户是否在线</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 获取在线人数


**接口地址**:`/api/message/online-count`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取当前在线用户数量</p>



**请求参数**:


暂无


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


## 获取会话列表


**接口地址**:`/api/message/conversations`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取最近联系人列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageMessageResponse|
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
|data||PageMessageResponse|PageMessageResponse|
|&emsp;&emsp;records|私信响应|array|MessageResponse|
|&emsp;&emsp;&emsp;&emsp;messageId|消息ID|integer||
|&emsp;&emsp;&emsp;&emsp;fromUserId|发送者ID|integer||
|&emsp;&emsp;&emsp;&emsp;fromUserName|发送者用户名|string||
|&emsp;&emsp;&emsp;&emsp;fromUserAvatar|发送者头像|string||
|&emsp;&emsp;&emsp;&emsp;toUserId|接收者ID|integer||
|&emsp;&emsp;&emsp;&emsp;toUserName|接收者用户名|string||
|&emsp;&emsp;&emsp;&emsp;toUserAvatar|接收者头像|string||
|&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;isRead|是否已读 0-未读 1-已读|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;readTime|阅读时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageMessageResponse|PageMessageResponse|
|&emsp;&emsp;searchCount||PageMessageResponse|PageMessageResponse|
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
				"messageId": 0,
				"fromUserId": 0,
				"fromUserName": "",
				"fromUserAvatar": "",
				"toUserId": 0,
				"toUserName": "",
				"toUserAvatar": "",
				"content": "",
				"isRead": 0,
				"createTime": "",
				"readTime": ""
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


## 获取聊天记录


**接口地址**:`/api/message/chat/{otherUserId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取与某人的聊天记录</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|otherUserId|对方用户ID|path|true|integer(int64)||
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页大小|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageMessageResponse|
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
|data||PageMessageResponse|PageMessageResponse|
|&emsp;&emsp;records|私信响应|array|MessageResponse|
|&emsp;&emsp;&emsp;&emsp;messageId|消息ID|integer||
|&emsp;&emsp;&emsp;&emsp;fromUserId|发送者ID|integer||
|&emsp;&emsp;&emsp;&emsp;fromUserName|发送者用户名|string||
|&emsp;&emsp;&emsp;&emsp;fromUserAvatar|发送者头像|string||
|&emsp;&emsp;&emsp;&emsp;toUserId|接收者ID|integer||
|&emsp;&emsp;&emsp;&emsp;toUserName|接收者用户名|string||
|&emsp;&emsp;&emsp;&emsp;toUserAvatar|接收者头像|string||
|&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;isRead|是否已读 0-未读 1-已读|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;readTime|阅读时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageMessageResponse|PageMessageResponse|
|&emsp;&emsp;searchCount||PageMessageResponse|PageMessageResponse|
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
				"messageId": 0,
				"fromUserId": 0,
				"fromUserName": "",
				"fromUserAvatar": "",
				"toUserId": 0,
				"toUserName": "",
				"toUserAvatar": "",
				"content": "",
				"isRead": 0,
				"createTime": "",
				"readTime": ""
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


## 删除消息


**接口地址**:`/api/message/{messageId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除消息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|messageId|消息ID|path|true|integer(int64)||


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


# 管理员公告管理


## 查询公告详情


**接口地址**:`/api/admin/announcement/{announceId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询指定公告的详细信息（不增加阅读次数）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|announceId|公告ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultAnnouncementResponse|
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
|data||AnnouncementResponse|AnnouncementResponse|
|&emsp;&emsp;announceId|公告ID|integer(int64)||
|&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;publishUserId|发布人ID|integer(int64)||
|&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;readCount|阅读次数|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"announceId": 1,
		"title": "关于小区停水的通知",
		"content": "因水管维修，明天上午8:00-12:00停水...",
		"publishUserId": 100,
		"publishUserName": "张三",
		"publishTime": "",
		"readCount": 128
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


## 更新公告


**接口地址**:`/api/admin/announcement/{announceId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员更新公告内容</p>



**请求示例**:


```javascript
{
  "title": "关于小区停水的通知",
  "content": "尊敬的各位业主：\n因市政水管维修，本小区将于2026年1月10日（周五）上午8:00-12:00进行停水。"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|announceId|公告ID|path|true|integer(int64)||
|updateAnnouncementRequest|更新请求|body|true|UpdateAnnouncementRequest|UpdateAnnouncementRequest|
|&emsp;&emsp;title|公告标题||true|string||
|&emsp;&emsp;content|公告内容||true|string||


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


## 删除公告


**接口地址**:`/api/admin/announcement/{announceId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员删除指定公告</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|announceId|公告ID|path|true|integer(int64)||


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


## 查询所有公告


**接口地址**:`/api/admin/announcement/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有公告，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "keyword": "停水",
  "publishUserId": 1,
  "startTime": "2026-01-01 00:00:00",
  "endTime": "2026-01-31 23:59:59",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminAnnouncementQueryRequest|查询条件|body|true|AdminAnnouncementQueryRequest|AdminAnnouncementQueryRequest|
|&emsp;&emsp;keyword|关键词搜索（标题或内容）||false|string||
|&emsp;&emsp;publishUserId|发布人ID||false|integer(int64)||
|&emsp;&emsp;startTime|开始时间||false|string||
|&emsp;&emsp;endTime|结束时间||false|string||
|&emsp;&emsp;pageNum|页码||true|integer(int32)||
|&emsp;&emsp;pageSize|每页大小||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageAnnouncementResponse|
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
|data||PageAnnouncementResponse|PageAnnouncementResponse|
|&emsp;&emsp;records|公告响应|array|AnnouncementResponse|
|&emsp;&emsp;&emsp;&emsp;announceId|公告ID|integer||
|&emsp;&emsp;&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;&emsp;&emsp;publishUserId|发布人ID|integer||
|&emsp;&emsp;&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;&emsp;&emsp;publishTime|发布时间|string||
|&emsp;&emsp;&emsp;&emsp;readCount|阅读次数|integer||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageAnnouncementResponse|PageAnnouncementResponse|
|&emsp;&emsp;searchCount||PageAnnouncementResponse|PageAnnouncementResponse|
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
				"announceId": 1,
				"title": "关于小区停水的通知",
				"content": "因水管维修，明天上午8:00-12:00停水...",
				"publishUserId": 100,
				"publishUserName": "张三",
				"publishTime": "",
				"readCount": 128
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


## 发布公告


**接口地址**:`/api/admin/announcement/publish`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员发布新公告</p>



**请求示例**:


```javascript
{
  "title": "关于小区停水的通知",
  "content": "尊敬的各位业主：\n因市政水管维修，本小区将于2026年1月10日（周五）上午8:00-12:00进行停水。\n请各位业主提前做好储水准备，给您带来的不便敬请谅解。"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|announcementPublishRequest|发布公告请求|body|true|AnnouncementPublishRequest|AnnouncementPublishRequest|
|&emsp;&emsp;title|公告标题||true|string||
|&emsp;&emsp;content|公告内容||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultAnnouncementResponse|
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
|data||AnnouncementResponse|AnnouncementResponse|
|&emsp;&emsp;announceId|公告ID|integer(int64)||
|&emsp;&emsp;title|公告标题|string||
|&emsp;&emsp;content|公告内容|string||
|&emsp;&emsp;publishUserId|发布人ID|integer(int64)||
|&emsp;&emsp;publishUserName|发布人姓名|string||
|&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;readCount|阅读次数|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"announceId": 1,
		"title": "关于小区停水的通知",
		"content": "因水管维修，明天上午8:00-12:00停水...",
		"publishUserId": 100,
		"publishUserName": "张三",
		"publishTime": "",
		"readCount": 128
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


## 批量删除公告


**接口地址**:`/api/admin/announcement/batch-delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员批量删除公告</p>



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


## 公告统计


**接口地址**:`/api/admin/announcement/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取公告统计数据</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime|开始时间|query|false|string||
|endTime|结束时间|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 访客登记管理


## 审核访客通行申请（管理员）


**接口地址**:`/api/visitor/admin/{registerId}/audit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员处理用户提交的访客通行申请。可以通过或拒绝申请，拒绝时必须填写拒绝原因。</p>



**请求示例**:


```javascript
{
  "status": 1,
  "rejectReason": "访客信息不符，无法通过"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|registerId|登记ID|path|true|integer(int64)||
|visitorAuditRequest|审核请求|body|true|VisitorAuditRequest|VisitorAuditRequest|
|&emsp;&emsp;status|审核状态：1-通过，2-拒绝||true|integer(int32)||
|&emsp;&emsp;rejectReason|拒绝原因（拒绝时必填）||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|审核成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultVisitorRegisterResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如登记不存在或已审核）|ResultVisitorRegisterResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||VisitorRegisterResponse|VisitorRegisterResponse|
|&emsp;&emsp;registerId|登记ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;allowTime|放行时间|string(date-time)||
|&emsp;&emsp;validDate|有效日期|string(date-time)||
|&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer(int32)||
|&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;rejectReason|拒绝原因|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"registerId": 1,
		"userId": 1,
		"userName": "李四",
		"visitorName": "张三",
		"visitorPhone": "13800138000",
		"visitPurpose": "探访亲友",
		"allowTime": "",
		"validDate": "",
		"status": 0,
		"statusDesc": "待审核",
		"createTime": "",
		"auditTime": "",
		"auditUserName": "王五",
		"rejectReason": "信息不完整"
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||VisitorRegisterResponse|VisitorRegisterResponse|
|&emsp;&emsp;registerId|登记ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;allowTime|放行时间|string(date-time)||
|&emsp;&emsp;validDate|有效日期|string(date-time)||
|&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer(int32)||
|&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;rejectReason|拒绝原因|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"registerId": 1,
		"userId": 1,
		"userName": "李四",
		"visitorName": "张三",
		"visitorPhone": "13800138000",
		"visitPurpose": "探访亲友",
		"allowTime": "",
		"validDate": "",
		"status": 0,
		"statusDesc": "待审核",
		"createTime": "",
		"auditTime": "",
		"auditUserName": "王五",
		"rejectReason": "信息不完整"
	},
	"timestamp": 1640995200000
}
```


## 创建访客登记


**接口地址**:`/api/visitor/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户登记来访目的、放行时间及有效日期，供社区工作人员审核</p>



**请求示例**:


```javascript
{
  "visitorName": "张三",
  "visitorPhone": "13800138000",
  "visitPurpose": "探访亲友",
  "allowTime": "",
  "validDate": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|visitorRegisterRequest|访客登记请求|body|true|VisitorRegisterRequest|VisitorRegisterRequest|
|&emsp;&emsp;visitorName|访客姓名||true|string||
|&emsp;&emsp;visitorPhone|访客电话||true|string||
|&emsp;&emsp;visitPurpose|来访目的||true|string||
|&emsp;&emsp;allowTime|放行时间||true|string(date-time)||
|&emsp;&emsp;validDate|有效日期||true|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登记成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultVisitorRegisterResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常|ResultVisitorRegisterResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||VisitorRegisterResponse|VisitorRegisterResponse|
|&emsp;&emsp;registerId|登记ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;allowTime|放行时间|string(date-time)||
|&emsp;&emsp;validDate|有效日期|string(date-time)||
|&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer(int32)||
|&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;rejectReason|拒绝原因|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"registerId": 1,
		"userId": 1,
		"userName": "李四",
		"visitorName": "张三",
		"visitorPhone": "13800138000",
		"visitPurpose": "探访亲友",
		"allowTime": "",
		"validDate": "",
		"status": 0,
		"statusDesc": "待审核",
		"createTime": "",
		"auditTime": "",
		"auditUserName": "王五",
		"rejectReason": "信息不完整"
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||VisitorRegisterResponse|VisitorRegisterResponse|
|&emsp;&emsp;registerId|登记ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;allowTime|放行时间|string(date-time)||
|&emsp;&emsp;validDate|有效日期|string(date-time)||
|&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer(int32)||
|&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;rejectReason|拒绝原因|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"registerId": 1,
		"userId": 1,
		"userName": "李四",
		"visitorName": "张三",
		"visitorPhone": "13800138000",
		"visitPurpose": "探访亲友",
		"allowTime": "",
		"validDate": "",
		"status": 0,
		"statusDesc": "待审核",
		"createTime": "",
		"auditTime": "",
		"auditUserName": "王五",
		"rejectReason": "信息不完整"
	},
	"timestamp": 1640995200000
}
```


## 查询所有访客登记列表（管理员）


**接口地址**:`/api/visitor/admin/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询用户提交的访客通行申请。支持按审核状态、用户ID、访客姓名、访客电话等条件筛选，支持分页查询。</p>



**请求示例**:


```javascript
{
  "status": 0,
  "userId": 1,
  "visitorName": "张三",
  "visitorPhone": "138",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|visitorQueryRequest|访客通行查询条件|body|true|VisitorQueryRequest|VisitorQueryRequest|
|&emsp;&emsp;status|审核状态（可选）：0-待审核，1-已通过，2-已拒绝||false|integer(int32)||
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;visitorName|访客姓名（可选，模糊查询）||false|string||
|&emsp;&emsp;visitorPhone|访客电话（可选，模糊查询）||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultPageVisitorRegisterResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageVisitorRegisterResponse|PageVisitorRegisterResponse|
|&emsp;&emsp;records|访客登记响应|array|VisitorRegisterResponse|
|&emsp;&emsp;&emsp;&emsp;registerId|登记ID|integer||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;&emsp;&emsp;allowTime|放行时间|string||
|&emsp;&emsp;&emsp;&emsp;validDate|有效日期|string||
|&emsp;&emsp;&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;auditTime|审核时间|string||
|&emsp;&emsp;&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;&emsp;&emsp;rejectReason|拒绝原因|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageVisitorRegisterResponse|PageVisitorRegisterResponse|
|&emsp;&emsp;searchCount||PageVisitorRegisterResponse|PageVisitorRegisterResponse|
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
				"registerId": 1,
				"userId": 1,
				"userName": "李四",
				"visitorName": "张三",
				"visitorPhone": "13800138000",
				"visitPurpose": "探访亲友",
				"allowTime": "",
				"validDate": "",
				"status": 0,
				"statusDesc": "待审核",
				"createTime": "",
				"auditTime": "",
				"auditUserName": "王五",
				"rejectReason": "信息不完整"
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


## 访客登记详情


**接口地址**:`/api/visitor/{registerId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取访客登记详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|registerId|登记ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultVisitorRegisterResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如登记不存在）|ResultVisitorRegisterResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||VisitorRegisterResponse|VisitorRegisterResponse|
|&emsp;&emsp;registerId|登记ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;allowTime|放行时间|string(date-time)||
|&emsp;&emsp;validDate|有效日期|string(date-time)||
|&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer(int32)||
|&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;rejectReason|拒绝原因|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"registerId": 1,
		"userId": 1,
		"userName": "李四",
		"visitorName": "张三",
		"visitorPhone": "13800138000",
		"visitPurpose": "探访亲友",
		"allowTime": "",
		"validDate": "",
		"status": 0,
		"statusDesc": "待审核",
		"createTime": "",
		"auditTime": "",
		"auditUserName": "王五",
		"rejectReason": "信息不完整"
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||VisitorRegisterResponse|VisitorRegisterResponse|
|&emsp;&emsp;registerId|登记ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;allowTime|放行时间|string(date-time)||
|&emsp;&emsp;validDate|有效日期|string(date-time)||
|&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer(int32)||
|&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;rejectReason|拒绝原因|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"registerId": 1,
		"userId": 1,
		"userName": "李四",
		"visitorName": "张三",
		"visitorPhone": "13800138000",
		"visitPurpose": "探访亲友",
		"allowTime": "",
		"validDate": "",
		"status": 0,
		"statusDesc": "待审核",
		"createTime": "",
		"auditTime": "",
		"auditUserName": "王五",
		"rejectReason": "信息不完整"
	},
	"timestamp": 1640995200000
}
```


## 取消访客登记


**接口地址**:`/api/visitor/{registerId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>取消待审核的访客登记</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|registerId|登记ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|取消成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如登记不存在或已审核）|ResultVoid|


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


**响应状态码-401**:


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


**响应状态码-600**:


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


## 我的访客登记列表


**接口地址**:`/api/visitor/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户的访客登记列表</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码|query|false|integer(int32)||
|pageSize|每页数量|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultPageVisitorRegisterResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageVisitorRegisterResponse|PageVisitorRegisterResponse|
|&emsp;&emsp;records|访客登记响应|array|VisitorRegisterResponse|
|&emsp;&emsp;&emsp;&emsp;registerId|登记ID|integer||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;visitorName|访客姓名|string||
|&emsp;&emsp;&emsp;&emsp;visitorPhone|访客电话|string||
|&emsp;&emsp;&emsp;&emsp;visitPurpose|来访目的|string||
|&emsp;&emsp;&emsp;&emsp;allowTime|放行时间|string||
|&emsp;&emsp;&emsp;&emsp;validDate|有效日期|string||
|&emsp;&emsp;&emsp;&emsp;status|审核状态: 0-待审核 1-已通过 2-已拒绝|integer||
|&emsp;&emsp;&emsp;&emsp;statusDesc|审核状态描述|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;auditTime|审核时间|string||
|&emsp;&emsp;&emsp;&emsp;auditUserName|审核人姓名|string||
|&emsp;&emsp;&emsp;&emsp;rejectReason|拒绝原因|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageVisitorRegisterResponse|PageVisitorRegisterResponse|
|&emsp;&emsp;searchCount||PageVisitorRegisterResponse|PageVisitorRegisterResponse|
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
				"registerId": 1,
				"userId": 1,
				"userName": "李四",
				"visitorName": "张三",
				"visitorPhone": "13800138000",
				"visitPurpose": "探访亲友",
				"allowTime": "",
				"validDate": "",
				"status": 0,
				"statusDesc": "待审核",
				"createTime": "",
				"auditTime": "",
				"auditUserName": "王五",
				"rejectReason": "信息不完整"
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


# 管理员论坛管理


## 设置帖子置顶


**接口地址**:`/api/admin/forum/posts/{postId}/top`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员设置/取消帖子置顶</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|isTop|是否置顶（0-否，1-是）|query|true|integer(int32)||


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


## 设置帖子精华


**接口地址**:`/api/admin/forum/posts/{postId}/essence`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员设置/取消帖子精华</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|isEssence|是否精华（0-否，1-是）|query|true|integer(int32)||


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


## 删除帖子


**接口地址**:`/api/admin/forum/posts/{postId}/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员删除帖子（软删除）</p>



**请求示例**:


```javascript
{
  "reason": "违反社区规定"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|adminDeletePostRequest|删除请求|body|true|AdminDeletePostRequest|AdminDeletePostRequest|
|&emsp;&emsp;reason|删除原因||true|string||


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


## 审核帖子


**接口地址**:`/api/admin/forum/posts/{postId}/audit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员审核待审核的帖子（通过或拒绝）</p>



**请求示例**:


```javascript
{
  "status": 1,
  "reason": "内容违规"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||
|adminAuditPostRequest|审核请求|body|true|AdminAuditPostRequest|AdminAuditPostRequest|
|&emsp;&emsp;status|状态（1-通过, 0-拒绝）||true|integer(int32)||
|&emsp;&emsp;reason|原因（拒绝时需要）||false|string||


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


## 查询所有帖子


**接口地址**:`/api/admin/forum/posts/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有帖子，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "sectionId": 1,
  "status": 1,
  "keyword": "测试",
  "userId": 1,
  "startTime": "2026-01-01 00:00:00",
  "endTime": "2026-01-31 23:59:59",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminPostQueryRequest|查询条件|body|true|AdminPostQueryRequest|AdminPostQueryRequest|
|&emsp;&emsp;sectionId|板块ID||false|integer(int64)||
|&emsp;&emsp;status|状态（0-已删除, 1-正常, 2-待审核）||false|integer(int32)||
|&emsp;&emsp;keyword|关键词搜索（标题或内容）||false|string||
|&emsp;&emsp;userId|用户ID||false|integer(int64)||
|&emsp;&emsp;startTime|开始时间||false|string||
|&emsp;&emsp;endTime|结束时间||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页大小||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPagePostListItemResponse|
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
|data||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;records|帖子列表项响应|array|PostListItemResponse|
|&emsp;&emsp;&emsp;&emsp;postId|帖子ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionId|板块ID|integer||
|&emsp;&emsp;&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;&emsp;&emsp;userId|发帖用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|发帖用户名|string||
|&emsp;&emsp;&emsp;&emsp;userAvatar|发帖用户头像|string||
|&emsp;&emsp;&emsp;&emsp;title|帖子标题|string||
|&emsp;&emsp;&emsp;&emsp;contentSummary|帖子内容摘要|string||
|&emsp;&emsp;&emsp;&emsp;firstImage|首图URL|string||
|&emsp;&emsp;&emsp;&emsp;viewCount|浏览次数|integer||
|&emsp;&emsp;&emsp;&emsp;likeCount|点赞数|integer||
|&emsp;&emsp;&emsp;&emsp;commentCount|评论数|integer||
|&emsp;&emsp;&emsp;&emsp;isTop|是否置顶 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isEssence|是否精华 0-否 1-是|integer||
|&emsp;&emsp;&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;&emsp;&emsp;isCollected|当前用户是否已收藏|boolean||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PagePostListItemResponse|PagePostListItemResponse|
|&emsp;&emsp;searchCount||PagePostListItemResponse|PagePostListItemResponse|
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
				"postId": 0,
				"sectionId": 0,
				"sectionName": "",
				"userId": 0,
				"userName": "",
				"userAvatar": "",
				"title": "",
				"contentSummary": "",
				"firstImage": "",
				"viewCount": 0,
				"likeCount": 0,
				"commentCount": 0,
				"isTop": 0,
				"isEssence": 0,
				"isLiked": true,
				"isCollected": false,
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


## 论坛统计


**接口地址**:`/api/admin/forum/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取论坛统计数据</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime|开始时间|query|false|string||
|endTime|结束时间|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


## 查询帖子详情


**接口地址**:`/api/admin/forum/posts/{postId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询指定帖子的详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|帖子ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPostDetailResponse|
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
|data||PostDetailResponse|PostDetailResponse|
|&emsp;&emsp;postId|帖子ID|integer(int64)||
|&emsp;&emsp;sectionId|板块ID|integer(int64)||
|&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;userId|发帖用户ID|integer(int64)||
|&emsp;&emsp;userName|发帖用户名|string||
|&emsp;&emsp;userAvatar|发帖用户头像|string||
|&emsp;&emsp;title|帖子标题|string||
|&emsp;&emsp;content|帖子内容|string||
|&emsp;&emsp;images|图片URL列表，逗号分隔|string||
|&emsp;&emsp;viewCount|浏览次数|integer(int32)||
|&emsp;&emsp;likeCount|点赞数|integer(int32)||
|&emsp;&emsp;commentCount|评论数|integer(int32)||
|&emsp;&emsp;collectCount|收藏数|integer(int32)||
|&emsp;&emsp;isTop|是否置顶 0-否 1-是|integer(int32)||
|&emsp;&emsp;isEssence|是否精华 0-否 1-是|integer(int32)||
|&emsp;&emsp;isLiked|当前用户是否已点赞|boolean||
|&emsp;&emsp;isCollected|当前用户是否已收藏|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"postId": 0,
		"sectionId": 0,
		"sectionName": "",
		"userId": 0,
		"userName": "",
		"userAvatar": "",
		"title": "",
		"content": "",
		"images": "",
		"viewCount": 0,
		"likeCount": 0,
		"commentCount": 0,
		"collectCount": 0,
		"isTop": 0,
		"isEssence": 0,
		"isLiked": true,
		"isCollected": true,
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


# 物业管理-报事维修


## 处理报事维修（管理员）


**接口地址**:`/api/repair/admin/{reportId}/handle`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员处理用户提交的报事维修申请。可以将状态更新为处理中、已完成或已驳回，并填写处理结果。</p>



**请求示例**:


```javascript
{
  "status": 2,
  "handleResult": "已安排维修人员上门处理，问题已解决"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reportId|报事维修ID|path|true|integer(int64)||
|repairHandleRequest|处理请求|body|true|RepairHandleRequest|RepairHandleRequest|
|&emsp;&emsp;status|处理状态：1-处理中，2-已完成，3-已驳回||true|integer(int32)||
|&emsp;&emsp;handleResult|处理结果||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|处理成功|ResultVoid|
|400|参数错误|ResultVoid|
|401|未授权（token无效或过期）|ResultRepairReportResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|
|600|业务异常（如记录不存在）|ResultRepairReportResponse|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||RepairReportResponse|RepairReportResponse|
|&emsp;&emsp;reportId|报事ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"reportId": 1,
		"userId": 1,
		"reportType": "水电维修",
		"description": "厨房水龙头漏水，需要维修",
		"location": "21号楼2单元201",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已安排维修人员上门处理，问题已解决"
	},
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


**响应状态码-600**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||RepairReportResponse|RepairReportResponse|
|&emsp;&emsp;reportId|报事ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"reportId": 1,
		"userId": 1,
		"reportType": "水电维修",
		"description": "厨房水龙头漏水，需要维修",
		"location": "21号楼2单元201",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已安排维修人员上门处理，问题已解决"
	},
	"timestamp": 1640995200000
}
```


## 提交报事维修


**接口地址**:`/api/repair/submit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`application/json,*/*`


**接口描述**:<p>用户提交报事维修申请。需要选择事项类型（如水电维修、电梯故障等）并详细描述问题。提交后状态为待处理，社区管理人员会及时处理。</p>



**请求示例**:


```javascript
{
  "reportType": "水电维修",
  "description": "厨房水龙头漏水，需要维修",
  "location": "61栋2单元2304"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|repairReportRequest|报事维修请求参数|body|true|RepairReportRequest|RepairReportRequest|
|&emsp;&emsp;reportType|事项类型,可用值:水电维修,电梯故障,门窗维修,网络故障,供暖问题,环境卫生,其他||true|string||
|&emsp;&emsp;description|事项描述，请详细描述问题的具体情况||true|string||
|&emsp;&emsp;location|报修位置||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|提交成功|Result|
|400|请求参数错误|ResultVoid|
|401|未授权，token无效或过期|ResultRepairReportResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||RepairReportResponse|RepairReportResponse|
|&emsp;&emsp;reportId|报事ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"reportId": 1,
		"userId": 1,
		"reportType": "水电维修",
		"description": "厨房水龙头漏水，需要维修",
		"location": "21号楼2单元201",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已安排维修人员上门处理，问题已解决"
	},
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


## 查询所有报事维修列表（管理员）


**接口地址**:`/api/repair/admin/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询用户提交的报事维修申请。支持按事项类型、处理状态、用户ID、关键词等条件筛选，支持分页查询。</p>



**请求示例**:


```javascript
{
  "reportType": "水电维修",
  "status": 0,
  "userId": 1,
  "keyword": "水龙头",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|repairQueryRequest|查询条件|body|true|RepairQueryRequest|RepairQueryRequest|
|&emsp;&emsp;reportType|事项类型（可选）||false|string||
|&emsp;&emsp;status|处理状态（可选）：0-待处理，1-处理中，2-已完成，3-已驳回||false|integer(int32)||
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;keyword|关键词搜索（可选，搜索事项描述和地点）||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功|ResultVoid|
|400|Bad Request|ResultVoid|
|401|未授权（token无效或过期）|ResultPageRepairReportResponse|
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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageRepairReportResponse|PageRepairReportResponse|
|&emsp;&emsp;records|报事维修响应数据|array|RepairReportResponse|
|&emsp;&emsp;&emsp;&emsp;reportId|报事ID，唯一标识|integer||
|&emsp;&emsp;&emsp;&emsp;userId|提交用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|提交时间|string||
|&emsp;&emsp;&emsp;&emsp;handleTime|处理时间，未处理时为null|string||
|&emsp;&emsp;&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer||
|&emsp;&emsp;&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageRepairReportResponse|PageRepairReportResponse|
|&emsp;&emsp;searchCount||PageRepairReportResponse|PageRepairReportResponse|
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
				"reportId": 1,
				"userId": 1,
				"reportType": "水电维修",
				"description": "厨房水龙头漏水，需要维修",
				"location": "21号楼2单元201",
				"status": 2,
				"statusText": "已完成",
				"createTime": "",
				"handleTime": "",
				"handleUserId": 1,
				"handleResult": "已安排维修人员上门处理，问题已解决"
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


## 查询报事维修详情


**接口地址**:`/api/repair/{reportId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定报事维修的详细信息，包括处理状态、处理时间、处理人员、处理结果等完整信息。只能查询自己提交的维修记录。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reportId|报事维修ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权，token无效或过期|ResultRepairReportResponse|
|403|Forbidden|ResultVoid|
|404|报事维修记录不存在或无权访问||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||RepairReportResponse|RepairReportResponse|
|&emsp;&emsp;reportId|报事ID，唯一标识|integer(int64)||
|&emsp;&emsp;userId|提交用户ID|integer(int64)||
|&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer(int32)||
|&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;createTime|提交时间|string(date-time)||
|&emsp;&emsp;handleTime|处理时间，未处理时为null|string(date-time)||
|&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer(int64)||
|&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"reportId": 1,
		"userId": 1,
		"reportType": "水电维修",
		"description": "厨房水龙头漏水，需要维修",
		"location": "21号楼2单元201",
		"status": 2,
		"statusText": "已完成",
		"createTime": "",
		"handleTime": "",
		"handleUserId": 1,
		"handleResult": "已安排维修人员上门处理，问题已解决"
	},
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


## 查询我的报事维修列表


**接口地址**:`/api/repair/my-list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户提交的所有报事维修记录。支持按处理状态筛选（待处理、处理中、已完成、已驳回），支持分页查询。结果按创建时间倒序排列，最新的记录在前面。</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNum|页码，从1开始|query|true|integer(int32)||
|pageSize|每页记录数|query|true|integer(int32)||
|status|处理状态筛选（可选）,可用值:0,1,2,3|query|false|integer||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功||
|400|Bad Request|ResultVoid|
|401|未授权，token无效或过期|ResultPageRepairReportResponse|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|响应码|integer(int32)|integer(int32)|
|message|响应消息|string||
|data||PageRepairReportResponse|PageRepairReportResponse|
|&emsp;&emsp;records|报事维修响应数据|array|RepairReportResponse|
|&emsp;&emsp;&emsp;&emsp;reportId|报事ID，唯一标识|integer||
|&emsp;&emsp;&emsp;&emsp;userId|提交用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;reportType|事项类型|string||
|&emsp;&emsp;&emsp;&emsp;description|事项描述|string||
|&emsp;&emsp;&emsp;&emsp;location|报修地点|string||
|&emsp;&emsp;&emsp;&emsp;status|处理状态,可用值:0,1,2,3|integer||
|&emsp;&emsp;&emsp;&emsp;statusText|状态描述文本|string||
|&emsp;&emsp;&emsp;&emsp;createTime|提交时间|string||
|&emsp;&emsp;&emsp;&emsp;handleTime|处理时间，未处理时为null|string||
|&emsp;&emsp;&emsp;&emsp;handleUserId|处理人员ID，未处理时为null|integer||
|&emsp;&emsp;&emsp;&emsp;handleResult|处理结果说明，未处理时为null|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageRepairReportResponse|PageRepairReportResponse|
|&emsp;&emsp;searchCount||PageRepairReportResponse|PageRepairReportResponse|
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
				"reportId": 1,
				"userId": 1,
				"reportType": "水电维修",
				"description": "厨房水龙头漏水，需要维修",
				"location": "21号楼2单元201",
				"status": 2,
				"statusText": "已完成",
				"createTime": "",
				"handleTime": "",
				"handleUserId": 1,
				"handleResult": "已安排维修人员上门处理，问题已解决"
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


# 钱包管理


## 转账


**接口地址**:`/api/wallet/transfer`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>向其他用户转账</p>



**请求示例**:


```javascript
{
  "toUserId": 0,
  "amount": 0,
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|transferRequest|转账请求|body|true|TransferRequest|TransferRequest|
|&emsp;&emsp;toUserId|||true|integer(int64)||
|&emsp;&emsp;amount|||true|number||
|&emsp;&emsp;description|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultWalletTransaction|
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
|data||WalletTransaction|WalletTransaction|
|&emsp;&emsp;transactionId||integer(int64)||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;transactionNo||string||
|&emsp;&emsp;transactionType||string||
|&emsp;&emsp;amount||number||
|&emsp;&emsp;balanceBefore||number||
|&emsp;&emsp;balanceAfter||number||
|&emsp;&emsp;relatedUserId||integer(int64)||
|&emsp;&emsp;relatedOrderNo||string||
|&emsp;&emsp;description||string||
|&emsp;&emsp;createTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"transactionId": 0,
		"userId": 0,
		"transactionNo": "",
		"transactionType": "",
		"amount": 0,
		"balanceBefore": 0,
		"balanceAfter": 0,
		"relatedUserId": 0,
		"relatedOrderNo": "",
		"description": "",
		"createTime": ""
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


## 充值


**接口地址**:`/api/wallet/recharge`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建充值订单并发起支付（便捷接口，等同于 /payment/create-and-pay）</p>



**请求示例**:


```javascript
{
  "amount": 0,
  "paymentMethod": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|rechargeRequest|充值请求|body|true|RechargeRequest|RechargeRequest|
|&emsp;&emsp;amount|||true|number||
|&emsp;&emsp;paymentMethod|||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPaymentResponse|
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
|data||PaymentResponse|PaymentResponse|
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;amount|支付金额|number||
|&emsp;&emsp;status|支付状态：0-待支付, 1-支付中, 2-支付成功, 3-支付失败|integer(int32)||
|&emsp;&emsp;paymentUrl|支付URL（用于跳转支付页面）|string||
|&emsp;&emsp;thirdPartyOrderNo|第三方订单号|string||
|&emsp;&emsp;message|提示信息|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderNo": "",
		"paymentMethod": "",
		"amount": 0,
		"status": 0,
		"paymentUrl": "",
		"thirdPartyOrderNo": "",
		"message": ""
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


## 查询交易记录


**接口地址**:`/api/wallet/transactions`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户的交易记录</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|type|交易类型|query|false|string||
|page|页码|query|false|integer(int32)||
|size|每页数量|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListWalletTransaction|
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
|data|响应数据|array|WalletTransaction|
|&emsp;&emsp;transactionId||integer(int64)||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;transactionNo||string||
|&emsp;&emsp;transactionType||string||
|&emsp;&emsp;amount||number||
|&emsp;&emsp;balanceBefore||number||
|&emsp;&emsp;balanceAfter||number||
|&emsp;&emsp;relatedUserId||integer(int64)||
|&emsp;&emsp;relatedOrderNo||string||
|&emsp;&emsp;description||string||
|&emsp;&emsp;createTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"transactionId": 0,
			"userId": 0,
			"transactionNo": "",
			"transactionType": "",
			"amount": 0,
			"balanceBefore": 0,
			"balanceAfter": 0,
			"relatedUserId": 0,
			"relatedOrderNo": "",
			"description": "",
			"createTime": ""
		}
	],
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


## 获取钱包信息


**接口地址**:`/api/wallet/info`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户的钱包信息</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserWallet|
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
|data||UserWallet|UserWallet|
|&emsp;&emsp;walletId||integer(int64)||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;balance||number||
|&emsp;&emsp;frozenAmount||number||
|&emsp;&emsp;totalRecharge||number||
|&emsp;&emsp;totalExpense||number||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"walletId": 0,
		"userId": 0,
		"balance": 0,
		"frozenAmount": 0,
		"totalRecharge": 0,
		"totalExpense": 0,
		"status": 0,
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


# 论坛板块管理


## 获取板块列表


**接口地址**:`/api/forum/section/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取所有启用的板块列表</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListSectionResponse|
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
|data|响应数据|array|SectionResponse|
|&emsp;&emsp;sectionId|板块ID|integer(int64)||
|&emsp;&emsp;sectionName|板块名称|string||
|&emsp;&emsp;sectionDesc|板块描述|string||
|&emsp;&emsp;iconUrl|板块图标URL|string||
|&emsp;&emsp;sortOrder|排序序号|integer(int32)||
|&emsp;&emsp;postCount|帖子数量|integer(int32)||
|&emsp;&emsp;status|状态 0-禁用 1-启用|integer(int32)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"sectionId": 0,
			"sectionName": "",
			"sectionDesc": "",
			"iconUrl": "",
			"sortOrder": 0,
			"postCount": 0,
			"status": 0,
			"createTime": ""
		}
	],
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


# 支付管理


## 模拟支付回调


**接口地址**:`/api/payment/mock/callback/{orderNo}`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>模拟第三方支付回调（仅用于开发测试）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|订单号|path|true|string||
|success|是否成功|query|false|boolean||


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


## 发起支付


**接口地址**:`/api/payment/initiate/{orderNo}`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>发起支付（返回支付URL）</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|订单号|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPaymentResponse|
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
|data||PaymentResponse|PaymentResponse|
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;amount|支付金额|number||
|&emsp;&emsp;status|支付状态：0-待支付, 1-支付中, 2-支付成功, 3-支付失败|integer(int32)||
|&emsp;&emsp;paymentUrl|支付URL（用于跳转支付页面）|string||
|&emsp;&emsp;thirdPartyOrderNo|第三方订单号|string||
|&emsp;&emsp;message|提示信息|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderNo": "",
		"paymentMethod": "",
		"amount": 0,
		"status": 0,
		"paymentUrl": "",
		"thirdPartyOrderNo": "",
		"message": ""
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


## 创建支付订单


**接口地址**:`/api/payment/create-order`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建支付订单（通用接口），创建后需要调用发起支付接口</p>



**请求示例**:


```javascript
{
  "orderType": "RECHARGE",
  "amount": 100,
  "paymentMethod": "ALIPAY",
  "relatedId": 1,
  "description": "钱包充值"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createPaymentOrderRequest|创建订单请求|body|true|CreatePaymentOrderRequest|CreatePaymentOrderRequest|
|&emsp;&emsp;orderType|订单类型：RECHARGE-充值, PROPERTY_FEE-物业费||true|string||
|&emsp;&emsp;amount|订单金额||true|number||
|&emsp;&emsp;paymentMethod|支付方式：ALIPAY-支付宝, WECHAT-微信, WALLET-钱包||true|string||
|&emsp;&emsp;relatedId|关联业务ID（如物业费账单ID）||false|integer(int64)||
|&emsp;&emsp;description|订单描述||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPaymentOrder|
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
|data||PaymentOrder|PaymentOrder|
|&emsp;&emsp;orderId||integer(int64)||
|&emsp;&emsp;orderNo||string||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;orderType||string||
|&emsp;&emsp;amount||number||
|&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;relatedId||integer(int64)||
|&emsp;&emsp;thirdPartyOrderNo||string||
|&emsp;&emsp;callbackTime||string(date-time)||
|&emsp;&emsp;expireTime||string(date-time)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;storeId||integer(int64)||
|&emsp;&emsp;pickUpTime||string(date-time)||
|&emsp;&emsp;finishTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderId": 0,
		"orderNo": "",
		"userId": 0,
		"orderType": "",
		"amount": 0,
		"paymentMethod": "",
		"status": 0,
		"relatedId": 0,
		"thirdPartyOrderNo": "",
		"callbackTime": "",
		"expireTime": "",
		"description": "",
		"createTime": "",
		"updateTime": "",
		"storeId": 0,
		"pickUpTime": "",
		"finishTime": ""
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


## 创建订单并发起支付


**接口地址**:`/api/payment/create-and-pay`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>一步完成创建订单和发起支付（便捷接口）</p>



**请求示例**:


```javascript
{
  "orderType": "RECHARGE",
  "amount": 100,
  "paymentMethod": "ALIPAY",
  "relatedId": 1,
  "description": "钱包充值"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createPaymentOrderRequest|创建订单请求|body|true|CreatePaymentOrderRequest|CreatePaymentOrderRequest|
|&emsp;&emsp;orderType|订单类型：RECHARGE-充值, PROPERTY_FEE-物业费||true|string||
|&emsp;&emsp;amount|订单金额||true|number||
|&emsp;&emsp;paymentMethod|支付方式：ALIPAY-支付宝, WECHAT-微信, WALLET-钱包||true|string||
|&emsp;&emsp;relatedId|关联业务ID（如物业费账单ID）||false|integer(int64)||
|&emsp;&emsp;description|订单描述||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPaymentResponse|
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
|data||PaymentResponse|PaymentResponse|
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;paymentMethod|支付方式|string||
|&emsp;&emsp;amount|支付金额|number||
|&emsp;&emsp;status|支付状态：0-待支付, 1-支付中, 2-支付成功, 3-支付失败|integer(int32)||
|&emsp;&emsp;paymentUrl|支付URL（用于跳转支付页面）|string||
|&emsp;&emsp;thirdPartyOrderNo|第三方订单号|string||
|&emsp;&emsp;message|提示信息|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderNo": "",
		"paymentMethod": "",
		"amount": 0,
		"status": 0,
		"paymentUrl": "",
		"thirdPartyOrderNo": "",
		"message": ""
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


## 更新支付方式


**接口地址**:`/api/payment/changePayMethod/{orderNo}`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>根据订单号更新支付方式</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|订单号|path|true|string||
|paymentMethod|支付方式|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
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


## 取消订单


**接口地址**:`/api/payment/cancel/{orderNo}`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>取消支付订单</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|订单号|path|true|string||


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


## 查询订单状态


**接口地址**:`/api/payment/query/{orderNo}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询支付订单状态</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|订单号|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPaymentOrder|
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
|data||PaymentOrder|PaymentOrder|
|&emsp;&emsp;orderId||integer(int64)||
|&emsp;&emsp;orderNo||string||
|&emsp;&emsp;userId||integer(int64)||
|&emsp;&emsp;orderType||string||
|&emsp;&emsp;amount||number||
|&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;relatedId||integer(int64)||
|&emsp;&emsp;thirdPartyOrderNo||string||
|&emsp;&emsp;callbackTime||string(date-time)||
|&emsp;&emsp;expireTime||string(date-time)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;storeId||integer(int64)||
|&emsp;&emsp;pickUpTime||string(date-time)||
|&emsp;&emsp;finishTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"orderId": 0,
		"orderNo": "",
		"userId": 0,
		"orderType": "",
		"amount": 0,
		"paymentMethod": "",
		"status": 0,
		"relatedId": 0,
		"thirdPartyOrderNo": "",
		"callbackTime": "",
		"expireTime": "",
		"description": "",
		"createTime": "",
		"updateTime": "",
		"storeId": 0,
		"pickUpTime": "",
		"finishTime": ""
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


# 管理员通知管理


## 发送通知


**接口地址**:`/api/admin/notification/send`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员发送通知（可发送给单个用户或全体用户）</p>



**请求示例**:


```javascript
{
  "userId": 123,
  "type": 1,
  "title": "系统维护通知",
  "content": "系统将于今晚22:00-24:00进行维护",
  "relatedId": 456
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sendNotificationRequest|发送通知请求|body|true|SendNotificationRequest|SendNotificationRequest|
|&emsp;&emsp;userId|用户ID（可选，不填则发送给所有用户）||false|integer(int64)||
|&emsp;&emsp;type|通知类型||true|integer(int32)||
|&emsp;&emsp;title|通知标题||true|string||
|&emsp;&emsp;content|通知内容||true|string||
|&emsp;&emsp;relatedId|关联ID（可选）||false|integer(int64)||


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


## 查询所有通知


**接口地址**:`/api/admin/notification/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员分页查询所有通知，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "userId": 123,
  "type": 1,
  "isRead": 0,
  "keyword": "公告",
  "startTime": "2026-01-01 00:00:00",
  "endTime": "2026-01-31 23:59:59",
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminNotificationQueryRequest|查询条件|body|true|AdminNotificationQueryRequest|AdminNotificationQueryRequest|
|&emsp;&emsp;userId|用户ID（可选）||false|integer(int64)||
|&emsp;&emsp;type|通知类型（可选，1-系统通知 2-点赞通知 3-评论通知 4-好友申请 5-私信通知）||false|integer(int32)||
|&emsp;&emsp;isRead|是否已读（可选，0-未读 1-已读）||false|integer(int32)||
|&emsp;&emsp;keyword|关键词搜索（标题或内容）||false|string||
|&emsp;&emsp;startTime|开始时间||false|string||
|&emsp;&emsp;endTime|结束时间||false|string||
|&emsp;&emsp;pageNum|页码||true|integer(int32)||
|&emsp;&emsp;pageSize|每页大小||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageNotificationDetailVO|
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
|data||PageNotificationDetailVO|PageNotificationDetailVO|
|&emsp;&emsp;records|通知详情|array|NotificationDetailVO|
|&emsp;&emsp;&emsp;&emsp;notificationId|通知ID|integer||
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;type|通知类型|integer||
|&emsp;&emsp;&emsp;&emsp;typeDesc|通知类型描述|string||
|&emsp;&emsp;&emsp;&emsp;title|通知标题|string||
|&emsp;&emsp;&emsp;&emsp;content|通知内容|string||
|&emsp;&emsp;&emsp;&emsp;relatedId|关联ID|integer||
|&emsp;&emsp;&emsp;&emsp;isRead|是否已读 0-未读 1-已读|integer||
|&emsp;&emsp;&emsp;&emsp;isReadDesc|是否已读描述|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageNotificationDetailVO|PageNotificationDetailVO|
|&emsp;&emsp;searchCount||PageNotificationDetailVO|PageNotificationDetailVO|
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
				"notificationId": 0,
				"userId": 0,
				"userName": "",
				"userPhone": "",
				"type": 0,
				"typeDesc": "",
				"title": "",
				"content": "",
				"relatedId": 0,
				"isRead": 0,
				"isReadDesc": "",
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


## 批量删除通知


**接口地址**:`/api/admin/notification/batch-delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员批量删除通知</p>



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


## 查询通知详情


**接口地址**:`/api/admin/notification/{notificationId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询指定通知的详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|notificationId|通知ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultNotificationDetailVO|
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
|data||NotificationDetailVO|NotificationDetailVO|
|&emsp;&emsp;notificationId|通知ID|integer(int64)||
|&emsp;&emsp;userId|用户ID|integer(int64)||
|&emsp;&emsp;userName|用户名|string||
|&emsp;&emsp;userPhone|用户手机号|string||
|&emsp;&emsp;type|通知类型|integer(int32)||
|&emsp;&emsp;typeDesc|通知类型描述|string||
|&emsp;&emsp;title|通知标题|string||
|&emsp;&emsp;content|通知内容|string||
|&emsp;&emsp;relatedId|关联ID|integer(int64)||
|&emsp;&emsp;isRead|是否已读 0-未读 1-已读|integer(int32)||
|&emsp;&emsp;isReadDesc|是否已读描述|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"notificationId": 0,
		"userId": 0,
		"userName": "",
		"userPhone": "",
		"type": 0,
		"typeDesc": "",
		"title": "",
		"content": "",
		"relatedId": 0,
		"isRead": 0,
		"isReadDesc": "",
		"createTime": ""
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


## 删除通知


**接口地址**:`/api/admin/notification/{notificationId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员删除指定通知</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|notificationId|通知ID|path|true|integer(int64)||


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


## 通知统计


**接口地址**:`/api/admin/notification/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员获取通知统计数据</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime|开始时间|query|false|string||
|endTime|结束时间|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
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


# 购物车管理接口


## 更新购物车商品数量


**接口地址**:`/api/mall/cart/items/{cartItemId}/quantity`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "cartId": 0,
  "productId": 0,
  "quantity": 0,
  "operation": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|cartItemId||path|true|integer(int64)||
|shoppingCartItemRequest|购物车项操作请求|body|true|ShoppingCartItemRequest|ShoppingCartItemRequest|
|&emsp;&emsp;cartId|购物车ID||false|integer(int64)||
|&emsp;&emsp;productId|商品ID||false|integer(int64)||
|&emsp;&emsp;quantity|更新数量||false|integer(int32)||
|&emsp;&emsp;operation|操作类型：update(更新数量), remove(移除)||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
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


## 获取购物车商品列表


**接口地址**:`/api/mall/cart/items`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListShoppingCartItemVO|
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
|data|响应数据|array|ShoppingCartItemVO|
|&emsp;&emsp;cartId|购物车ID|integer(int64)||
|&emsp;&emsp;productId|商品ID|integer(int64)||
|&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;price|商品价格|number||
|&emsp;&emsp;coverImg|封面图片|string||
|&emsp;&emsp;storeId|门店ID|integer(int64)||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;quantity|商品数量|integer(int32)||
|&emsp;&emsp;subtotal|小计金额|number||
|&emsp;&emsp;stock|商品当前库存|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"cartId": 0,
			"productId": 0,
			"productName": "",
			"price": 0,
			"coverImg": "",
			"storeId": 0,
			"storeName": "",
			"quantity": 0,
			"subtotal": 0,
			"stock": 0
		}
	],
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


## 添加商品到购物车


**接口地址**:`/api/mall/cart/items`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productId": 0,
  "storeId": 0,
  "quantity": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|addToCartRequest|添加购物车请求|body|true|AddToCartRequest|AddToCartRequest|
|&emsp;&emsp;productId|商品ID||false|integer(int64)||
|&emsp;&emsp;storeId|门店ID||false|integer(int64)||
|&emsp;&emsp;quantity|商品数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
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


## 移除购物车商品


**接口地址**:`/api/mall/cart/items/{cartItemId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|cartItemId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
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


# 管理端-门店管理接口


## 新增门店


**接口地址**:`/api/admin/stores`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "storeId": 0,
  "storeName": "",
  "areaId": 0,
  "address": "",
  "businessHours": "",
  "contactPhone": "",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRequest|门店请求|body|true|StoreRequest|StoreRequest|
|&emsp;&emsp;storeId|门店ID||false|integer(int64)||
|&emsp;&emsp;storeName|门店名称||true|string||
|&emsp;&emsp;areaId|区域ID||true|integer(int64)||
|&emsp;&emsp;address|详细地址||true|string||
|&emsp;&emsp;businessHours|营业时间||true|string||
|&emsp;&emsp;contactPhone|联系电话||true|string||
|&emsp;&emsp;status|状态（NORMAL-正常、CLOSED-关闭）||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 修改门店


**接口地址**:`/api/admin/stores`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "storeId": 0,
  "storeName": "",
  "areaId": 0,
  "address": "",
  "businessHours": "",
  "contactPhone": "",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRequest|门店请求|body|true|StoreRequest|StoreRequest|
|&emsp;&emsp;storeId|门店ID||false|integer(int64)||
|&emsp;&emsp;storeName|门店名称||true|string||
|&emsp;&emsp;areaId|区域ID||true|integer(int64)||
|&emsp;&emsp;address|详细地址||true|string||
|&emsp;&emsp;businessHours|营业时间||true|string||
|&emsp;&emsp;contactPhone|联系电话||true|string||
|&emsp;&emsp;status|状态（NORMAL-正常、CLOSED-关闭）||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 门店列表


**接口地址**:`/api/admin/stores/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "storeName": "",
  "areaId": 0,
  "status": 0,
  "orderBy": "",
  "isAsc": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminStoreListRequest|管理端门店列表查询请求|body|true|AdminStoreListRequest|AdminStoreListRequest|
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称（模糊查询）||false|string||
|&emsp;&emsp;areaId|所属区域ID||false|integer(int64)||
|&emsp;&emsp;status|状态 0-关闭 1-正常营业||false|integer(int32)||
|&emsp;&emsp;orderBy|排序字段||false|string||
|&emsp;&emsp;isAsc|是否升序||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResultStoreVO|
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
|data||PageResultStoreVO|PageResultStoreVO|
|&emsp;&emsp;pages|总页数|integer(int64)||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;list|门店详情|array|StoreVO|
|&emsp;&emsp;&emsp;&emsp;storeId|门店ID|integer||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;address|详细地址|string||
|&emsp;&emsp;&emsp;&emsp;businessHours|营业时间|string||
|&emsp;&emsp;&emsp;&emsp;contactPhone|联系电话|string||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-关闭 1-正常营业|integer||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"pages": 0,
		"total": 0,
		"list": [
			{
				"storeId": 0,
				"storeName": "",
				"address": "",
				"businessHours": "",
				"contactPhone": "",
				"status": 0
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


## 删除门店


**接口地址**:`/api/admin/stores/{storeId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


# 管理端-门店商品管理


## 添加门店商品


**接口地址**:`/api/admin/store-products`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>为指定门店添加商品</p>



**请求示例**:


```javascript
{
  "storeId": 1,
  "productId": 1,
  "stock": 100,
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|addStoreProductRequest|添加门店商品请求|body|true|AddStoreProductRequest|AddStoreProductRequest|
|&emsp;&emsp;storeId|门店ID||true|integer(int64)||
|&emsp;&emsp;productId|商品ID||true|integer(int64)||
|&emsp;&emsp;stock|库存数量||true|integer(int32)||
|&emsp;&emsp;status|状态 0-下架 1-上架||false|integer(int32)||


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


## 更新门店商品


**接口地址**:`/api/admin/store-products`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新门店商品的库存和状态</p>



**请求示例**:


```javascript
{
  "id": 1,
  "stock": 100,
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateStoreProductRequest|更新门店商品请求|body|true|UpdateStoreProductRequest|UpdateStoreProductRequest|
|&emsp;&emsp;id|门店商品ID||true|integer(int64)||
|&emsp;&emsp;stock|库存数量||false|integer(int32)||
|&emsp;&emsp;status|状态 0-下架 1-上架||false|integer(int32)||


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


## 修改门店商品库存（简化版）


**接口地址**:`/api/admin/store-products/{storeProductId}/stock`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "stock": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeProductId||path|true|integer(int64)||
|storeProductStockRequest|门店商品库存分配请求|body|true|StoreProductStockRequest|StoreProductStockRequest|
|&emsp;&emsp;stock|新库存数量||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 门店商品上下架（简化版）


**接口地址**:`/api/admin/store-products/{storeProductId}/status`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeProductId||path|true|integer(int64)||
|storeProductStatusRequest|门店商品上下架请求|body|true|StoreProductStatusRequest|StoreProductStatusRequest|
|&emsp;&emsp;status|状态||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 分页查询门店商品列表


**接口地址**:`/api/admin/store-products/query`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>管理员查询门店商品列表，支持多条件筛选</p>



**请求示例**:


```javascript
{
  "storeId": 1,
  "productId": 1,
  "productName": "苹果",
  "storeName": "一号店",
  "status": 1,
  "pageNum": 1,
  "pageSize": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminStoreProductQueryRequest|管理端-门店商品查询请求|body|true|AdminStoreProductQueryRequest|AdminStoreProductQueryRequest|
|&emsp;&emsp;storeId|门店ID||false|integer(int64)||
|&emsp;&emsp;productId|商品ID||false|integer(int64)||
|&emsp;&emsp;productName|商品名称（模糊查询）||false|string||
|&emsp;&emsp;storeName|门店名称（模糊查询）||false|string||
|&emsp;&emsp;status|状态 0-下架 1-上架||false|integer(int32)||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageStoreProductVO|
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
|data||PageStoreProductVO|PageStoreProductVO|
|&emsp;&emsp;records|门店商品VO|array|StoreProductVO|
|&emsp;&emsp;&emsp;&emsp;id|门店商品ID|integer||
|&emsp;&emsp;&emsp;&emsp;storeId|门店ID|integer||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;&emsp;&emsp;storeContactPhone|门店联系电话|string||
|&emsp;&emsp;&emsp;&emsp;storeStatus|门店状态 0-关闭 1-正常营业|integer||
|&emsp;&emsp;&emsp;&emsp;productId|商品ID|integer||
|&emsp;&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;productPrice|商品价格|string||
|&emsp;&emsp;&emsp;&emsp;productCoverImg|商品封面图片|string||
|&emsp;&emsp;&emsp;&emsp;productStatus|商品状态 0-下架 1-上架|integer||
|&emsp;&emsp;&emsp;&emsp;stock|库存数量|integer||
|&emsp;&emsp;&emsp;&emsp;status|状态 0-下架 1-上架|integer||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column||string||
|&emsp;&emsp;&emsp;&emsp;asc||boolean||
|&emsp;&emsp;optimizeCountSql||PageStoreProductVO|PageStoreProductVO|
|&emsp;&emsp;searchCount||PageStoreProductVO|PageStoreProductVO|
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
				"id": 1,
				"storeId": 1,
				"storeName": "一号店",
				"storeAddress": "北京市朝阳区xxx",
				"storeContactPhone": "13800138000",
				"storeStatus": 1,
				"productId": 1,
				"productName": "苹果",
				"productPrice": "10.0",
				"productCoverImg": "http://xxx.jpg",
				"productStatus": 1,
				"stock": 100,
				"status": 1,
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


## 批量更新门店商品状态


**接口地址**:`/api/admin/store-products/batch-update-status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量上架或下架门店商品</p>



**请求示例**:


```javascript
{
  "ids": [
    1,
    2,
    3
  ],
  "status": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|batchUpdateStoreProductRequest|批量更新门店商品请求|body|true|BatchUpdateStoreProductRequest|BatchUpdateStoreProductRequest|
|&emsp;&emsp;ids|门店商品ID列表||true|array|integer(int64)|
|&emsp;&emsp;status|状态 0-下架 1-上架||false|integer(int32)||


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


## 批量删除门店商品


**接口地址**:`/api/admin/store-products/batch-delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据ID列表批量删除门店商品</p>



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


## 获取门店商品详情


**接口地址**:`/api/admin/store-products/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>根据ID获取门店商品详细信息</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店商品ID|path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultStoreProductVO|
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
|data||StoreProductVO|StoreProductVO|
|&emsp;&emsp;id|门店商品ID|integer(int64)||
|&emsp;&emsp;storeId|门店ID|integer(int64)||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;storeContactPhone|门店联系电话|string||
|&emsp;&emsp;storeStatus|门店状态 0-关闭 1-正常营业|integer(int32)||
|&emsp;&emsp;productId|商品ID|integer(int64)||
|&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;productPrice|商品价格|string||
|&emsp;&emsp;productCoverImg|商品封面图片|string||
|&emsp;&emsp;productStatus|商品状态 0-下架 1-上架|integer(int32)||
|&emsp;&emsp;stock|库存数量|integer(int32)||
|&emsp;&emsp;status|状态 0-下架 1-上架|integer(int32)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"id": 1,
		"storeId": 1,
		"storeName": "一号店",
		"storeAddress": "北京市朝阳区xxx",
		"storeContactPhone": "13800138000",
		"storeStatus": 1,
		"productId": 1,
		"productName": "苹果",
		"productPrice": "10.0",
		"productCoverImg": "http://xxx.jpg",
		"productStatus": 1,
		"stock": 100,
		"status": 1,
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


## 删除门店商品


**接口地址**:`/api/admin/store-products/{id}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>根据ID删除门店商品</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店商品ID|path|true|integer(int64)||


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


## 获取门店商品统计信息


**接口地址**:`/api/admin/store-products/statistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取门店商品的各项统计数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultStoreProductStatisticsVO|
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
|data||StoreProductStatisticsVO|StoreProductStatisticsVO|
|&emsp;&emsp;totalCount|门店商品总数|integer(int64)||
|&emsp;&emsp;onlineCount|上架商品数|integer(int64)||
|&emsp;&emsp;offlineCount|下架商品数|integer(int64)||
|&emsp;&emsp;lowStockCount|库存不足商品数（库存<10）|integer(int64)||
|&emsp;&emsp;zeroStockCount|零库存商品数|integer(int64)||
|&emsp;&emsp;totalStock|总库存数量|integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"totalCount": 100,
		"onlineCount": 80,
		"offlineCount": 20,
		"lowStockCount": 5,
		"zeroStockCount": 3,
		"totalStock": 5000
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


# 管理端-营销管理接口


## 修改营销


**接口地址**:`/api/admin/promotions/{promotionId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "promotionId": 0,
  "promotionName": "",
  "promotionType": "",
  "startTime": "",
  "endTime": "",
  "productIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionId||path|true|integer(int64)||
|promotionRequest|促销请求|body|true|PromotionRequest|PromotionRequest|
|&emsp;&emsp;promotionId|促销ID||false|integer(int64)||
|&emsp;&emsp;promotionName|促销名称||true|string||
|&emsp;&emsp;promotionType|促销类型||true|string||
|&emsp;&emsp;startTime|开始时间||true|string(date-time)||
|&emsp;&emsp;endTime|结束时间||true|string(date-time)||
|&emsp;&emsp;productIds|绑定商品ID||false|array|integer(int64)|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 删除营销


**接口地址**:`/api/admin/promotions/{promotionId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 添加营销


**接口地址**:`/api/admin/promotions`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "promotionId": 0,
  "promotionName": "",
  "promotionType": "",
  "startTime": "",
  "endTime": "",
  "productIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionRequest|促销请求|body|true|PromotionRequest|PromotionRequest|
|&emsp;&emsp;promotionId|促销ID||false|integer(int64)||
|&emsp;&emsp;promotionName|促销名称||true|string||
|&emsp;&emsp;promotionType|促销类型||true|string||
|&emsp;&emsp;startTime|开始时间||true|string(date-time)||
|&emsp;&emsp;endTime|结束时间||true|string(date-time)||
|&emsp;&emsp;productIds|绑定商品ID||false|array|integer(int64)|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultLong|
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
|data|响应数据|integer(int64)|integer(int64)|
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


## 为促销绑定商品


**接口地址**:`/api/admin/promotions/{promotionId}/products`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionId||path|true|integer(int64)||
|promotionProductAddRequest|促销商品添加请求|body|true|PromotionProductAddRequest|PromotionProductAddRequest|
|&emsp;&emsp;productIds|商品ID列表||true|array|integer(int64)|


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


## 查询营销列表


**接口地址**:`/api/admin/promotions/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "promotionName": "",
  "promotionType": 0,
  "status": 0,
  "startTime": "",
  "endTime": "",
  "orderBy": "",
  "isAsc": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionPageRequest|促销分页查询请求|body|true|PromotionPageRequest|PromotionPageRequest|
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int32)||
|&emsp;&emsp;promotionName|促销名称（模糊查询）||false|string||
|&emsp;&emsp;promotionType|促销类型 1-明星商品 2-秒杀商品||false|integer(int32)||
|&emsp;&emsp;status|促销状态 0-失效 1-有效||false|integer(int32)||
|&emsp;&emsp;startTime|开始时间（大于等于）||false|string(date-time)||
|&emsp;&emsp;endTime|结束时间（小于等于）||false|string(date-time)||
|&emsp;&emsp;orderBy|排序字段||false|string||
|&emsp;&emsp;isAsc|是否升序||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResultPromotionVO|
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
|data||PageResultPromotionVO|PageResultPromotionVO|
|&emsp;&emsp;pages|总页数|integer(int64)||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;list|促销响应|array|PromotionVO|
|&emsp;&emsp;&emsp;&emsp;promotionId|促销ID|integer||
|&emsp;&emsp;&emsp;&emsp;promotionName|促销名称|string||
|&emsp;&emsp;&emsp;&emsp;promotionType|促销类型|string||
|&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;endTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;productIds|绑定的商品ID|array|integer|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"pages": 0,
		"total": 0,
		"list": [
			{
				"promotionId": 0,
				"promotionName": "",
				"promotionType": "",
				"startTime": "",
				"endTime": "",
				"productIds": []
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


# 管理端-商品分类管理


## 修改商品分类


**接口地址**:`/api/admin/product-categories/{categoryId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "categoryId": 0,
  "categoryName": "",
  "parentId": 0,
  "sortOrder": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|categoryId||path|true|integer(int64)||
|productCategoryRequest|商品分类请求|body|true|ProductCategoryRequest|ProductCategoryRequest|
|&emsp;&emsp;categoryId|分类ID||false|integer(int64)||
|&emsp;&emsp;categoryName|分类名称||true|string||
|&emsp;&emsp;parentId|父分类ID（顶级分类为null）||false|integer(int64)||
|&emsp;&emsp;sortOrder|排序权重（越小越靠前）||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


## 删除商品分类


**接口地址**:`/api/admin/product-categories/{categoryId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|categoryId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


## 添加商品分类


**接口地址**:`/api/admin/product-categories`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "categoryId": 0,
  "categoryName": "",
  "parentId": 0,
  "sortOrder": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productCategoryRequest|商品分类请求|body|true|ProductCategoryRequest|ProductCategoryRequest|
|&emsp;&emsp;categoryId|分类ID||false|integer(int64)||
|&emsp;&emsp;categoryName|分类名称||true|string||
|&emsp;&emsp;parentId|父分类ID（顶级分类为null）||false|integer(int64)||
|&emsp;&emsp;sortOrder|排序权重（越小越靠前）||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


## 商品分类列表


**接口地址**:`/api/admin/product-categories/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "pageNo": 0,
  "pageSize": 0,
  "orderBy1": "",
  "isAsc1": true,
  "orderBy2": "",
  "isAsc2": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageQueryDTO|分页查询数据|body|true|PageQueryDTO|PageQueryDTO|
|&emsp;&emsp;pageNo|页码数||false|integer(int64)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int64)||
|&emsp;&emsp;orderBy1|排序字段1||false|string||
|&emsp;&emsp;isAsc1|排序字段1是否升序||false|boolean||
|&emsp;&emsp;orderBy2|排序字段2，排序顺序排在排序字段1后边，如果排序字段1未设置，该字段也可以排序||false|string||
|&emsp;&emsp;isAsc2|排序字段2是否升序||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|PageResultProductCategoryVO|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|pages|总页数|integer(int64)|integer(int64)|
|total|总条数|integer(int64)|integer(int64)|
|list|数据列表|array|ProductCategoryVO|
|&emsp;&emsp;categoryId|分类ID|integer(int64)||
|&emsp;&emsp;categoryName|分类名称|string||
|&emsp;&emsp;parentId|父分类ID（顶级分类为null）|integer(int64)||
|&emsp;&emsp;sortOrder|排序权重（越小越靠前）|integer(int32)||


**响应示例**:
```javascript
{
	"pages": 0,
	"total": 0,
	"list": [
		{
			"categoryId": 0,
			"categoryName": "",
			"parentId": 0,
			"sortOrder": 0
		}
	]
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


# 用户端-商品分类


## 商品分类列表


**接口地址**:`/api/product-categories/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "pageNo": 0,
  "pageSize": 0,
  "orderBy1": "",
  "isAsc1": true,
  "orderBy2": "",
  "isAsc2": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageQueryDTO|分页查询数据|body|true|PageQueryDTO|PageQueryDTO|
|&emsp;&emsp;pageNo|页码数||false|integer(int64)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int64)||
|&emsp;&emsp;orderBy1|排序字段1||false|string||
|&emsp;&emsp;isAsc1|排序字段1是否升序||false|boolean||
|&emsp;&emsp;orderBy2|排序字段2，排序顺序排在排序字段1后边，如果排序字段1未设置，该字段也可以排序||false|string||
|&emsp;&emsp;isAsc2|排序字段2是否升序||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|PageResultProductCategoryVO|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|pages|总页数|integer(int64)|integer(int64)|
|total|总条数|integer(int64)|integer(int64)|
|list|数据列表|array|ProductCategoryVO|
|&emsp;&emsp;categoryId|分类ID|integer(int64)||
|&emsp;&emsp;categoryName|分类名称|string||
|&emsp;&emsp;parentId|父分类ID（顶级分类为null）|integer(int64)||
|&emsp;&emsp;sortOrder|排序权重（越小越靠前）|integer(int32)||


**响应示例**:
```javascript
{
	"pages": 0,
	"total": 0,
	"list": [
		{
			"categoryId": 0,
			"categoryName": "",
			"parentId": 0,
			"sortOrder": 0
		}
	]
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


# 商品接口


## 查询商品可自提门店列表


**接口地址**:`/api/mall/stores`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productId": 0,
  "pageNum": 0,
  "pageSize": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeListRequest|门店列表查询请求|body|true|StoreListRequest|StoreListRequest|
|&emsp;&emsp;productId|商品ID（可选，筛选支持该商品的门店）||false|integer(int64)||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListStoreVO|
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
|data|响应数据|array|StoreVO|
|&emsp;&emsp;storeId|门店ID|integer(int64)||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;address|详细地址|string||
|&emsp;&emsp;businessHours|营业时间|string||
|&emsp;&emsp;contactPhone|联系电话|string||
|&emsp;&emsp;status|状态 0-关闭 1-正常营业|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": [
		{
			"storeId": 0,
			"storeName": "",
			"address": "",
			"businessHours": "",
			"contactPhone": "",
			"status": 0
		}
	],
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


## 收藏商品


**接口地址**:`/api/mall/products/{productId}/collect`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
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


## 取消收藏商品


**接口地址**:`/api/mall/products/{productId}/collect`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
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


## 商品列表


**接口地址**:`/api/mall/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "categoryId": 0,
  "sortBy": "",
  "minPrice": 0,
  "maxPrice": 0,
  "pageNum": 0,
  "pageSize": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productListRequest|商品列表查询请求|body|true|ProductListRequest|ProductListRequest|
|&emsp;&emsp;categoryId|分类ID||false|integer(int64)||
|&emsp;&emsp;sortBy|排序方式：sales(销量), price_asc(价格升序), price_desc(价格降序)||false|string||
|&emsp;&emsp;minPrice|价格最小值||false|number||
|&emsp;&emsp;maxPrice|价格最大值||false|number||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResultProductListItemVO|
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
|data||PageResultProductListItemVO|PageResultProductListItemVO|
|&emsp;&emsp;pages|总页数|integer(int64)||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;list|商品列表项|array|ProductListItemVO|
|&emsp;&emsp;&emsp;&emsp;productId|商品ID|integer||
|&emsp;&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;description|商品简介|string||
|&emsp;&emsp;&emsp;&emsp;price|商品价格|number||
|&emsp;&emsp;&emsp;&emsp;coverImg|封面图片|string||
|&emsp;&emsp;&emsp;&emsp;sales|销量|integer||
|&emsp;&emsp;&emsp;&emsp;isCollected|是否已收藏|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"pages": 0,
		"total": 0,
		"list": [
			{
				"productId": 0,
				"productName": "",
				"description": "",
				"price": 0,
				"coverImg": "",
				"sales": 0,
				"isCollected": true
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


## 新增商品


**接口地址**:`/api/admin/products`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productId": 0,
  "productName": "",
  "categoryId": 0,
  "price": 0,
  "originalPrice": 0,
  "stock": 0,
  "coverImg": "",
  "detailImgs": [],
  "description": "",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productRequest|商品请求|body|true|ProductRequest|ProductRequest|
|&emsp;&emsp;productId|商品ID||false|integer(int64)||
|&emsp;&emsp;productName|商品名称||true|string||
|&emsp;&emsp;categoryId|分类ID||true|integer(int64)||
|&emsp;&emsp;price|售价||true|number||
|&emsp;&emsp;originalPrice|原价||false|number||
|&emsp;&emsp;stock|库存||true|integer(int32)||
|&emsp;&emsp;coverImg|封面图||true|string||
|&emsp;&emsp;detailImgs|详情图||false|array|string|
|&emsp;&emsp;description|商品简介||false|string||
|&emsp;&emsp;status|状态（ON_SALE-上架、OFF_SALE-下架）||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


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


## 查询商品可自提门店列表


**接口地址**:`/api/admin/products/stores`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productId": 0,
  "pageNum": 0,
  "pageSize": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeListRequest|门店列表查询请求|body|true|StoreListRequest|StoreListRequest|
|&emsp;&emsp;productId|商品ID（可选，筛选支持该商品的门店）||false|integer(int64)||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|StoreVO|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|storeId|门店ID|integer(int64)|integer(int64)|
|storeName|门店名称|string||
|address|详细地址|string||
|businessHours|营业时间|string||
|contactPhone|联系电话|string||
|status|状态 0-关闭 1-正常营业|integer(int32)|integer(int32)|


**响应示例**:
```javascript
[
	{
		"storeId": 0,
		"storeName": "",
		"address": "",
		"businessHours": "",
		"contactPhone": "",
		"status": 0
	}
]
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
[
	{
		"code": 200,
		"message": "操作成功",
		"data": {},
		"timestamp": 1640995200000
	}
]
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
[
	{
		"code": 200,
		"message": "操作成功",
		"data": {},
		"timestamp": 1640995200000
	}
]
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
[
	{
		"code": 200,
		"message": "操作成功",
		"data": {},
		"timestamp": 1640995200000
	}
]
```


## 商品列表


**接口地址**:`/api/admin/products/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "categoryId": 0,
  "keyword": "",
  "pageNum": 0,
  "pageSize": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminProductListRequest|管理员商品列表请求|body|true|AdminProductListRequest|AdminProductListRequest|
|&emsp;&emsp;categoryId|分类ID||false|integer(int64)||
|&emsp;&emsp;keyword|搜索关键词||false|string||
|&emsp;&emsp;pageNum|页码||true|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|PageResultAdminProductVO|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|pages|总页数|integer(int64)|integer(int64)|
|total|总条数|integer(int64)|integer(int64)|
|list|数据列表|array|AdminProductVO|
|&emsp;&emsp;productId|商品ID|integer(int64)||
|&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;categoryId|分类ID|integer(int64)||
|&emsp;&emsp;categoryName|分类名称|string||
|&emsp;&emsp;description|商品简介|string||
|&emsp;&emsp;price|售价|number||
|&emsp;&emsp;originalPrice|原价|number||
|&emsp;&emsp;stock|库存|integer(int32)||
|&emsp;&emsp;coverImg|封面图|string||
|&emsp;&emsp;detailImgs|详情图|array|string|
|&emsp;&emsp;status|状态（ON_SALE-上架、OFF_SALE-下架）|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"pages": 0,
	"total": 0,
	"list": [
		{
			"productId": 0,
			"productName": "",
			"categoryId": 0,
			"categoryName": "",
			"description": "",
			"price": 0,
			"originalPrice": 0,
			"stock": 0,
			"coverImg": "",
			"detailImgs": [],
			"status": "",
			"createTime": "",
			"updateTime": ""
		}
	]
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


## 查询商品详情


**接口地址**:`/api/mall/products/{productId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductDetailVO|
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
|data||ProductDetailVO|ProductDetailVO|
|&emsp;&emsp;productId|商品ID|integer(int64)||
|&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;categoryId|分类ID|integer(int64)||
|&emsp;&emsp;categoryName|分类名称|string||
|&emsp;&emsp;description|商品简介|string||
|&emsp;&emsp;price|商品价格|number||
|&emsp;&emsp;coverImg|封面图片|string||
|&emsp;&emsp;isCollected|是否已收藏|boolean||
|&emsp;&emsp;availableStores|门店列表项|array|StoreListItemVO|
|&emsp;&emsp;&emsp;&emsp;storeId|门店ID|integer||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;address|详细地址|string||
|&emsp;&emsp;&emsp;&emsp;businessHours|营业时间|string||
|&emsp;&emsp;&emsp;&emsp;stock|库存数量|integer||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"productId": 0,
		"productName": "",
		"categoryId": 0,
		"categoryName": "",
		"description": "",
		"price": 0,
		"coverImg": "",
		"isCollected": true,
		"availableStores": [
			{
				"storeId": 0,
				"storeName": "",
				"address": "",
				"businessHours": "",
				"stock": 0
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


## 查询商品详情


**接口地址**:`/api/admin/products/products/{productId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ProductDetailVO|
|400|Bad Request|ResultVoid|
|403|Forbidden|ResultVoid|
|404|Not Found||
|500|Internal Server Error|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|productId|商品ID|integer(int64)|integer(int64)|
|productName|商品名称|string||
|categoryId|分类ID|integer(int64)|integer(int64)|
|categoryName|分类名称|string||
|description|商品简介|string||
|price|商品价格|number||
|coverImg|封面图片|string||
|isCollected|是否已收藏|boolean||
|availableStores|可选择的门店列表|array|StoreListItemVO|
|&emsp;&emsp;storeId|门店ID|integer(int64)||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;address|详细地址|string||
|&emsp;&emsp;businessHours|营业时间|string||
|&emsp;&emsp;stock|库存数量|integer(int32)||


**响应示例**:
```javascript
{
	"productId": 0,
	"productName": "",
	"categoryId": 0,
	"categoryName": "",
	"description": "",
	"price": 0,
	"coverImg": "",
	"isCollected": true,
	"availableStores": [
		{
			"storeId": 0,
			"storeName": "",
			"address": "",
			"businessHours": "",
			"stock": 0
		}
	]
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


# 管理端-服务区域管理接口


## 修改服务区域


**接口地址**:`/api/admin/service-areas/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "areaId": 0,
  "areaName": "",
  "parentId": 0,
  "sortOrder": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|serviceAreaRequest|服务区域请求|body|true|ServiceAreaRequest|ServiceAreaRequest|
|&emsp;&emsp;areaId|区域ID||false|integer(int64)||
|&emsp;&emsp;areaName|区域名称||true|string||
|&emsp;&emsp;parentId|父区域ID||false|integer(int64)||
|&emsp;&emsp;sortOrder|排序权重||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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


## 服务区域列表


**接口地址**:`/api/admin/service-areas/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "areaName": "",
  "parentId": 0,
  "orderBy": "",
  "isAsc": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|serviceAreaPageRequest|服务区域分页查询请求|body|true|ServiceAreaPageRequest|ServiceAreaPageRequest|
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|每页条数||false|integer(int32)||
|&emsp;&emsp;areaName|区域名称（模糊查询）||false|string||
|&emsp;&emsp;parentId|父区域ID||false|integer(int64)||
|&emsp;&emsp;orderBy|排序字段||false|string||
|&emsp;&emsp;isAsc|是否升序||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResultServiceArea|
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
|data||PageResultServiceArea|PageResultServiceArea|
|&emsp;&emsp;pages|总页数|integer(int64)||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;list|数据列表|array|ServiceArea|
|&emsp;&emsp;&emsp;&emsp;area_id||integer||
|&emsp;&emsp;&emsp;&emsp;area_name||string||
|&emsp;&emsp;&emsp;&emsp;parent_id||integer||
|&emsp;&emsp;&emsp;&emsp;create_time||string||
|&emsp;&emsp;&emsp;&emsp;update_time||string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": {
		"pages": 0,
		"total": 0,
		"list": [
			{
				"area_id": 0,
				"area_name": "",
				"parent_id": 0,
				"create_time": "",
				"update_time": ""
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


## 新增服务区域


**接口地址**:`/api/admin/service-areas/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "areaId": 0,
  "areaName": "",
  "parentId": 0,
  "sortOrder": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|serviceAreaRequest|服务区域请求|body|true|ServiceAreaRequest|ServiceAreaRequest|
|&emsp;&emsp;areaId|区域ID||false|integer(int64)||
|&emsp;&emsp;areaName|区域名称||true|string||
|&emsp;&emsp;parentId|父区域ID||false|integer(int64)||
|&emsp;&emsp;sortOrder|排序权重||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultLong|
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
|data|响应数据|integer(int64)|integer(int64)|
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


## 删除服务区域


**接口地址**:`/api/admin/service-areas/{areaId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|areaId||path|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
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
|data|响应数据|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 200,
	"message": "操作成功",
	"data": true,
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