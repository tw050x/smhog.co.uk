<script>
  export default {
    functional: true,

    name: 'NoSsr',

    props: {
      placeholder: {
        type: String
      },

      tag: {
        default: 'div',
        type: String
      }
    },

    render (h, { parent, slots, props }) {
      const { default: defaultSlot = [], placeholder: placeholderSlot } = slots()

      if (parent._isMounted) {
        return defaultSlot
      }

      parent.$once('hook:mounted', () => parent.$forceUpdate())

      if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
        return h(props.placeholderTag, { class: ['no-ssr-placeholder'] }, props.placeholder || placeholderSlot)
      }

      return defaultSlot.length > 0 ? defaultSlot.map(() => h(false)) : h(false)
    }
  }
</script>
