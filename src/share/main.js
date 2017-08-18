// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import {axioshttp} from '@/widget'
import 'vsiren/dist/vsiren.min.css'
import { ToastPlugin } from 'vux'
import conf from '../config'
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
app.$vux.toast.show({
  text: '请重新登录!',
  type: 'text',
  width: '50%',
  isShowMask: true,
  onHide () {
  }
})
// axiosHttp(app)
axioshttp(app)
