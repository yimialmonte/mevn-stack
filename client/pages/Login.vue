<template>
  <div class="container w-full mx-auto my-16">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-gold">Login</h2>
      <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <text-input
          placeholder="Enter your email"
          name="email"
          v-model="model.email"
          v-validate="'required|email'"
          :error="errors.first('email')"
        >
        </text-input>
        <text-input
          placeholder="Enter your password"
          type="password"
          v-validate="'required|min:6'"
          v-model="model.password"
          name="password"
          :error="errors.first('password')"
        ></text-input>
        <btn
          label="Sign in"
          :disabled="loading"
          :loading="loading"
          @click="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { POST_LOGIN, SET_AUTH } from '@store/auth/actions'

export default {
  data: () => ({
    loading: false,
    model: {
      email: '',
      password: ''
    }
  }),
  methods: {
    login() {
      this.$validator.validate().then(isValid => {
        if (!isValid) return

        this.toggleLoading()

        this.$store
          .dispatch(POST_LOGIN, this.model)
          .then(response => {
            this.toggleLoading()

            localStorage.setItem('auth', JSON.stringify(response.data))

            this.$store.commit(SET_AUTH, response.data)

            this.$router.push('/')
          })
          .catch(error => {
            this.toggleLoading()

            Object.keys(error.response.data).forEach(field => {
              this.errors.add({
                field,
                msg: error.response.data[field]
              })
            })
          })
      })
    },
    toggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>
