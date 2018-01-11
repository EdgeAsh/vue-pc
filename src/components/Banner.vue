<template lang="pug">
  div.swiper-container
    div.swiper-wrapper
      div.swiper-slide(v-for='(item, index) in imgList')
        img(:src='item')
    div.swiper-pagination.swiper-pagination-white
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  props: {
    imgList: Array
  },
  mounted() {
    console.log('swiper', this);
    let swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      loop: true,
      speed: 600,
      autoplay: {
        autoplay: true,
        disableOnInteraction: false
      },
      on: {
        // swiper第四版，监听事件的方法
        touchEnd: function () {
          console.log('touchEnd');
          // swiper.startAutoplay();
        }
      }
    });
    console.log(swiper);
  }
};
</script>

<style lang="sass">
.swiper-container
  width: 100%
  height: 400px

  .swiper-wrapper
    width: 100%
    height: 100%

    .swiper-slide
      background-position: center
      background-size: cover
      width: 100%
      height: 100%
      
      img
        width: 100%
        height: 100%
  
    .swiper-pagination-bullet
      width: 5px
      height: 5px
      display: inline-block
      background: #fff
  
</style>
