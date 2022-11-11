<style lang="scss" scoped>
  aside.call-to-action-bar {
    align-items: center;
    display: flex;
    height: 35px;
    justify-content: space-between;
    width: 100%;
  }

  div.call-to-action {
    align-items: center;
    display: flex;
    font-family: arial;
    font-size: 0.8rem;
    height: 100%;

    &:first-child {
      margin: 0 auto 0 0;
    }
    &:not(:first-child) {
      margin: 0 0 0 auto;
    }
    &:last-child {
      margin: 0;
    }

    a.inline-link {
      align-items: center;
      color: #ffffff;
      display: flex;
      height: 100%;
      padding: 0 1rem;
      text-decoration: none;
    }
  }
</style>

<template>
  <aside class="call-to-action-bar">
    <div class="call-to-action">
      <a class="inline-link" href="tel:01617498746"><span>Call us on 0161 749 8746</span></a>
    </div>
    <div class="call-to-action">
      <a class="inline-link" :href="$router.resolve({ name: 'user.enquire' }).href"><span>Enquire</span></a>
    </div>
    <!-- <div class="call-to-action">
      <a class="inline-link" :href="$router.resolve({ name: 'user.enquire' }).href" @click="$router.push({ name: 'user.enquire' })"><span>Enrol</span></a>
    </div> -->
  </aside>
</template>

<script>
  export default {
    name: 'DocumentCallToActionBar'
  }
</script>
