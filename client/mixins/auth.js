import { SET_AUTH, UNSET_AUTH } from '@store/auth/actions'

export default {
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    auth() {
      return !!this.$store.state.auth.user
    }
  },
  methods: {
    setAuth(payload) {
      localStorage.setItem('auth', JSON.stringify(payload))
      this.$store.commit(SET_AUTH, payload)
      this.$router.push('/')
    },
    unsetAuth() {
      localStorage.removeItem('auth')
      this.$store.commit(UNSET_AUTH)
      this.$router.push('/')
    }
  }
}
