import request from '../index'
import { LoginRequestData } from './types'

/*
 * 登录
 */
export const userlogin = (data: LoginRequestData) => {
  return request.post('/login', data)
}


