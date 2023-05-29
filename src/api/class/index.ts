import request from "../index";

// 所有部门和其关联的班级
export const getClass = () => {
  return request.post('/api/department/findAllDepartmenAndClass')
}
