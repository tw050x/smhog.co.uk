import * as timing from 'throttle-debounce'

export default {
  methods: {
    debounce (delay, atBegin, callback) {
      return timing.debounce(delay, atBegin, callback)
    },
    throttle (delay, noTrailing, callback, debounceMode) {
      return timing.throttle(delay, noTrailing, callback, debounceMode)
    }
  }
}
