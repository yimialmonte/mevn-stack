import Vue from 'vue'
import Main from './pages/Main.vue'
import './styles/main.css'
import router from './routes'
import store from './store'
import Router from 'vue-router'
import TextInput from '@components/TextInput.vue'
import Button from '@components/Button.vue'
import Loader from '@components/Loader.vue'
import Validtor from 'vee-validate'
import authMixin from '@client/mixins/auth'

Vue.use(Router)
Vue.use(Validtor)
Vue.mixin(authMixin)
Vue.component('text-input', TextInput)
Vue.component('btn', Button)
Vue.component('loader', Loader)

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
})
