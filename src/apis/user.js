// 封装所有和用户相关的接口函数
import request from '@/utils/http'

// { account, password }是通过解构赋值的方式代替了传统params
// 然后在调用这个函数时也应该传入对象（里面必须有这两个字段）
export const loginAPI = ({ account, password }) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}


// 获取猜你喜欢列表API
export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}