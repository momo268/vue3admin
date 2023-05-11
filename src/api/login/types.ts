/* 用户登录参数 */
export interface LoginRequestData {
  username: 'admin' | 'editor',
  password: string
}