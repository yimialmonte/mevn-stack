<template>
  <div class="container w-full mx-auto my-16">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-gold">Reset Password</h2>
      <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <text-input
          placeholder="Enter your email"
          name="email"
          v-model="model.email"
          v-validate="'required|email'"
          :error="errors.first('email')"
        >
        </text-input>
        <btn
          label="Send Password Link"
          :disabled="loading"
          :loading="loading"
          @click="forgotPassword"
        />
      </div>
    </div>
  </div>
</template>

<script>
import formMixing from '@mixins/form'
import { POST_FORGOT_PASSWORD } from '@store/auth/actions'

export default {
  mixins: [formMixing],
  data: () => ({
    model: {
      email: ''
    }
  }),
  methods: {
    forgotPassword() {
      this.$validator.validate().then(isValid => {
        if (!isValid) return

        this.toggleLoading()

        this.$store
          .dispatch(POST_FORGOT_PASSWORD, this.model)
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
