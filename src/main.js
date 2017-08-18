// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import {axioshttp} from '@/widget'
import conf from './config'
import { ToastPlugin } from 'vux'
import 'vsiren/dist/vsiren.min.css'
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// axiosHttp(app)
axioshttp(app)
