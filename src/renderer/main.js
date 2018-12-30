import Vue from 'vue'

import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'

// spectre.css
import 'spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import '@/assets/scss/custom.scss'

//db
import db from './datastore'

Vue.prototype.$db = db

Vue.use(VueClipboard)
Vue.use(Notifications, { velocity })

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
