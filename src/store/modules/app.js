import { login } from '@/api/login'
import { setToKen, removeToKen, removeUserName, setUserName, getUserName } from "@/utils/app";

const state = {
    token: '',
}
const getters = {

}
const mutations = {
    SET_TOKEN(state, value) {
        state.token=value
    }
}
const actions = {
    login({ commit }, requestData) {
        login(requestData).then(res => {
            let data = res.data
            commit('SET_TOKEN',)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};