import { domain } from './domain.js'
import { GET, POST, PUT, DELETE } from "./request"

// GET
export const getList = (projectId) => { 
  const url = `${domain}/v1/projects/${projectId}`
  return GET(url)
}
// POST
export const postList = (projectId) => { 
  const url = `${domain}/v1/projects/${projectId}`
  return POST(url)
} 
// DELETE
export const deleteList = (projectId) => { 
  const url = `${domain}/v1/projects/${projectId}`
  return DELETE(url)
}
// PUT
export const putList = (projectId, data) => { 
  const url = `${domain}/v1/projects/${projectId}`
  return PUT(url,data)
}

//注册
export const register = (data) => { 
  const url = `${domain}/user/register`
  return POST(url,data)
} 
//验证码
export const register_sms = (data) => { 
  const url = `${domain}/user/register_sms`
  return POST(url,data)
} 