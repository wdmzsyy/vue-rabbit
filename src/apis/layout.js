import httpInstance from "@/utils/http";   //使用封装好的http实例来发送请求

export function getCategoryAPI(){   //获取一个分类的接口函数
    return httpInstance({
        url: '/home/category/head'  
    })
}
//封装后第二步是调用函数拉取数据