import { type RouteRecordRaw, createWebHashHistory, createRouter } from "vue-router"

const Layout = () => import('@/layout/index.vue')

// 常驻路由
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/pages/errorpage/404.vue"),
  },
  {
    path: "/layout",
    component: Layout
  },
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 * 动态路由可以登录时后端返回路由表
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layout,
    name: "Permission",
    meta: {
      title: "权限管理",
      icon: "lock",
      roles: ['admin', 'editor'],// 可以在根路由中设置角色
    },
    children: [
      {
        path: "page",
        component: () => import("@/pages/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router