import axios from 'axios'
import { getToken } from '@/utils/app.js'
const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API

const service = axios.create({
    baseURL: BASEURL,
    timeout: 15000
})
/**请求拦截器 */
service.interceptors.request.use(function (config) {
    config.headers['Tokey'] = getToken()
})
/**响应拦截 */
service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error)
})
