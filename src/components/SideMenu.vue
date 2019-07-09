<template>
  <div class="side-menu">
    <a-menu
      :defaultSelectedKeys="defaultSelectedKeys"
      :mode="mode"
      :openKeys="openKeys"
      :inlineCollapsed="inlineCollapsed"
      @openChange="onOpenChange"
      @select='handlerSelect'
    >
      <template v-for="(item, idx) in menus">
        <a-menu-item
          v-if="!item.children || !item.children.length"
          :key="item.path">
          <a-icon v-if='item.icon' :type="item.icon" />
          {{item.title}}
        </a-menu-item>
        <a-sub-menu
          v-if="item.children && item.children.length > 0" 
          :key="'sub' + idx">
          <span slot="title">
            <a-icon v-if='item.icon' :type="item.icon" />
            <span>{{item.title}}</span>
          </span>
          <a-menu-item
            v-for="sub in item.children"
            :key="sub.path">
            {{sub.title}}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue'

export default {
  name: 'SideMenu',

  components: {
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
    [Menu.Divider.name]: Menu.Divider,
    [Menu.ItemGroup.name]: Menu.ItemGroup,
    [Icon.name]: Icon
  },

  props: {
    menus: {
      type: Array,
      default() {
        return []
      }
    },
    mode: {
      type: String,
      default: 'inline'
    },
    unique: {
      type: Boolean,
      default: true
    },
    inlineCollapsed: {
      type: Boolean,
      default: false
    }
  },
  
  data () {
    return {
      defaultSelectedKeys: [],
      openKeys: [],
    }
  },

  methods: {
    onOpenChange (openKeys) {
      if (this.unique) {
        this.openKeys = openKeys && openKeys.length ? [openKeys[openKeys.length - 1]] : ['']
      }
    },
    handlerSelect (item) {
      let path = item.key
      console.log(path)
    }
  },

  created () {
    let menus = this.menus[0]
    let defaultSelectedKeys = menus.path
    
    if (menus.children && menus.children.length) {
      this.openKeys = ['sub0']
      defaultSelectedKeys = menus.children[0].path
    }
    this.defaultSelectedKeys = [defaultSelectedKeys]
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.side-menu {

}
</style>

