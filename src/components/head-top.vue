<template lang="pug">
  div.header.clearfix
    div.logo
      a(href="http://www.dianjiangla.com")
        img(src="http://3.img.dianjiangla.com/assets/icon/logo-2.png" alt="logo")
    div.nav
      ul
        li.clearfix
          a(href='') 首页
        li.clearfix
          a(href='') 设计师
        li.clearfix
          a(href='') 作品
        li.clearfix
          a(href='') 关于我们
    div.search
      form(action="http://www.dianjiangla.com/search/designer")
        div.border.clearfix
            div.search-box(style='width: 374px')
              div.search-type
                span('') {{type[0]}} ▼
              div.input
                input(type='text', :placeholder="type")
            div.search-btn(@click='search')
              img(src='http://4.img.dianjiangla.com/assets/icon2/search.png')
    div.bth-header
      span(style="padding:0 20px") 或者
      span.btn 发布需求
    div.dl_zc(v-if="!isLogin")
        span(@click='login') 登录 | 
        span(@click='register') 注册
    div.self(v-if="isLogin")
      div.self-avatar
        img(src='http://3.img.dianjiangla.com/assets/icon2/personal.png')
      div.self-info
        div.self-info-item(@click='gotoSelfCenter')
        div.self-info-item(@click='gotoSetting')
        div.self-info-item(@click='logout')
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
      isLogin: false,
      type: ['设计师', '作品']
    };
  },
  mounted() {

  },
  methods: {

  },
  computed: {
    type() {
      return this.type[1] + '作品';
    }
  }
};
</script>

<style lang='sass'>
$font12: 12px
$font14: 14px
$font-c1: #646464
$border: 1px solid #b3b3b3

input
  border: 0

.header
  height: 80px
  width: 1200px
  margin: 0 auto
  
  .logo
    width: 190px
    float: left
    height: 80px
    
    a
      line-height: 80px
      height: 80px
      font-size: 0
  
  .nav
    float: left
    li
      float: left
      a
        display: inline-block
        height: 80px
        line-height: 80px
        padding: 0 12px
        font-size: $font14
        color: $font-c1
      
  .search
    float: left
    margin-top: 24px

    .border
      position: relative
      border: $border
      border-radius: 3px
      height: 32px

      .search-box
        .search-type,.input
          display: inline-block

        .search-type
          font-size: $font14
          width: 93px
          color: $font-c1
          text-align: center

          span
            display: inline-block
            width: 100%
            line-height: 30px

            &:after
              content: ' '
              font-size: inherit
              border-right: $border
              padding-right: 5px

        .input
          width: 280px
          font-size: $font14

          input
            width: 100%
            height: 28px

      .search-btn
        cursor: pointer
        position: absolute
        top: 0
        right: 0
        width: 30px
        height: 30px
        text-align: center

        img
          width: 14px
          height: 14px
          margin-top: 7px

  .bth-header
    float: left
    line-height: 80px

    span
      font-size: $font12
      color: $font-c1
    .btn
      display：inline-block
      background-color: #c20
      border-radius: 5px
      padding: 3px 8px
      color: #fff

  .dl_zc
    float: right
    line-height: 80px
    font-size: $font12
    color: $font-c1
  
  .self
    float: right
    height: 80px
    
</style>
