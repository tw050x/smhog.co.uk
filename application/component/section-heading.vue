<style lang="scss" scoped>
  header {
    font-size: 1.25rem;
    @media (min-width: 960px) { font-size: 1.5625rem; }
    text-align: left;
  }

  header h1 {
    display: block;
    line-height: 1.5;
    span {
      font-size: 1.2em;
    }
  }

  header h2 {
    display: block;
    line-height: 1.5;
    span {
      font-size: 1em;
      @media (min-width: 640px) { font-size: 0.8em; }
    }
  }
</style>

<template>
  <header>
    <h1><slot name="h1" /></h1>
    <h2><slot name="h2" /></h2>
  </header>
</template>

<script>
  export default {
    name: 'SectionHeading'
  }
</script>
