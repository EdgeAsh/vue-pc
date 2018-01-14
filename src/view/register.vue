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
                    <a class="btn btn-employer ac">我是雇主</a>
                    <a class="btn btn-designer">我是设计师</a>
                </div>
                <div class="hr"></div>

                <div class="over-hid login-input" style="margin-top:27px;">
                    <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: -63.5px -1px;"></div>
                    <div class="input"><input id="username" name="username" type="text" placeholder="请输入常用的手机号" maxlength="11" ></div>
                </div>
                <div class="verify-tishi"><label id="msg-username" class="error" for="username"></label></div>

                <div class="over-hid login-input">
                    <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: 44px -1px;"></div>
                    <div class="input"><input id="password" name="password" type="password" placeholder="密码（6-20位字母、数字、无空格）" maxlength="20" onkeyup="value=value.replace(/\s/g,'')">
                    </div>
                </div>
                <div class="verify-tishi"><label class="error" for="password"></label></div>

                <div id="picverify" class="hid">
                    <div class="over-hid input-group">
                      <div class="input"><input id="piccode" name="piccode" type="text" placeholder="验证码" maxlength="4"></div>
                      <div class="yzm"><img id="img-piccode" title="点击刷新"></div>
                    </div>
                    <div class="verify-tishi"><label class="error" for="piccode" id="msg-piccode"></label></div>
                </div>

                <div class="over-hid btn-group" style="border: none;overflow: visible;background: #fff;">
                    <div class="input"><input id="telcode" name="telcode" type="text" placeholder="输入6位动态码" maxlength="6"></div>
                    <a ref="telcode-btn" class="btn rtn" @click='getCode'>获取验证码</a>
                </div>
                <div class="verify-tishi"><label class="error" for="telcode" id="msg-telcode"></label></div>
                <div class="regremark">
                    <input id="regremark" name="regremark" checked="" type="checkbox">
                    <label for="regremark">
                        我已阅读 <a href="http://www.dianjiangla.com/rules?index=4" target="_blank">《点将啦服务协议》</a>
                    </label>
                </div>
                <div class="verify-tishi"><label id="code-error" class="error" for="regremark"></label></div>
                <input id="setType" name="type" type="hidden" value="1">
                <div style="width: 100%;overflow: hidden;margin-top: 15px;">
                <!-- <input onclick="submitHandle(1)" id="reg-btn" class="btn" style="margin-top:11px;width: 45%;float: left;" value="雇主注册"> -->
                <!-- <input onclick="submitHandle(3)" class="btn" style="margin-top:11px;width: 45%;float: right;" value="设计师注册"> -->
                <input type="submit" id="reg-btn" class="btn btn-login" value="注 册">
                </div>
                <p class="zc">已有账号？<router-link to='/login'>立即登录</router-link></p>
              </div>
            </form>
        </div>
    </div>
  </div>
</div>
</template>


<script>
import SelfFooter from '@/components/Footer.vue';
import '@/assets/css/user.css';
/*
登录注册流程：
  1，在本地检验合法性
  2，提交数据
  3, 根据返回的数据，跳转页面
*/
export default {
  props: {

  },
  data() {
    var validateUser = (rule, value, cb) => {
      var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g;
      if (value === '') {
        cb(new Error('请输入用户名'));
      } else if (!pattern.test(value)) {
        cb(new Error('请输入3-10个字母/汉字/数字/下划线'));
      } else {
        cb();
      }
    };
    var validatePwd = (rule, value, cb) => {
      var pattern = /^\S{3,20}$/g;
      if (value === '') {
        cb(new Error('请输入密码'));
      } else if (!pattern.test(value)) {
        cb(new Error('请输入3-20个非空白字符'));
      } else {
        if (this.registerForm.checkPwd !== '') {
          this.$refs.registerForm.validateField('checkPwd');
        }
        cb();
      }
    };
    var validateCheckPwd = (rule, value, cb) => {
      if (value === '') {
        cb(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pwd) {
        cb(new Error('两次输入密码不一致!'));
      } else {
        cb();
      }
    };
    return {
      registerForm: {
        userName: '',
        pwd: '',
        checkPwd: ''
      },
      registerRule: {
        userName: [
        { validator: validateUser, trigger: 'blur' }
        ],
        pwd: [
        { validator: validatePwd, trigger: 'blur' }
        ],
        checkPwd: [
        { validator: validateCheckPwd, trigger: 'blur' }
        ]
      },
      codeBtnAvaliable: true
    };
  },
  components: {
    SelfFooter
  },
  methods: {
    getCode(event) { // 获取验证码，设置interval倒计时
      // 判断按钮是否可用
      let that = this;
      if (!that.codeBtnAvaliable) return;
      that.codeBtnAvaliable = false;
      let btn = event.target;
      let time = 60;
      let timer = setInterval(function () {
        time--;
        btn.innerHTML = `${time}秒后重新获取`;
        if (time <= 0) {
          clearInterval(timer);
          btn.innerHTML = '获取验证码';
          that.codeBtnAvaliable = true;
        }
      }, 1000);
      console.log(event, '这个是什么');
    }
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

