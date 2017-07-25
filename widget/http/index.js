/*************************************
* http plus axios
*
* example:
*
* this.axios.get('/test').then((response) => {
*   console.log(response.data)
* }).catch((err) => {
  throw new Error(err)
  console.log(err)
})
*
* post Content-Type application/json
*
* this.axios.post('/user', {'xxx': 123123, 'bbbb': 333333})
* .then((response) => {
*   console.log(this)
* })
* .catch(function (error) {
*   console.log(error)
* })
*
* postFrom Content-Type application/x-www-form-urlencoded
*
* this.axios.postFrom('/user', {'xxx': 123123, 'bbbb': 333333})
* .then((response) => {
*   console.log(this.test)
* })
* .catch(function (error) {
*   console.log(error)
* })
**************************************/
import Vue from 'vue'
import URLSearchParams from 'url-search-params'
import axios from 'axios'
import VueAxios from 'vue-axios'
require('es6-promise').polyfill()
require('isomorphic-fetch')

Vue.use(VueAxios, axios)
if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = '//' + document.domain + '/api'
} else {
  axios.defaults.baseURL = '/api'
}
// axios.defaults.headers.common['Authorization'] = 'adfasdfasdf'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.timeout = 20000
// axios.defaults.headers = {"post": 'application/x-www-form-urlencoded', 'token': '1231231'}
// axios.defaults.headers.common['token'] = '123123123'
// axios.defaults.baseURL = '//192.168.26.36:8081'
// axios.defaults.baseURL = 'http://www.mock.io:3000'
// axios.default.baseURL = 'http://192.168.26.50:3000'
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'http://192.168.2.1:3000'
// axios.defaults.headers = {'token12312': 'foo'}
// axios.defaults.responseType = 'json'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.token = '12312312312313'
// axios.defaults.headers.deviceId = window.cookie.get('hq_http_deviceid')
// axios.defaults.headers.post['token'] = 'asdfasdfasf'
axios.postFrom = (uri, param) => {
  let params = new URLSearchParams()
  Object.keys(param).forEach((v, i, a) => {
    params.append(v, param[v])
  })
  return axios.post(uri, params)
}
