import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new-card',
    name: 'NewCard',
    component: () =>
      import(/* webpackChunkName: "NewCardForm" */ '@/views/NewCardForm.vue'),
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "Quiz" */ '@/views/Quiz.vue'),
  },
  {
    path: '/cheer/:score',
    name: 'Cheer',
    component: () =>
      import(/* webpackChunkName: "Cheer" */ '@/views/Cheer.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
})

export default router
