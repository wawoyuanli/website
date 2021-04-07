import service from '@/utils/request';
/**注册接口 */
export function registerHandler (data) {
  return service.request({
    method: "POST",
    url: "/manager/survey/register",
    data
  })
}
/**获取验证码接口 6位数字验证码 */
export function getCode (data) {
  return service.request({
    method: "GET",
    url: `/manager/survey/sendEmail?email=${data.email}`,
    data
  })
}

/**获取国家码 */
export function getCountryCode (data) {
  return service.request({
    method: "GET",
    url: "/manager/survey/countryCode",
    data

  })
}

/**
 * 登录
 */
export function login (data) {
  return service.request({
    method: "post",
    url: "/manager/survey/login",
    data
  })
}

