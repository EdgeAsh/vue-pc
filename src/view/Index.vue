<template lang='pug'>
  <div>
    head-top
    //- 轮播图
    div.banner
      banner(:imgList='imgList')
    //- 快速匹配
    div.quik-match-wrapper
      div.quik-match.border-red
        ul.clearfix
          li.hy
            a.btn
              span 行业类目
              span ▼
            span.v-line |
            ul
              li(v-for='')
                a
          li.xz
            a.btn
              span 薪资预算
              span ▼
            span.v-line |
            ul
              li(v-for='')
          li.nx
            a.btn
              span 工作年限
              span ▼
            span.v-line |
            ul
              li(v-for='')
                a
          li.level
            a.btn
              span 等级
              span ▼
            span.v-line
            ul
              li(v-for='')
                a
          li.submit-btn
            a 快速配置
    div.marquee-wrapper.clearfix
      div.public
        img(src='http://4.img.dianjiangla.com/assets/icon/laba.png')
        span 点将榜：
      div.marquee
        <marquee style='border: 1px solid #ddd'>feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.
        </marquee>
    
    //- 推荐设计师
    div.pop-designer.clearfix
      div.public-title
        div.title
          span 推荐设计师
        div.more
          span 更多 >

      ul.designer-list
        //- 
        li.card(v-for='(item, index) in designerList')
          div.img
            img(:src='item.image_url')
          div.info
            div.name-icon
              span.name {{item.nickname}}
              span.icon 
                img(src='http://3.img.dianjiangla.com/assets/icon/security.png')
                img(src='http://3.img.dianjiangla.com/assets/icon/certification.png')
            div.salary-wrapper
              div.salary ￥<span style='color:#f54203'>{{item.salary}}</span>/月
            div.goodAt
              span(v-for='(skill, index) in item.skilful') {{skill}} |
  </div>
</template>

<script>
import HeadTop from '@/components/head-top.vue';
import Banner from '@/components/Banner.vue';
import axios from 'axios';

export default {
  props: {

  },
  data() {
    return {
      imgList: [
        'http://3.img.dianjiangla.com/uploads/a3b1049aa3bc00c35228071a108a723a506219.jpg!1920',
        'http://3.img.dianjiangla.com/uploads/58263799205c1262e129c77dd9e04280494424.jpg!1920',
        'http://3.img.dianjiangla.com/uploads/1d6a35a4a970560b71127986c78b1653391418.jpg!1920'
      ],
      designerList: []
    };
  },
  created() {
    axios.get('http://192.168.2.200:8081/mockjsdata/2/designer/recommend').then((res) => {
      let designer = res.data.data[0];
      for (let i = 0; i < 10; i++) {
        this.designerList.push(designer);
      }
      console.log(res);
    });
  },
  components: {
    Banner,
    HeadTop
  }
};
</script>

<style lang='sass'>
$border: 1px solid #c20c0c
$border2: 1px solid #ccc
$color1: #c20c0c //红色
$color2: #b3b3b3 //淡灰
$color3: #f54203 //橘色
$color4: #686868 //灰色

$font12: 12px
$font14: 14px
$font16: 16px

.banner
  width: 100%

// 公共头
.public-title
  box-sizing: content-box
  overflow: hidden
  width: 100%
  height: 38px
  padding: 30px 0 12px

  .title
    float: left
    font-size: $font16
    line-height: 35px
    border-bottom: 3px solid #c20c0c

  .more
    font-size: $font14
    float: right
    color: $color4
    border: 1px solid #ddd
    border-radius: 5px
    padding: 7px 10px

.quik-match-wrapper
  width: 100%
  margin: 20px 0 32px 0

  .border-red
    border: $border

  .quik-match
    width: 962px
    height: 40px
    border-radius: 3px
    margin: 0 auto

    & > ul > li
      float: left
      height: 38px
      width: 196px
      position: relative

      & > a
        display: inline-block
        width: 100%
        line-height: 38px
        text-align: center
        font-size: $font14

        &:hover
          color: $color1
      
      .v-line
        position: absolute
        right: 0px
        line-height: 38px
        color: $color2

      &.submit-btn
        width: 176px
        background-color: $color1
        color: #fff
        line-height: 40px

        & a:hover
          color: #fff

.marquee-wrapper
  width: 1200px
  margin: 0 auto
  
  .public
    width: 10%
    color: $color3
    line-height: 30px
    float: left

    img
      float: left
      margin-right: 10px
      margin-top: 8px
      
    span
      font-size: $font14
      line-height: 14px
      
  .marquee
    float: left
    width: 90%
    height: 30px

    marquee
      height: 100%
      border: 1px solid #ddd

.pop-designer
  width: 1200px
  margin: 20px auto

.card
  border: $border2
  width: 222px
  float: left
  margin: 0 10px 10px 0

  .img
    width: 220px
    height: 260px

    img
      width: 100%
      height: 100%
  .info
    padding: 10px 10px 0

    .name-icon
      height: 22px
      line-height: 22px

      .name
        font-size: $font12
        color: $color4
        margin-right: 5px
      .icon
        img
          margin-right: 2px
          margin-bottom: -3px
        

    .salary-wrapper
      height: 25px
      line-height: 25px

      .salary
        font-size: $font12
        float: right
        
    .goodAt
      border-top: $border2
      color: #666
      font-size: $font12
      height: 32px
      line-height: 32px
  &:hover
    box-shadow: 10px 10px 10px #ccc
    margin: 0 13px 22px 9px
</style>

