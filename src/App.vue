<template>
  <div id="app">
    <!-- <img src="./assets/images/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
const FastClick = require('fastclick')
FastClick.attach(document.body)
export default {
  name: 'app'
}
</script>

<style lang='scss' rel="stylesheet/scss">
@import '~@/assets/scss/common';
</style>
