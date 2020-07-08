import Vue from 'vue'
import VueRouter from 'vue-router'
// import Form from '@/views/Form'
// import List from '@/views/List'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'List',
    // component: List
    component: () => { return import ('@/views/List') }
  },
  {
    path: '/Form',
    name: 'Form',
    // component: Form
    component: () => { return import ('@/views/Form') }
  },
  {
    path:'/Edit/:index',
    name: 'Edit',
    component: () => { return import ('@/views/Edit') }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
