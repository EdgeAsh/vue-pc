import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/view/index';
import Register from '@/view/register.vue';
import Login from '@/view/login.vue';
import FindPwd from '@/view/findPwd.vue';
import ResetPwd from '@/view/resetPwd.vue';
import test from '@/view/test.vue';

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/findpwd',
      name: 'findpwd',
      component: FindPwd
    },
    {
      path: '/resetpwd',
      name: 'resetpwd',
      component: ResetPwd
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
});
