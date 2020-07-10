import Vue from 'vue'
import VueRouter from 'vue-router'
// import List from '@/views/List'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'List',
    // component: List
    component: () => import('@/views/List'),
    props: true,
  },
  {
    path: '/Form',
    name: 'Form',
    // component: Form
    component: () => import(/* webpackChunkName:"addNewTask"*/ '@/views/Form')
  },
  {
    path:'/Edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName:"editTask"*/ '@/views/Edit'),
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
