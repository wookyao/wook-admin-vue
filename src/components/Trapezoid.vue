<template>
  <div :class="['trapezoid', {'hide': mini}]" @click='toggle'>
    <a-icon type="double-right" />
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'

export default {
  name: 'Trapezoid',

  components: {
    [Icon.name]: Icon
  },

  props: {
    mini: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.trapezoid {
  position: absolute;
  bottom: 50%;
  right: 0;
  z-index: 9999;
  height: 20px;
  width: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: all .35s;
  transform-origin: top right;
  background: #f1f1f1;
  color: #ccc;

  &:before,
  &:after {
    position: absolute;
    content: '';
    z-index: -1;
    right: 0;
    height:0;
    width:0;
    border: 16px solid #f1f1f1;
    border-color: transparent #f1f1f1 transparent transparent;
  }
  &:after {
    top: -16px;
  }
  &:before {
    bottom: -16px;
  }
}
</style>

