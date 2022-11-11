<style lang="scss" scoped>
  // position
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    & > div {
      color: #000000;
      display: flex;
      flex-direction: column;
      @media (min-width: 640px) { flex-direction: row; }
      font-size: 0.8rem;
      justify-content: center;
      padding: 1rem 0;
      text-align: center;
      width: 100%;
      @media (min-width: 640px) { width: 90%; }

      span {
        margin: 0.5rem 0;
        @media (min-width: 640px) { margin: 0 1rem; }
        line-height: 1.5;
        @media (min-width: 640px) { line-height: 1.8; }

        a {
          color: #000000;
        }
      }
    }
  }
</style>

<template>
  <footer>
    <div>
      <span>&copy; 2019 South Manchester Helen O'Grady Drama Academy</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'DocumentFooter'
  }
</script>
