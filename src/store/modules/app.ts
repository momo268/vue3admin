/* 此app是控制左侧菜单栏展开和关闭和是否是否为手机设备 */

import { getSidebarSatus, setSidebarStatus } from "@/utils/cache/localStorage";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export enum DeviceType {
  Mobile,
  Desktop,
}

export const useAppStore = defineStore("app", () => {
  // 定义左侧栏的是否展开状态
  const sidebar: any = reactive({
    open: getSidebarSatus() !== "close",
  });

  // 定义设备名称 是桌面端还是手机端
  const device = ref<DeviceType>(DeviceType.Desktop);

  /* 切换左侧栏展开和关闭 */
  const toggleSidebar = () => {
    // 切换状态
    sidebar.open = !sidebar.open;
    // 状态存入localStorage里面,目的可以持久化
    if (sidebar.open) {
      setSidebarStatus("open");
    } else {
      setSidebarStatus("close");
    }
  };

  /* 关闭左侧栏 */
  const closeSidebar = () => {
    sidebar.open = false;
    setSidebarStatus("close");
  };

  /* 切换设备 */
  const toggleDevice = (value: DeviceType) => {
    device.value = value;
  };

  return { sidebar, device, toggleSidebar, closeSidebar, toggleDevice };
});
