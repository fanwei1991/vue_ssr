import Vue from 'vue'
import App from './App'
import Meta from 'vue-meta'
//import { sync } from 'vuex-router-sync'
import { createRouter } from './router'
import { createStore } from './store'

Vue.use(Meta)

export function createApp () {
  // 创建 router 实例
  const router = new createRouter()
  const store = new createStore()
  
  // 同步路由状态(route state)到 store
//  sync(store, router)
  
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router, store }
}
