import { type RouteRecordRaw } from "vue-router";



/* 判断用户是否和路由的相匹配 */
const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return (route.meta.roles as string[]).includes(role)
      }
    })
  } else {
    return true
  }
}

/* 过滤动态路由 */