import { $api } from '@/composables/useApi'

/**
 * 获取商品分类列表
 * post /api/mall/category/list
 * {
  "pageNo": 0,
  "pageSize": 0,
  "orderBy1": "",
  "isAsc1": true,
  "orderBy2": "",
  "isAsc2": true
}

 * {
  "pages": 2,
  "total": 15,
  "list": [
    {
      "categoryId": 1,
      "categoryName": "生鲜食品",
      "parentId": 0,
      "sortOrder": 1
    },
    {
      "categoryId": 5,
      "categoryName": "水果",
      "parentId": 1,
      "sortOrder": 1
    },
    {
      "categoryId": 9,
      "categoryName": "洗护用品",
      "parentId": 2,
      "sortOrder": 1
    },
    {
      "categoryId": 12,
      "categoryName": "小家电",
      "parentId": 3,
      "sortOrder": 1
    },
    {
      "categoryId": 14,
      "categoryName": "大米",
      "parentId": 4,
      "sortOrder": 1
    },
    {
      "categoryId": 2,
      "categoryName": "日用百货",
      "parentId": 0,
      "sortOrder": 2
    },
    {
      "categoryId": 6,
      "categoryName": "蔬菜",
      "parentId": 1,
      "sortOrder": 2
    },
    {
      "categoryId": 10,
      "categoryName": "厨房用品",
      "parentId": 2,
      "sortOrder": 2
    },
    {
      "categoryId": 13,
      "categoryName": "大家电",
      "parentId": 3,
      "sortOrder": 2
    },
    {
      "categoryId": 15,
      "categoryName": "食用油",
      "parentId": 4,
      "sortOrder": 2
    }
  ]
}
 */
export const getCategoryListApi = () => {
  return $api('/api/product-categories/list', {
    method: 'POST',
    body: {
      pageNo: 0,
      pageSize: 0,
      orderBy1: "",
      isAsc1: true,
      orderBy2: "",
      isAsc2: true
    }
  })
}
