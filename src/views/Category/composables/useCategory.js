// 封装分类数据业务相关代码
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'   //获取路由参数
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    //获取分类数据
    const categoryData = ref({})    //返回响应是Object一个对象，所以用{}
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {   //默认参数
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())  

    //解决路由缓存问题方法②：
    //目标：路由参数变化的时候，可以把分类数据接口重新发送（用getCategory发）
    onBeforeRouteUpdate((to) => {   //to代表目标路由对象
        console.log("路由变化了")
        //存在问题：使用最新的路由参数请求最新的分类数据
        console.log(to)
        getCategory(to.params.id)   //如果你传了id，就以这个最新id为主，如果不传的话就是默认参数
    })
    return {
        categoryData
    }
}