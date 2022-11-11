<template>
  <aside>
    <slot :hide="hide" :show="show" :visible="visible" />
  </aside>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    },

    methods: {
      hide () {
        this.visible = false
      },
      show () {
        this.visible = true
      }
    },

    name: 'Cloak'
  }
</script>
