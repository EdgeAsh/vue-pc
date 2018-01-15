<template>
<div>
  <div class="main-top clearfix" style="overflow:visible;">
    <div class="logo">
       <a href="http://www.dianjiangla.com" class="over-hid">
          <img src="http://4.img.dianjiangla.com/assets/icon/logo-2.png" height="73">
       </a>
    </div>
  </div>
  <div class="login reg zhuce">
    <div class="main verify">
      <div class="login-right">
        <form id="form1" method="post" novalidate="novalidate" autocomplete="off">
          <div class="content over-hid">
            <!-- <div class="over-hid login-logo"><img src="/pub/images/min-logo.png"></div> -->
            <p class="title">注&nbsp;&nbsp;册</p>
            <div class="login-type">
              <a class="btn btn-employer" @click='changeReType(0)' :class="{'ac': registerType === 0}">我是雇主</a>
              <a class="btn btn-designer" @click='changeReType(1)' :class="{'ac': registerType === 1}">我是设计师</a>
            </div>
            <div class="hr"></div>

            <div class="over-hid login-input" style="margin-top:27px;">
              <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: -63.5px -1px;"></div>
              <div class="input"><input ref="username" name="username" type="text" placeholder="请输入常用的手机号" maxlength="11" v-model='registerForm.userName'></div>
            </div>
            <div class="verify-tishi"><label id="msg-username" class="error" for="username">{{msgUserName}}</label></div>

            <div class="over-hid login-input">
              <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: 44px -1px;"></div>
              <div class="input"><input ref="password" name="password" type="password" placeholder="密码（6-20位字母、数字、无空格）" maxlength="20" onkeyup="value=value.replace(/\s/g,'')" v-model='registerForm.pwd'>
              </div>
            </div>
            <div class="verify-tishi"><label class="error" for="password">{{msgPwd}}</label></div>

            <div id="picverify" class="hid">
              <div class="over-hid input-group">
                <div class="input"><input ref="piccode" name="piccode" type="text" placeholder="验证码" maxlength="4" v-model='registerForm.code'></div>
                <div class="yzm"><img id="img-piccode" title="点击刷新"></div>
              </div>
              <div class="verify-tishi"><label class="error" for="piccode" id="msg-piccode"></label></div>
            </div>

            <div class="over-hid btn-group" style="border: none;overflow: visible;background: #fff;">
              <div class="input"><input ref="telcode" name="telcode" type="text" placeholder="输入6位动态码" maxlength="6" v-model='registerForm.telcode'></div>
              <a id="telcode-btn" class="btn rtn" @click='getVerifyCode'>获取验证码</a>
            </div>
            <div class="verify-tishi"><label class="error" for="telcode" id="msg-telcode"></label></div>
            <div class="regremark">
              <input ref="regremark" name="regremark" checked="" type="checkbox" v-model="validateState.legal">
              <label for="regremark">
                我已阅读 <a href="http://www.dianjiangla.com/rules?index=4" target="_blank">《点将啦服务协议》</a>
              </label>
            </div>
            <div class="verify-tishi"><label id="code-error" class="error" for="regremark"></label></div>
            <input id="setType" name="type" type="hidden" value="1">
            <div style="width: 100%;overflow: hidden;margin-top: 15px;">
            <!-- <input onclick="submitHandle(1)" id="reg-btn" class="btn" style="margin-top:11px;width: 45%;float: left;" value="雇主注册"> -->
            <!-- <input onclick="submitHandle(3)" class="btn" style="margin-top:11px;width: 45%;float: right;" value="设计师注册"> -->
            <input type="button" id="reg-btn" class="btn btn-login" value="注 册" @click='submit'>
            </div>
            <p class="zc">已有账号？<a href="http://www.dianjiangla.com/user/login">立即登录</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import '@/assets/css/user.css';
import axios from 'axios';
// import {qs} from 'axios';
// 注册，登录类型
const EMPLOYER = 0;
const DESINGER = 1;

const config = {
  method: 'POST',
  url: 'http://192.168.2.200:8081/mockjsdata/2/auth/register'
};

/*
登录注册流程：
  1，在本地检验合法性
  2，提交数据
*/
export default {
  props: {

  },
  data() {
    return {
      registerForm: {
        userName: null,
        pwd: null,
        checkPwd: null,
        telcode: null
      },
      validateState: {
        userName: false,
        pwd: 0, // 验证密码的状态，0，1,2
        telcode: false,
        legal: false
      },
      registerType: EMPLOYER // 注册类型，0是雇主，1是设计师
    };
  },
  methods: {
    getVerifyCode() {
      console.log('获取验证码');
    },
    async submit() {
      let state = this.validateState.userName && this.validateState.telcode && this.validateState.legal && (this.validateState.pwd === 2);
      console.log(state, 'state');
      if (state) {
        // console.log('submit'); 提交注册信息
        // 注册信息
        let data = {
          code: this.registerForm.telcode,
          phone: this.registerForm.userName,
          userName: 'default',
          password: this.registerForm.pwd
        };
        let req = Object.assign({}, config, {
          data});
        console.log(req);
        let ret = await axios(req);
        console.log(ret.data, '返回值');
      }
    },
    changeReType(type) {
      if (type === DESINGER) {
        this.registerType = DESINGER;
      }
      if (type === EMPLOYER) {
        this.registerType = EMPLOYER;
      }
    }
  },
  watch: { // 监控表单输入，及时判断
    'registerForm.userName'(cur) {
      // 判断手机号
      let reg = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
      console.log(reg.test(cur));
      if (!reg.test(cur)) {
        this.validateState.userName = false;
      } else {
        this.validateState.userName = true;
      }
    },
    'registerForm.pwd'(cur) {
      if (cur.length >= 6) {
        this.validateState.pwd = 2;
      } else if (cur.length < 6 && cur.length > 0) {
        this.validateState.pwd = 1;
      } else {
        this.validateState.pwd = 0;
      }
    },
    'registerForm.telcode'(code) {
      if (code && code.length === 6) {
        this.validateState.telcode = true;
      }
    }
  },
  computed: {
    msgUserName() {
      if (!this.validateState.userName) {
        return !this.registerForm.userName ? '' : '请输入正确手机号';
      }
      return '';
    },
    msgPwd() {
      let pwdCode = this.validateState.pwd;
      if (pwdCode === 0) {
        return '请输入密码';
      }
      if (pwdCode === 1) {
        return '密码必须大于六位';
      }
    }
  },
  components: {
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

