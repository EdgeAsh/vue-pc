<template lang="pug">
  div.float-nav
    ul
      li(@mouseenter='show',@mouseleave='hide')
        div <a @click=''><img src='http://3.img.dianjiangla.com/assets/indexFloatNav/home-d.png'></a>
        div.tag
          span 个人中心
      li
        div.border-bot
      li(@mouseenter='show',@mouseleave='hide')
        div <a target="blank" href="http://wpa.qq.com/msgrd?V=3&amp;uin=2355456052&amp;Site=QQ客服&amp;Menu=yes"><img src="http://4.img.dianjiangla.com/assets/indexFloatNav/qq-d.png" alt=""></a>
        div.tag
          span 联系客服
      li
        div.border-bot
      li(@mouseenter='show',@mouseleave='hide')
        div <a @click=''><img src="http://4.img.dianjiangla.com/assets/indexFloatNav/phone-d.png" alt=""></a>
        div.tag(style="line-height: normal")
          span 客服电话<br/>
          span 18058814862
      li
        div.border-bot
      li(@mouseenter='show',@mouseleave='hide')
        div <a @click=''><img src="http://3.img.dianjiangla.com/assets/indexFloatNav/proposal-d.png" alt=""></a>
        div.tag
          span 建议反馈
      li
        div.border-bot

      li(@click='gotoTop()',@mouseenter='show',@mouseleave='hide')
        div <a href="javascript:;"><img src="http://2.img.dianjiangla.com/assets/indexFloatNav/top-d.png" alt=""></a>
        div.tag
          span 回到顶部
</template>

<script>
export default {
  methods: {
    gotoTop() {
      console.log('gotoTop');
    },
    show(e) {
      let tag = e.target.children[1];
      tag.style.display = 'block';
    },
    hide({target}) {
      let tag = target.children[1];
      tag.style.display = 'none';
    }
  }
};
</script>

<style lang="sass">
$border: 1px solid #5d5d5d
.float-nav
  width: 52px
  position: fixed
  top: 60%
  right: 0

  ul
    background-color: #343434
    li
      position: relative

      img
        width: 100%
      
      .border-bot
        bottom: 0
        width: 50%
        margin: 0 auto
        border-bottom: $border

      .tag
        position: absolute
        display: none
        background: url('http://2.img.dianjiangla.com/assets/indexFloatNav/chang.png') no-repeat
        color: #fff
        width: 126px
        height: 46px
        right: 53px
        top: 10px
        padding-right: 10px
        text-align: center
        font-size: 1pc
        line-height: 46px      
</style>
