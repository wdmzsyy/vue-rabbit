import request from '@/utils/http'  // 公共request实例

export const getDetail = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}