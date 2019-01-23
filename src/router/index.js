import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history', // 注意这里也是为history模式
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: () => import('@/components/HelloWorld')
      },
      {
        path: '/test',
        name: "Test",
        component: Test
      }
    ]
  })
}
