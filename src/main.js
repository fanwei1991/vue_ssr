import Vue from 'vue'
import App from './App'
import Meta from 'vue-meta'
Vue.use(Meta)
import { createRouter } from './router'

export function createApp () {
  // 创建 router 实例
  const router = new createRouter()
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router }
}
