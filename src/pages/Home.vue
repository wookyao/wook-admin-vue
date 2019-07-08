<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button class="ui-button" block type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue'
import {Button} from 'vant'

export default {
  name: 'home',
  components: {
    HelloWorld,
    [Button.name]: Button 
  },
  methods: {
    getDetails() {
      this.$request({
        method: 'get',
        url: 'doctor/detail',
        data: {
          doctorId: 1
        }
      }).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getDetails()
  }
}
</script>

<style lang='scss'>
@import '@/styles/index.scss';
.home {
  text-align: center;
}

</style>

