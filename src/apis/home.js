import httpInstance from "@/utils/http";

export function getBannerAPI(params = {}) {
    //默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
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


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}