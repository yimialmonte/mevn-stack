<template>
  <div class="container w-full mx-auto my-16">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-gold">Reset Password</h2>
      <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <text-input
          placeholder="Enter your new password"
          type="password"
          v-validate="'required|min:6'"
          v-model="model.password"
          name="password"
          :error="errors.first('password')"
        ></text-input>
        <btn
          label="Reset Password"
          :disabled="loading"
          :loading="loading"
          @click="resetPassword"
        />
      </div>
    </div>
  </div>
</template>

<script>
import formMixing from '@mixins/form'
import { POST_RESET_PASSWORD } from '@store/auth/actions'

export default {
  mixins: [formMixing],
  data: () => ({
    model: {
      password: ''
    }
  }),
  methods: {
    resetPassword() {
      this.$validator.validate().then(isValid => {
        if (!isValid) return

        this.toggleLoading()

        this.$store
          .dispatch(POST_RESET_PASSWORD, {
            ...this.model,
            token: this.$route.params.token
          })
          .then(response => {
            this.toggleLoading()
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
    }
  }
}
</script>
