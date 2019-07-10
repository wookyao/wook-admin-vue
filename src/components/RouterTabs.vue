<template>
  <div class="tabs">
    <div :class="['tabs-item', {'active': current == item.path}]" v-for='item in tabs' :key='item.path' >
      <span class="txt" @click="handlerClick(item.path)">{{item.title}}</span>
      <a-icon v-if="current !== item.path" type="close" />
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
export default {
  name: 'RouterTabs',

  components: {
    [Icon.name]: Icon
  },
  
  data () {
    return {
      current: '/p/a',
      tabs: [{
        title: '工作台',
        path: '/p/a'
      }, {
        title: '分析页',
        path: '/p/b'
      }, {
        title: '滚动组件',
        path: '/p/c'
      }, {
        title: '页面加载',
        path: '/p/d'
      }, {
        title: '数据展示',
        path: '/p/e'
      }]
    }
  },

  methods: {
    handlerClick (path) {
      if (path === this.current) return false
      this.current = path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.tabs {
  box-sizing: border-box;
  padding: 0 15px;
  position: absolute;
  right: 20px;
  left: 20px;
  bottom: 10px;
  display: flex;
  height: 36px;
  background: #fff;
  color: $color-desc;
  border-radius: 18px;
  box-shadow: 0 4px 10px 0 rgba(#000, .03);

  &-item {
    margin-top: 6px;
    padding: 0 20px;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    cursor: pointer;
    transition: color .2s ease;
    &:hover {
      color: $color-theme;
    }

    &.active {
      background: $color-theme;
      color: $color-white;
    }
  }
}
</style>
