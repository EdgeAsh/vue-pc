<template>
  <div>
    <head-top></head-top>
    <self-footer></self-footer>
  </div>
</template>

<script>
import '@/assets/css/base.css';
import HeadTop from '@/components/head-top.vue';
import SelfFooter from '@/components/Footer.vue';

export default {
  props: {

  },
  data() {
    return {
    };
  },
  components: {
    HeadTop,
    SelfFooter
  }
};
</script>

<style>

</style>


