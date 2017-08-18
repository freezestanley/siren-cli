<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    ======================
    <VsIosSwitch></VsIosSwitch>
    <test></test>
    ======================
    <test2></test2>
    <!-- <world></world> -->
    <div @click="fetchTest">asdfas</div>
  </div>
</template>

<script>
import {ILOGIN, ITEST} from '@/api'
import {VsIosSwitch} from 'vsiren'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    VsIosSwitch
  },
  methods: {
    fetchTest () {
      this.axios.post(ILOGIN).then((response) => {
        console.dir(response)
        this.$router.push({path: '/test2'})
      }).catch((err) => {
        console.log(err)
        throw new Error(err)
      })
      this.axios.get(ITEST).then((response) => {
        console.dir(response)
      }).catch((err) => {
        console.log(err)
        throw new Error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
