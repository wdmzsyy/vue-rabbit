import httpInstance from "@/utils/http";

export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @returns {*}
 */
export const findNewAPI = () => { //导出函数
    return httpInstance({
        url: '/home/new'   //httpInstance({ url: ... }) 返回的是一个 Promise 对象（因为 axios 请求是异步的）
    })
}