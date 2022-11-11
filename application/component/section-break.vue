<style lang="scss" scoped>
  div.section-break {
    position: relative;

    div.before-container {
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      top: -2px;
      z-index: 500;
    }

    div.after-container {
      bottom: -2px;
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      z-index: 500;
    }
  }
</style>

<template>
  <div class="section-break">
    <div class="swoosh white before-container" :class="{ reverse: reverse }">
      <svg height="500px" preserveAspectRatio="none" version="1.1" viewBox="0 0 500 300" width="100%" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <path d="M0,112.43C166.67,272.5,333.33-49.77,500,53.55V-0.12H0V112.43z" style="filter:url(#dropshadow)" />
      </svg>
    </div>
    <slot />
    <div class="swoosh white flip after-container" :class="{ reverse: reverse }">
      <svg height="500px" preserveAspectRatio="none" version="1.1" viewBox="0 0 500 300" width="100%" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
        <filter id="dropshadowreverse" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="-2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path d="M0,112.43C166.67,272.5,333.33-49.77,500,53.55V-0.12H0V112.43z" style="filter:url(#dropshadowreverse)" />
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionBreak',

    props: {
      reverse: {
        default: false,
        type: Boolean
      }
    }
  }
</script>
