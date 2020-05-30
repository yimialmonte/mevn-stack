<template>
  <div class="container w-full mx-auto my-16">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-gold">Register</h2>
      <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <text-input placeholder="Enter Your Name" v-model="model.name">
        </text-input>
        <text-input placeholder="Enter your email" v-model="model.email">
        </text-input>
        <text-input
          placeholder="Enter your password"
          type="password"
          v-model="model.password"
        ></text-input>
        <button
          class="w-full mt-3 text-lg py-3 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-lighter"
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
  })
}
</script>
