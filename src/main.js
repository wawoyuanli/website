import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
/**引入bootstrap 相关文件 */
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import  "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

import './assets/less/varibles.less'
import less from 'less'
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  $ ,
  render: h => h(App),
}).$mount('#app')
