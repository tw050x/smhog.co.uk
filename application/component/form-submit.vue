<template>
  <div class="form-submit">
    <button class="submit" type="submit" :disabled="submitDisabled" @click.prevent="handleSubmit">
      <slot />
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSubmit (event) {
        this.$emit('submit', event)
      }
    },

    name: 'FormSubmit',

    props: {
      submitDisabled: {
        default: false,
        type: Boolean
      }
    }
  }
</script>
