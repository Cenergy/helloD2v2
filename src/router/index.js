import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import hello from '../components/hello/hello.vue';
import world from '../components/world/world.vue';
import About from '../pages/About/About.vue';
import Home from '../pages/Home/Home.vue';

import test from './test';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/hello',
      component: hello,
    },
    {
      path: '/world',
      component: world,
    },
    {
      path: '/about',
      component: About,
    },
    test,
  ],
});
