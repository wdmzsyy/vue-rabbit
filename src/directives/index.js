//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el：指令绑定的元素 img
                //binding：binding.value 指令等于号后面绑定的表达式的值 图片url
                console.log(el, binding.value)
        
                //使用 useIntersectionObserver 监听 el 是否进入可视区
                const {stop} = useIntersectionObserver( //解构赋值把stop取出来，然后在回调中调用stop停止监听
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            //进入可视区，加载图片
                            el.src = binding.value
                            stop() //停止监听
                        }
                    },
                )
            }
        })
    }
}