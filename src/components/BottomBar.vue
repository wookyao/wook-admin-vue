<template>
  <div class="bottom-bar">
    <a-icon v-if='!inlineCollapsed' class="bottom-bar--icon" type="bell" />
    <div class="avatar-wrap">
      <a-tooltip>
        <template slot='title'>
          {{userinfo.name}}
        </template>
        <img class="avatar" :src="userinfo.avatar" :alt="userinfo.name">
      </a-tooltip>
    </div>
    <a-icon v-if='!inlineCollapsed' class="bottom-bar--icon" type="login" />
  </div>
</template>

<script>
import { Badge, Icon, Tooltip } from 'ant-design-vue'

export default {
  name: 'BottomBar',

  components: {
    [Badge.name]: Badge,
    [Icon.name]: Icon,
    [Tooltip.name]: Tooltip
  },

  props: {
    inlineCollapsed: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      userinfo: {}
    }
  },

  methods: {
    getUserInfo () {
      this.$request({
        method: 'get',
        url: '/userinfo'
      }).then(res => {
        this.userinfo = res.data
      })
    }
  },

  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 10px 20px;
  width: 100%;
  height: 60px;
  background: rgba(#000, .012);

  .avatar {
    &-wrap {
      flex: 1;
      text-align: center;
      cursor: pointer;
    }
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f8f8f8;
  }
  &--icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    color: $color-desc;
    cursor: pointer;
    transition: color .3s ease-in-out;
    &:hover {
      color: $color-theme;
    }

    &:first-child {
      padding-right: 10px;
    }
    &:last-child {
      padding-left: 10px;
      color: $color-danger;
    }
  }
}
</style>
