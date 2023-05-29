import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

const Layout = () => import("@/layout/index.vue")

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: "/createstudent",
    name: "Student",
    meta: {
      title: "学员管理",
      svgIcon: "user",
    },
    children: [
      {
        path: "createstudent",
        component: () => import("@/views/student/createstudent.vue"),
        name: "createstudent",
        meta: {
          title: "新建学员",
        }
      },
      {
        path: "revisestudent",
        component: () => import("@/views/student/revisestudent.vue"),
        name: "revisestudent",
        meta: {
          title: "修改学员信息"
        }
      },
      {
        path: "delstudent",
        component: () => import("@/views/student/delstudent.vue"),
        name: "delstudent",
        meta: {
          title: "删除学员"
        }
      }
    ]
  },
  {
    path: "/class",
    component: Layout,
    redirect: "/class/createclass",
    name: "Class",
    meta: {
      title: "班级管理",
      svgIcon: "document",
    },
    children: [
      {
        path: "createclass",
        component: () => import("@/views/class/createclass.vue"),
        name: "createclass",
        meta: {
          title: "新建班级",
        }
      },
      {
        path: "reviseclass",
        component: () => import("@/views/class/reviseclass.vue"),
        name: "reviseclass",
        meta: {
          title: "修改班级信息"
        }
      },
      {
        path: "delclass",
        component: () => import("@/views/class/delclass.vue"),
        name: "delclass",
        meta: {
          title: "删除班级"
        }
      }
    ]
  },
  {
    path: "/statis",
    component: Layout,
    redirect: "/statis/peopletable",
    name: "Statis",
    meta: {
      title: "培训统计",
      svgIcon: "piechart",
    },
    children: [
      {
        path: "peopletable",
        component: () => import("@/views/statis/peopletable.vue"),
        name: "peopletable",
        meta: {
          title: "按人员统计"
        }
      },
      {
        path: "timetable",
        component: () => import("@/views/statis/timetable.vue"),
        name: "timetable",
        meta: {
          title: "按时间统计"
        }
      }
    ]
  },
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/permission",
  //   component: Layout,
  //   redirect: "/permission/page",
  //   name: "Permission",
  //   meta: {
  //     title: "权限管理",
  //     svgIcon: "lock",
  //     roles: ["admin", "editor"], // 可以在根路由中设置角色
  //     alwaysShow: true // 将始终显示根菜单
  //   },
  //   children: [
  //     {
  //       path: "page",
  //       component: () => import("@/views/permission/page.vue"),
  //       name: "PagePermission",
  //       meta: {
  //         title: "页面权限",
  //         roles: ["admin"] // 或者在子导航中设置角色
  //       }
  //     },
  //     {
  //       path: "directive",
  //       component: () => import("@/views/permission/directive.vue"),
  //       name: "DirectivePermission",
  //       meta: {
  //         title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
  //       }
  //     }
  //   ]
  // },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
