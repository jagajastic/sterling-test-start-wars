import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery';
import 'jquery/dist/jquery.min.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
