import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/world'
import routerconfig from './routerconfig'

Vue.use(Router)

export default new Router({
  routes: routerconfig
})
