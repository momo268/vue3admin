import { ref } from "vue";
import store from "@/store";
import { defineStore } from "pinia";
import { usePermissionStore } from "./permission";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");
  const roles = ref<string[]>([]);
  const username = ref<string>("");

  const permissionStore = usePermissionStore();
  // const tagsViewStore = useTagsViewStore()

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value;
  };
  /** 登录 */
  const login = () => {};
  /** 获取用户详情 */
  const getInfo = () => {
    const data = { username: "admin", roles: ["admin"] };
    console.log(data);
    username.value = data.username;
    roles.value = data.roles;
  };

  return { token, roles, username, setRoles, login, getInfo };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
