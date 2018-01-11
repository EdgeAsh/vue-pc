import Vue from 'vue';
import Router from 'vue-router';
// import Index from '@/view/index';
import Register from '@/view/register.vue';
import App from '@/App.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});
