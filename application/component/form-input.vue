<style lang="scss" scoped>
  .form-input {
    display: flex;
    flex-direction: column;
    width: 100%;

    label,
    input {
      box-sizing: border-box;
      padding: 0.5rem;
      width: 100%;
    }

    input {
      outline: none;
    }

    label {
      display: block;
      font-size: 1rem;
    }

    div.errors {
      box-sizing: border-box;
      padding: 0 0 1rem;
      width: 100%;
    }
  }
</style>

<template>
  <div class="form-input">
    <label v-if="label" :for="name">{{ label }}</label>
    <input v-validate="validation" :autocomplete="autocomplete" :class="{ active: value.length }" :data-vv-as="label" :data-vv-delay="delay" :name="name" :type="type" :value="value" @input="$emit('input', $event.target.value)" />
    <div class="errors" v-if="$fields[name] && $fields[name].dirty && ! $fields[name].pending && $fields[name].invalid">
      <div class="message">
        <span class="error">{{ $errors.first(name) }}</span>
      </div>
      <!-- <div class="count" v-if="errors.collect(name).length > 1">
        <span>{{ errors.collect(name).length }}</span>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    inject: ['$validator'],

    name: 'FormInput',

    props: {
      autocomplete: {
        default: 'new-password',
        type: String
      },
      delay: {
        default: '',
        type: String
      },
      errorMessages: {
        default () {
          return []
        },
        type: Array
      },
      label: {
        type: String
      },
      name: {
        required: true,
        type: String
      },
      type: {
        required: true,
        type: String
      },
      validation: {
        default () {
          return {}
        },
        type: Object
      },
      value: {
        required: true,
        type: String
      }
    }
  }
</script>
