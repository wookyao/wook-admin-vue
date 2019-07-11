<template>
  <div :class="['header', {
    'fixed': fixed
  }]">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: {
    title: {
      type: String,
      default: 'WOOKADMIN'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },

  created () {
    let r = this.$store
    console.log(r)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 80px;

  .title {
    position: relative;
    flex: 1;
    font-size: 24px;
    color: $color-title;
    letter-spacing: 1px;
  }
}
</style>

