import request from '../utils/request'

const adminList = () => {
  return request({ url: '/captcha', method: 'GET' })
}
const loginout = () => {
  return request({ url: '/logout', method: 'POST' })
}

const userLogin = (username, password, code, token) => {
  return request({
    url: `/login?username=${username}&password=${password}&code=${code}&token=${token}`,
    method: 'POST'
  })
}
export default {
  adminList,
  userLogin,
  loginout
}
