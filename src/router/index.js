import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/view/index';
import Register from '@/view/register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/user/register',
      name: 'register',
      component: Register
    }
  ]
});
