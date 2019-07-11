<template>
  <div class="form-table">
    <VHeader
      :placeholder='serachplaceholder'
      @handlerSort='handlerSort'
      @handlerAdd='handlerToggleForm'
      @handlerSearch='handlerSearch' />
    <div class="data-view">
      <slot name="dataview"></slot>
    </div>
    <div class="page-view">
      <Pagination @change='handlerPageChange' size='small' :pageSize='8' :total="50" />
    </div>
    <a-drawer
      :title="formtitle"
      :width="formwidth"
      @close="handlerToggleForm"
      :visible="formvisible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <slot name="dataedit"></slot>
    </a-drawer>
  </div>
</template>

<script>
import { Pagination, Drawer } from 'ant-design-vue'

import VHeader from './vheader'

export default {
  name: 'FormTable',

  components: {
    Pagination,
    VHeader,
    [Drawer.name]: Drawer
  },

  props: {
    sortlist: {
      type: Array,
      default: () => []
    },
    serachplaceholder: {
      type: String,
      default: '请输入关键字'
    },
    formtitle: {
      type: String,
      default: 'Create a new account'
    },
    formwidth: {
      type: Number,
      default: 720
    },
    formvisible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      
    }
  },

  methods: {
    handlerSort (sort) {
      console.log(sort)
    },
    handlerSearch (val) {
      if (!val) return false
    },
    handlerToggleForm () {
      this.$emit('toggleForm')
    },
    handlerPageChange (size, pagesize) {
      this.$emit('pageChange', size)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.form-table {
  .page-view {
    text-align: center;
    .ant-pagination-item-active {
      border-radius: 50%;
      background: $color-theme;
      a {
        color: $color-white;
      }
    }
  }

  .data-view {
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 25px;
    width: 100%;
    background: $color-white;
  }
}
</style>

