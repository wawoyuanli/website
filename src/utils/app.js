import cookie from "cookie_js";
const adminToken = 'admin_toKen';
const usernameKey = 'username';

export function getToken() {
    return cookie.set(adminToken)
}

export function setToKen(toKen) {
    return cookie.set(adminToken, toKen);
}

export function removeToKen(toKen) {
    return cookie.remove(toKen)
}
export function setUserName(value) {
    return cookie.set(usernameKey, value)
}
export function getUserName() {
    return cookie.get(usernameKey)
}
export function removeUserName() {
    return cookie.remove(usernameKey)
}