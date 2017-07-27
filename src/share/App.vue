<template>
  <div id="app">
    this is share
    <router-view></router-view>
  </div>
</template>

<script>
const FastClick = require('fastclick')
FastClick.attach(document.body)
export default {
  name: 'share'
}
</script>

<style lang='scss' rel="stylesheet/scss">
@import '~@/assets/scss/common';

</style>
