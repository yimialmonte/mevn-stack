import mutations from './mutations'
import getters from './getters'
import actions from './actions'

let initialState = null

try {
  initialState = JSON.parse(localStorage.getItem('auth'))
} catch (error) {
  initialState = {
    user: null,
    token: null
  }
}

export default {
  state: initialState,
  mutations,
  actions,
  getters
}
