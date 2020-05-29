import Router from 'vue-router'
import Login from '@pages/Login.vue'
import Register from '@pages/Register.vue'
import Home from '@pages/Home.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      component: Login
    },
    {
      path: '/auth/register',
      component: Register
    },
    {
      path: '/',
      component: Home
    }
  ]
})
