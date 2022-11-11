import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  errorBagName: '$errors',
  fieldsBagName: '$fields'
})
