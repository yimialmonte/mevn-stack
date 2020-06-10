<template>
  <h1 class="text-center my-16 text-brown">
    Confirm Email...
  </h1>
</template>

<script>
import { POST_CONFIRM_EMAIL } from '@store/auth/actions'
export default {
  mounted() {
    this.$store.dispatch(POST_CONFIRM_EMAIL, {
      token: this.$route.params.token
    })
  }
}
</script>
