import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

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
];

export default new VueRouter({
  mode: 'history',
  routes: routes,
});