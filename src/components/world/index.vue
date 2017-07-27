<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>this is world</h2>
  </div>
</template>

<script>
import {ILOGIN, ITEST} from '@/api'
export default {
  name: 'world',
  data () {
    return {
      msg: 'Welcome to Your world'
    }
  },
  methods: {
    fetchTest () {
      this.axios.post(ILOGIN).then((response) => {
        console.dir(response)
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
