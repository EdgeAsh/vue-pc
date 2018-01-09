<template lang="pug">
  div.header.clearfix
    div.logo
      a(href="http://www.dianjiangla.com")
        img(src="http://3.img.dianjiangla.com/assets/icon/logo-2.png" alt="logo")
    div.nav
      ul(style='width: 320px')
        li
          a.active 首页
        li
          a 设计师
        li
          a 作品
        li
          a 关于我们
    div.search
      form(action="http://www.dianjiangla.com/search/designer")
        div.border.clearfix
            div.search-box(style='width: 374px')
              div.search-type(@mouseenter='showDropDown(true)',@mouseleave='showDropDown(false)')
                a.brd-r {{type[typeIndex]}}
                div.type-list(ref='sech_type')
                  div.item(v-for='(text,index) in type')
                    a(@click='chooseType(index)') {{text}}
              div.input
                input(type='text', :placeholder="type1")
            div.search-btn(@click='search')
              img(src='http://4.img.dianjiangla.com/assets/icon2/search.png')
    div.bth-header
      span(style="padding:0 20px") 或者
      span.btn 发布需求
    div.dl_zc(v-if="!isLogin")
        a(@click='login') 登录
        span(style='padding:0 4px') |
        a(@click='register') 注册
    a.self(v-if="isLogin", @mouseenter='', @mouseleave='')
      div.self-avatar
        img(src='http://1.img.dianjiangla.com/assets/user.png')
      div.self-info(ref='self_info')
        a.info-item.clearfix(@click='gotoSelfCenter')
          img.img(src="http://4.img.dianjiangla.com/assets/icon2/personal.png")
          a 个人中心
        a.info-item.clearfix(@click='gotoSetting')
          img.img(src="http://3.img.dianjiangla.com/assets/icon2/setUp.png")
          a 设置
        a.info-item.clearfix(@click='logout')
          img.img(src="http://3.img.dianjiangla.com/assets/icon2/retreat.png")
          a 退出
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
      isLogin: false,
      type: ['设计师', '作品'],
      typeIndex: 0
    };
  },
  mounted() {

  },
  methods: {
    showDropDown(tag) {
      this.$refs.sech_type.style.display = tag ? 'block' : 'none';
    },
    chooseType(index) {
      console.log('搜索类型', index);
      this.typeIndex = index;
    },
    login() {
      console.log('login');
    },
    logout() {
      console.log('logout');
    },
    register() {
      // 去注册页面
      console.log('register');
    },
    gotoSelfCenter() {
      console.log('gotoSelfCenter');
    },
    gotoSetting() {
      console.log('gotoSetting');
    },
    search() {
      console.log('search');
    }
  },
  computed: {
    type1() {
      let type = this.type;
      return type[this.typeIndex] + '名称';
    }
  }
};
</script>

<style lang='sass'>
$font12: 12px
$font14: 14px
$font-c1: #646464
$border: 1px solid #b3b3b3
$co-red: #c20c0c

input
  border: 0

.header
  height: 80px
  width: 1200px
  margin: 0 auto
  background-color: #fff
  // 限定在header里
  .active,a:hover
    color: $co-red !important

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
          position: relative

          .brd-r
            display: inline-block
            width: 100%
            line-height: 20px
            border-right: $border
            border-left-bottom-radius: 4px
            border-right-bottom-radius: 4px

            &:after
              content: '▼'
              position: absolute
              font-size: inherit
              margin-left: 5px

          .type-list
            display: none
            position: absolute
            width: 100%
            margin-top: -2px
            background: #fff
            border-radius: 0px 0px 4px 4px

            .item
              line-height: 30px
        .input
          width: 280px
          font-size: $font14

          input
            width: 100%
            height: 30px
            text-indent: 17px

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
    line-height: 78px // 不知道为什么设置大于78时，btn-header的高度就是81

    span
      font-size: $font12
      color: $font-c1
    .btn
      display：inline-block
      background-color: #c20
      border-radius: 5px
      padding: 3px 8px
      color: #fff
      cursor: pointer

  .dl_zc
    float: right
    line-height: 80px
    font-size: $font12
    color: $font-c1
  
  .self
    display: block
    position: relative
    float: right
    height: 80px
    line-height: 80px
    width: 100px

    .self-avatar
      margin-top: 24px
      img
        margin: 0 auto
        display: block
        width: 32px
        height: 32px
    
    &:hover
      .self-info
        display: block

    .self-info
      display: none
      position: absolute
      font-size: $font14
      color: $font-c1
      border: $border

      .info-item
        display: block
        text-align: center
        width: 100px
        line-height: 30px

        .img
          float: left
          margin: 8px 0 0 4px
          height: 15px
          width: 15px

</style>
