export function beforeMountMixin () {
  if (this.$options.initialise) this.$initialisation = this.$options.initialise({
    prop: this.$props,
    route: this.$route,
    store: this.$store
  })
}

export function beforeRouteUpdateMixin (to, from, next) {
  try {
    if (this.$options.initialise) this.$options.initialise({
      prop: this.$props,
      route: to,
      store: this.$store
    }).
    then(next)

    else {
      next()
    }
  }

  catch (error) {
    next(error)
  }
}
