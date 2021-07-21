import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { BootstrapVue,NavbarPlugin , IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import VueAxios from 'vue-axios';
import cors from 'cors'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavbarPlugin)
Vue.use(VueAxios,axios,cors);

new Vue({
  render: h => h(App),
}).$mount('#app')
