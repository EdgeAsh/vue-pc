import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/view/index';
import Register from '@/view/register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});
