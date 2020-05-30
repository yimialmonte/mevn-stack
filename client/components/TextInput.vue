<template>
  <div class="mb-5">
    <input
      :type="type"
      class="w-full bg-brown-lightest p-3 focus:outline-none text-brown px-2 text-sm"
      :placeholder="placeholder"
      :value="value"
      @focus="$emit('focus')"
      @blur="$emit('blue')"
      :name="name"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="error" class="text-xs text-red">{{ error }}</span>
  </div>
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
    },
    name: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  }
}
</script>
