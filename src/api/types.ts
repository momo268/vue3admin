// 登录模块
export namespace Login {
  export interface LoginData {
    username: string,
    password: string
  }
  export interface LoginRes {
    code?: number,
    data?: object,
    msg?: string,
    [key: string]: any
  }
}