<template>
  <div class="container w-full mx-auto my-16">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-gold">Register</h2>
      <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <text-input
          placeholder="Enter Your Name"
          name="name"
          v-model="model.name"
          v-validate="'required'"
          :error="errors.first('name')"
        >
        </text-input>
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
        <button
          class="w-full mt-3 text-lg py-3 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-lighter"
          @click="register"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    register() {
      this.$validator.validate().then(isValid => {
        console.log(isValid)
        if (!isValid) return
      })
    }
  }
}
</script>
