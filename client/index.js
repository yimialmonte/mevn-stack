import Vue from 'vue'
import Main from './pages/Main.vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import TextInput from '@components/TextInput.vue'

Vue.use(Router)

Vue.component('text-input', TextInput)

const app = new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})
