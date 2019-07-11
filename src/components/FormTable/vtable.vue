<template>
  <div class="table">
    <div class="table-header">
      <span class="table-auto">#</span>
      <span class="table-item">Name</span>
      <span class="table-item">Age</span>
      <span class="table-item">Address</span>
      <span class="table-item">Address</span>
      <span class="table-item">Address</span>
      <span class="table-item">Address</span>
      <span class="table-item">Address</span>
      <span class="table-item">Phone</span>
      <span class="table-action">Actions</span>
    </div>

    <div class="table-body">
      <span class="table-auto">1</span>
      <span class="table-item">WOOKYAO</span>
      <span class="table-item">26</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">15256936283</span>
      <span class="table-action">
        1 2 3
      </span>
    </div>
    <div class="table-body">
      <span class="table-auto">2</span>
      <span class="table-item">YAOXU</span>
      <span class="table-item">26</span>
      <span class="table-item">上海市嘉定区马陆镇</span>
      <span class="table-item">上海市嘉定区</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">上海市嘉定区马陆镇金莎湾绿地和苑2号楼1302</span>
      <span class="table-item">15256936283</span>
      <span class="table-action">
        1 2 3
      </span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Table',

  props: {

  },

  data () {
    return {
      bsmall: false
    }
  },

  mounted () {
    this.bsmall = document.body.clientWidth <= 960
    window.onresize = () => {
      this.bsmall = document.body.clientWidth <= 960
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.table {
  box-sizing: border-box;
  padding: 15px 25px;
  width: 100%;
  background: $color-white;

  &-header,
  &-body {
    display: flex;
    align-items: center;
  }

  &-header {
    padding: 25px 0;
  }

  &-body {
    padding: 10px 0;
    border-top: 1px solid rgba($color-border, .15);
    border-radius: 15px;
    overflow: hidden;
    transition: all .2s ease-in-out;
    &:hover {
      background: rgba($color-theme, .051);
    }
  }

  &-auto {
    padding: 0 30px 0 0;
  }
  &-item {
    padding: 0 8px;
    flex: 2;
  }
  &-action {
    padding: 0 30px;
    flex: 3;
  }

}
</style>

