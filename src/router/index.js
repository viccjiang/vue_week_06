import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // name: 'FrontView',
    component: () => import('../views/FrontView/FrontView.vue'),
    children: [
      {
        path: '',
        // name: 'Home',
        component: () => import('../views/FrontView/HomeView.vue')
      },
      {
        path: 'home',
        // name: 'Home',
        component: () => import('../views/FrontView/HomeView.vue')
      },
      {
        path: 'about',
        // name: 'about',
        component: () => import('../views/FrontView/UserAbout.vue')
      },
      {
        path: 'products',
        // name: 'products',
        component: () => import('../views/FrontView/UserProducts.vue')
      },
      {
        path: 'product/:id',
        // name: 'product/:id',
        component: () => import('../views/FrontView/UserProductDetail.vue')
      },
      {
        path: 'cart',
        // name: 'cart',
        component: () => import('../views/FrontView/UserCart.vue')
      },
      {
        // 登入，屬於前台
        path: '/login',
        component: () => import('../views/FrontView/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/dashboard/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/dashboard/AdminOrders.vue')
      }
    ]
  },
  { //* 代表所有主頁面下的頁面，路由錯誤都會被導向
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: 'products' }
  }
  // 404 頁面
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})

export default router
