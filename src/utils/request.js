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
  // config.getCookies()
  // debugger

  return config
}, function (error) {
  return Promise.reject(error)
})
/**响应拦截 */
service.interceptors.response.use(function (response) {
  // let a = getAllResponseHeaders()
  // xmlHttp.withCredentials = true
  // axios.defaults.withCredentials=true
  // document.cookie="pin=test;domain=test.com;";
  // document.cookie
  // debugger
  // response.headers['set-cookie']=response.data.msg
  // Cookies.set('Cookie',response.data.msg)
  response.Headers["set-cookie"]=response.data.msg
  return response;
}, function (error) {
  return Promise.reject(error)
})
export default service