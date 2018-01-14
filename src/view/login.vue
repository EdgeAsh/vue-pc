<template>
<div>
    <div class="main-top clearfix" style="overflow:visible;">
        <div class="logo">
            <a href="http://www.dianjiangla.com" class="over-hid">
                <img src="http://4.img.dianjiangla.com/assets/icon/logo-2.png" height="73">
            </a>
        </div>
    </div>
    <div class="login">
        <div class="main verify">
            <div class="login-right">
                <form id="form1" method="post" novalidate="novalidate" autocomplete="off" @submit="login" disabled>
                    <div class="content over-hid">
                        <!-- <div class="over-hid login-logo"><img src="/pub/images/min-logo.png" ></div> -->
                        <p class="title">登&nbsp;&nbsp;录</p>
                        <div class="login-type">
                            <a class="btn btn-employer" :class="{'ac': type === 1}" @click="type = 1">我是雇主</a>
                            <a class="btn btn-designer" :class="{'ac': type === 2}" @click="type = 2">我是设计师</a>
                        </div>
                        <div class="hr"></div>
                        <div class="over-hid login-input" style="margin-top:27px;">
                            <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: -63.5px -1px;"></div>
                            <div class="input"><input id="username" name="username" type="text" placeholder="请输入常用的手机号" v-model='loginInfo.phone' @blur="checkPhone" @focus="validateMsg.phone = ''"></div>
                        </div>
                        <div class="verify-tishi"><label id="username-error" class="error" for="username">{{validateMsg.phone}}</label></div>
                        <div class="over-hid login-input">
                            <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: 44px -1px;"></div>
                            <div class="input"><input name="password" type="password" placeholder="密码(6-20位字母、数字、无空格)" v-model="loginInfo.pwd" @blur="checkPwd" @focus="validateMsg.pwd = ''"></div>
                        </div>
                        <div class="verify-tishi"><label id="password-error" class="error" for="password" style="display: block;">{{validateMsg.pwd}}</label></div>
                        <div class="next">
                            <div class="checkbox"><input type="checkbox" id="autoNextLogin"><label class="auto-login" for="autoNextLogin">记住我</label></div>
                            <router-link to="/findpwd">忘记密码</router-link> 
                        </div>
                        <div class="verify-tishi" id="verify-btn"></div>
                        <input id="setType" name="type" type="hidden" :value="type">
                        <div style="width: 100%;overflow: hidden;margin-top: 10px;">
                        <!-- <input onclick="submitHandle(1)" class="btn" style="margin-top:11px;width: 45%;float: left;" value="雇主登录"> -->
                        <!-- <input onclick="submitHandle(3)" class="btn" style="margin-top:11px;width: 45%;float: right;" value="设计师登录"> -->
                        <input type="button" class="btn btn-login" value="登  录" @click='login'>
                        </div>
                        <p class="zc">还没有账号？<router-link to='/register' class="theme-color">立即注册</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      type: 1,
      loginInfo: {
        phone: null,
        pwd: null
      },
      validateMsg: {
        phone: '',
        pwd: '',
        code: ''
      }
    };
  },
  methods: {
    async login(event) {
      // 拿到数据，发送到服务器
      let legal = !this.validateMsg.phone && !this.validateMsg.pwd && this.loginInfo.phone && this.loginInfo.pwd;
      // let res = null;
      if (legal) {
        // let data = {type: this.type, ...this.loginInfo};
        try {
          // res = await axios({
          //   url: 'https://www.baidu.com',
          //   method: 'post',
          //   data,
          //   headers: {
          //     'Content-Type': 'application/x-www-form-urlcoded'
          //   }
          // }); // 如果出错，就不会向下执行了
          this.$router.push('/');
        } catch (e) {
          console.log(e);
        }
      }
    },
    checkPhone() {
      // 检查电话信息
      let loginInfo = this.loginInfo;
      let reg = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
      if (!reg.test(loginInfo.phone)) {
        this.validateMsg.phone = '请输入正确手机号';
      } else {
        this.validateMsg.phone = '';
      }
    },
    checkPwd() {
      let loginInfo = this.loginInfo;
      if (loginInfo.pwd && loginInfo.pwd.length >= 6) {
        this.validateMsg.pwd = '';
      } else {
        this.validateMsg.pwd = '密码不规范';
      }
    }
  },
  computed: {
  },
  watch: {
  }
};
</script>


<style lang="sass">
.main-top
    margin: 0 auto
    width: 1200px
    height: 80px

    .logo
      width: 190px;
      margin-top: 3px

      a
        display: block
        width: 213px
        height: 73px

.login
  margin-bottom: 175px
  width: 100%
  min-width: 1280px
  height: 516px
  background: url('http://www.dianjiangla.com/pub/images/loginbg.png') center
  color: #666

  .main
    width: 1200px
    margin: auto
    overflow: hidden
</style>
