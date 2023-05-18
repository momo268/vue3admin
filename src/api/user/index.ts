import request from "../index";
import { Login } from '../types'

// 登录
export const login = (data: Login.LoginData) => {
  return request.post('/user/login', data)
}