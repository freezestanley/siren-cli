import Vue from 'vue'
const config = {
  baseUi: [
    { // 同步
      name: 'hello',
      path: require('@/components/hello')
    },
    { // 同步
      name: 'world',
      path: require('@/components/world')
    },
    { // 同步
      name: 'test',
      path: require('@/components/test')
    },
    { // 同步
      name: 'test2',
      path: 'components/test2',
      src: true
    }
    // { // 异步
    //   name: 'study',
    //   path: 'application/study/index',
    //   src: true // 'application/study/test'
    // }
  ]
}

let objKey = Object.keys(config)
objKey.map(function (ele, index, array) {
  config[ele].map(function (e, i, a) {
    if (e.src) {
      Vue.component(e.name, (resolve) => {
        require.ensure([], (require) => {
          let req = require.context("@/", true, /^\.\/.*\.vue$/)(`./${e.path}/index.vue`)
          resolve(req)
        })
      })
    } else {
      Vue.component(e.name, e.path.default)
    }
  })
})

export default config
