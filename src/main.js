import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import api from './api/api'
import store from './store/store'

Vue.config.productionTip = false

Vue.prototype.$http = api()
Vue.use('vuetify')
Vue.use('router')
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
