import axios from 'axios'
import Cookies from 'js-cookie'
axios.defaults.withCredentials = true
import { getToKen, getUserName } from '@/utils/app.js'
const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API

const service = axios.create({
  baseURL: BASEURL,
  timeout: 15000
})
/**请求拦截器 */
service.interceptors.request.use(function (config) {
  config.headers["token"] = getToKen()//= getToKen();
  config.headers["UserName"] = getUserName();
  return config
}, function (error) {
  return Promise.reject(error)
})
/**响应拦截 */
service.interceptors.response.use(function (response) {
  // let client = new XMLHttpRequest()
  // let a = client.getResponseHeader('set-cookie')
  // debugger
  // Cookies.set('JSESSIONID',response.data.msg)
  return response;
}, function (error) {
  return Promise.reject(error)
})
export default service