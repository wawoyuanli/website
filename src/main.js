import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "./store/index.js";
/**引入bootstrap 相关文件 */
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

/**国际化 */
import VueI18n from 'vue-i18n'

import './assets/less/varibles.less'
import less from 'less'
Vue.use(less)
Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  router,
  $,
  store,
  render: h => h(App),
}).$mount('#app')
