import Vue from 'vue';
import App from './App.vue';
import router from './router'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import BootstrapVue from 'bootstrap-vue'

import '@/@core/scss/_nav.scss'
require ('@/assets/scss/_custom.scss')

Vue.use(BootstrapVue)
new Vue({
  router, 
  render: h => h(App),
}).$mount('#app');
