<template>
  <div :class="['page-login', {
    'small': bSingle
  }]">
    <h2 class="title">登录</h2>
    <div class="form">
      <p class="label">用户名</p>
      <a-input placeholder="请输入用户名" class="input" type="text" v-model="postData.username" />

      <p class="label">密码</p>
      <a-input placeholder="请输入密码" class="input" type="text" v-model="postData.password" />

      <a-button
        class="login-btn"
        type="primary"
        :loading='bLoading'
        @click="handlerLogin">登 录 <a-icon type="swap-right" /></a-button>
    </div>

    <p class="copyright">
      &copy; 2019 wook.yao@foxmail.com
    </p>
  </div>
</template>

<script>
import { Input, Icon, Button } from 'ant-design-vue'
import WeValidator from 'we-validator'

export default {
  name: 'PageLogin',

  components: {
    [Input.name]: Input,
    [Icon.name]: Icon,
    [Button.name]: Button
  },

  data () {
    return {
      bSingle: false,
      bLoading: false,
      postData: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    handlerLogin () {
      if (!this.validator.checkData(this.postData)) return false
    },

    initValidator () {
      this.validator = new WeValidator({
        rules: {
          username: {
            required: true,
            minlength: 2
          },
          password: {
            required: true,
            minlength: 6
          }
        },
        messages: {
          username: {
            required: '[用户名]未填写',
            minlength: '[用户名]不能少于2位数'
          },
          password: {
            required: '[密码]未填写',
            minlength: '[密码]不能少于6位数'
          }
        }
      })
    }
  },

  mounted () {
    this.initValidator()
    this.bSingle = document.body.clientWidth <= 960
    window.onresize = () => {
      this.bSingle = document.body.clientWidth <= 960
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.page-login {
  position: relative;
  box-sizing: border-box;
  padding-left: 600px;
  padding-top: 20vh;
  width: 100%;
  height: 100vh;
  background: #fff;
  &.small {
    padding-left: 0;
    &:after {
      display: none;
    }

    .form {
      width: 55%;
    }
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 560px;
    background: url('~@/assets/images/loginbg.jpg') no-repeat center / cover;
  }

  .title {
    font-size: $color-title;
    font-size: 26px;
    text-align: center;
  }
  .form {
    margin: 60px auto 0;
    width: 40%;

    .label {
      margin: 30px 0 0 0;
      padding-bottom: 10px;
      font-size: 16px;
    }
    .login-btn {
      padding: 0 40px;
      border-radius: 20px;
      margin-top: 30px;
    }
  }

  .copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 560px;
    text-align: center;
    font-size: 12px;
    color: $color-white;
  }
}
</style>

