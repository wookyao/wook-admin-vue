<template>
  <div class="page-admin">
    <div class="side">
      <SideMenu v-if="menus.length" :menus='menus' />
    </div>
    <div class="main">
      <router-view />
    </div>
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
    position: relative;
    z-index: 99;
    width: 235px;
    height: 100vh;
    background: #fff;
    box-shadow: 0 4px 6px 0 rgba($color-bg-gray, .8);
    transition: width .3s ease-in;

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }
  }
  .main {
    position: relative;
    z-index: 88;
    box-sizing: border-box;
    flex: 1;
  }
}

</style>


