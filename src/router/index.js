import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { // 一级路由
      path:'/',
      component:Layout,
      children:[{ // 二级路由
        path:'', // 不用加 path， 如果是/ 就是 Home
        component: Home,
      },
        {
          path:'category', // 不用加 "/"
          component: Category
        }
      ]

    },
    {// 一级路由
      path:'/login',
      component: Login
    }
  ],
})

export default router
