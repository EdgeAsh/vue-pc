<template>
  <div>
    <head-top></head-top>
    <self-footer></self-footer>
    <float-nav></float-nav>
  </div>
</template>

<script>
import '@/assets/css/base.css';
import HeadTop from '@/components/head-top.vue';
import SelfFooter from '@/components/Footer.vue';
import FloatNav from '@/components/FloatNav.vue';

export default {
  props: {

  },
  data() {
    return {
    };
  },
  components: {
    HeadTop,
    SelfFooter,
    FloatNav
  }
};
</script>

<style>

</style>


