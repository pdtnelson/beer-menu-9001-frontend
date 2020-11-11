import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = Axios.create({
  // TODO: Get this to work correctly baseURL: process.env.VUE_APP_API_BASE_URL
  baseURL: 'http://192.168.10.10/api'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
