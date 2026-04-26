//createRouter：创建router实例对象
//createWebHistory：创建history模式的路由
// 二级路由只要加一个children属性，值是一个数组，数组中就是二级路由的配置对象
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          // 二级路由home是默认路由渲染，当他是默认路由时，path什么都不写 清空
          // 当在浏览器访问时，访问/就会默认渲染home组件
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
