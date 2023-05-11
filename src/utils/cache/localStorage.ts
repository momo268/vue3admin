/* 处理localStorage*/

/* 获取侧边栏关闭还是展开状态 */
export const getSidebarSatus = () => {
  return localStorage.getItem('Sidebar-Status')
}

/* 设置侧边栏关闭还是展开状态 */
export const setSidebarStatus = (status: string) => {
  return localStorage.setItem('Sidebar-Status', status)
}