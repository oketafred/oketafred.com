import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
// import 404 from '../views/404.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: Home, 
    name: 'home' 
  },
  { 
    path: '/projects', 
    component: Projects, 
    name: 'projects' 
  },
  {
    path: '*',
    component: NotFound,
    name: '404'
  }
];

export default new VueRouter({
  mode: 'history',
  routes: routes,
});