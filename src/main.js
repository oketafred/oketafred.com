import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false
import '../assets/css/styles.css';

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
