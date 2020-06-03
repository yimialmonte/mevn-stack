<template>
  <button
    class="w-full mt-3 text-lg py-3 text-white rounded-sm focus:outline-none hover:bg-emerald-lighter"
    :class="{
      'bg-emerald': !loading,
      'bg-emerald-light cursor-not-allowed': loading
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <loader v-if="loading" />
    <span v-else>{{ label }}</span>
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
