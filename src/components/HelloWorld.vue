<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang='scss'>
@import '@/styles/index.scss';
h1 {
  font-size: 36px;
  text-align: center;
}
</style>

