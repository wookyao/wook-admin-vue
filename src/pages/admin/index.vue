<template>
  <div class="page-admin">
    <div class="side">
      <SideMenu v-if="menus.length" :menus='menus' />
    </div>
    
    <router-view />
  </div>
</template>

<script>
import SideMenu from 'components/SideMenu'

export default {
  name: 'AdminIndex',

  components: {
    SideMenu
  },

  data () {
    return {
      menus: []
    }
  },

  methods: {
    getMenus () {
      this.$request({
        method: 'get',
        url: '/menu'
      }).then(res => {
        if(res.fail) return false
        this.menus = res.data
      })
    }
  },

  created () {
    this.getMenus()
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.page-admin {
  display: flex;
  flex-direction: row;
  overflow: hidden;

  .side {
    width: 236px;
    height: 100vh;
    background: #fff;
    box-shadow: 0 4px 6px 0 rgba($color-bg-gray, .8);

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }
  }
}

</style>


