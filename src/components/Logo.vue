<template>
  <div :class="['logo', {'collapsed': inlineCollapsed}]">
    <img class="logo-img" :src="logoSrc" alt="wook-admin-vue">
    <span class="logo-txt" v-if="!inlineCollapsed">WOOKADMIN</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',

  props: {
    inlineCollapsed: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      logoSrc: require('@/assets/images/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.logo {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 15px 20px;
  background: rgba(#000, .012);
  cursor: pointer;

  &.collapsed {
    .logo-img {
      width: 40px;
    }
  }

  &-img {
    width: 50px;
  }
  &-txt {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>

