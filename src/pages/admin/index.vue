<template>
  <div class="page-admin">
    <div :class="['side', {'collapsed': inlineCollapsed}]">
      <Trapezoid @toggle='inlineCollapsed = !inlineCollapsed' />
      <Logo :inlineCollapsed='inlineCollapsed' />
      <div class="scroll-view">
        <SideMenu v-if="menus.length" :menus='menus' :inlineCollapsed='inlineCollapsed' />
      </div>
      <BottomBar :inlineCollapsed='inlineCollapsed' />
    </div>
    <div class="main">
      <Header :title='headerTitle' />
      <router-view />
    </div>
  </div>
</template>

<script>
import ScrollView from 'components/ScrollView'
import Trapezoid from 'components/Trapezoid'
import Logo from 'components/Logo'
import SideMenu from 'components/SideMenu'
import BottomBar from 'components/BottomBar'
import Header from 'components/Header'

export default {
  name: 'AdminIndex',

  components: {
    ScrollView,
    Trapezoid,
    Logo,
    SideMenu,
    BottomBar,
    Header
  },

  watch: {
    '$route.path': (newVal, oldVal) => {
      console.log(newVal)
    }
  },

  data () {
    return {
      inlineCollapsed: false,
      menus: [],
      logo: require('@/assets/images/logo.png'),
      headerTitle: ''
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
        this.setMenus(res.data)
      })
    },

    setMenus (data) {
      let role = 1
      let menus = []
      data.map(item => {
        if (item.role.includes(0)) {

        }
      })
    }
  },

  created () {
    this.headerTitle = this.$route.meta.title
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
    transition: width .3s ease;

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }
    &.collapsed {
      width: 80px;
    }
    .scroll-view {
      position: absolute;
      top: 75px;
      right: 0;
      bottom: 60px;
      left: 0;
      z-index: 9;
    }
  }
  .main {
    position: relative;
    z-index: 88;
    box-sizing: border-box;
    flex: 1;
    padding: 0 20px 51px;
    height: 100vh;
    overflow: hidden;
  }
}

</style>


