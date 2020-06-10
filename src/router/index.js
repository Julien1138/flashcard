import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NewCard from '@/views/NewCard.vue'
import Quiz from '@/views/Quiz.vue'

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
    component: NewCard,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
})

export default router
