import service from '@/utils/request';
/**注册接口 */
export function registerHandler(data) {
  return service.request({
    method: "POST",
    url: "/manager/authorization/sys/register/100",
    data
  })
}

/**获取验证码接口 6位数字验证码 */
export function getCode(data) {
  return service.request({
    method: "GET",
    url: `/manager/authorization/sys/sendEmail/102?email=${data.email}`,
    data
  })
}

/**获取国家码 */
export function getCountryCode(data) {
  return service.request({
    method: "GET",
    url: "/manager/authorization/sys/countryCode",
    data

  })
}

/**
 * http://g36469v144.zicp.vip/manager/authorization/sys/login
 * 登录http://g36469v144.zicp.vip/manager/authorization/sys/index
 */
export function login(data) {
  return service.request({
    method: "POST",
    url: '/manager/authorization/sys/login',// "/manager/authorization/sys/login", 
    data,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
  })
}
/**修改密码 */
export function resetPwd(data) {
  return service.request({
    method: 'POST',
    url: "/manager/authorization/sys/changePassowrd",
    data
  })
};

