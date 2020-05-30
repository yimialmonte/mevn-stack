<template>
  <input
    :type="type"
    class="w-full bg-brown-lightest mb-5 p-3 focus:outline-none text-brown px-2 text-sm"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
