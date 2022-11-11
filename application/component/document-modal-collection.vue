<style lang="scss" scoped>
  aside.modal-collection {

    div.mask {
      background: #000000;
      bottom: 0;
      height: 100vh;
      left: 0;
      opacity: 0.5;
      position: fixed;
      right: 0;
      top: 0;
      width: 100vw;
    }

    div.positioner {
      height: 100vh;
      left: 50%;
      margin: auto;
      position: fixed;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;

      @media (min-width: 640px) {
        height: auto;
        min-height: 400px;
        min-width: 500px;
        width: auto;
      }
    }

    div.modal {
      background: #ffffff;
      border: 1px solid #f8f6f6;
      border-radius: 5px;
      box-shadow: 0 0px 20px -15px #000;
      display: none;
      flex-direction: column;
      position: absolute;
      width: 100%;

      @media (min-width: 640px) {
        // min-height: 400px;
        min-width: 500px;
      }

      &:nth-child(1) {
        display: flex;
        z-index: 100;
      }

      &:nth-child(2) {
        display: flex;
        transform: scale(0.99) translateY(7px);
        z-index: 90;
      }

      &:nth-child(3) {
        display: flex;
        transform: scale(0.98) translateY(14px);
        z-index: 80;
      }
    }

    span.close-button {
      cursor: pointer;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }

    div.default-component {
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }

    div.title {
      font-family: 'alcuin';
      font-size: 2rem;
      margin: 0 0 2rem;
      text-align: center;
    }

    // div.body {}
  }
</style>

<template>
  <aside class="modal-collection">
    <transition enter-class="opacity-none" enter-active-class="animated fastest halfFadeIn" leave-active-class="animated halfFadeOut" mode="in-out" name="mask-transition" :duration="250">
      <div class="mask" v-if="modals.length"></div>
    </transition>
    <div class="positioner">
      <transition-group enter-class="opacity-none" enter-active-class="animated faster zoomIn" leave-active-class="animated zoomOut" name="modal-transition" tag="div" :duration="500">
        <div class="modal" v-for="(modal, index) in modals" :key="modal + index">
          <span class="close-button" @click="$emit('clear')">close</span>
          <component v-if="modal.component" :is="modal.component" />
          <template v-else>
            <div class="default-component">
              <div class="title">
                {{ modal.title }}
              </div>
              <div class="body">
                {{ modal.message.friendly }}
              </div>
            </div>
           </template>
        </div>
      </transition-group>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'DocumentModelCollection',

    props: {
      modals: {
        require: true,
        type: Array
      }
    }
  }
</script>
