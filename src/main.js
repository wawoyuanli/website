import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "./store/index.js";
/**引入bootstrap 相关文件 */
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

 
import './assets/less/varibles.less'
import less from 'less'
Vue.use(less)
/**vue 国际化 */
import i18n from './lang/i18n.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
