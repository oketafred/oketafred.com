import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import VueAnalytics from 'vue-analytics';

import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false
import '../assets/css/styles.css';

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-161194796-1',
  router
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
