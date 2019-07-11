<template>
  <div class="header">
    <div class="header-main">
      <span 
        :class="['sort-item', {
          active: index === sortIndex
        }]"
        v-for="(item, index) in sortlist"
        :key='index'
        @click="handlerSort(item.key, index)">{{item.title}}</span>
    </div>
    <div class="header-aside">
      <a-input-search
        class="search"
        :placeholder="placeholder"
        style="width: 200px"
        @search="onSearch"
        size='small'
      />
      <a-tooltip>
        <template slot='title'>
          新增记录
        </template>
        <span class="add-btn" @click="handlerAdd">新增</span>
      </a-tooltip>
    </div>
  </div>
</template>

<script>
import { Input, Icon, Tooltip } from 'ant-design-vue'

export default {
  name: 'Table',

  props: {
    placeholder: {
      type: String,
      default: ''
    },
    sortlist: {
      type: Array,
      default: () => []
    }
  },

  components: {
    [Input.Search.name]: Input.Search,
    [Icon.name]: Icon,
    [Tooltip.name]: Tooltip
  },

  data () {
    return {
      sortIndex: 0
    }
  },

  methods: {
    handlerSort (item, idx) {
      this.sortIndex = idx
      this.$emit('handlerSort', item)
    },

    onSearch (val) {
      this.$emit('handlerSearch', val)
    },

    handlerAdd () {
      this.$emit('handlerAdd')
    }
  }
}
</script>

<style lang="scss" >
@import '@/styles/index.scss';
.header {
  display: flex;
  width: 100%;
  margin-bottom: 25px;

  &-main {
    flex: 1;
    .sort-item {
      position: relative;
      padding-right: 30px;
      font-size: 14px;
      color: $color-body;
      cursor: pointer;
      transition: color .2s ease-out;

      &.active,
      &:hover {
        color: $color-theme;
      }
    }
  }

  &-aside {
    .search .ant-input {
      border-radius: 20px;
      font-size: 12px;
    }

    .add-btn {
      display: inline-block;
      padding: 2px 35px;
      margin: 0 10px 0 15px;
      font-size: 12px;
      color: $color-title;
      background: transparent;
      color: $color-theme;
      border: 1px solid $color-theme;
      
      border-radius: 16px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        color: $color-white;
        background-color: rgba($color-theme, .85);
      }
    }
  }
}
</style>

