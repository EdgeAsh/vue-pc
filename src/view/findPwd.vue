<template>
<div>
    <div class="main-top clearfix" style="overflow:visible;">
        <div class="logo">
            <a href="http://www.dianjiangla.com" class="over-hid">
                <img src="http://4.img.dianjiangla.com/assets/icon/logo-2.png" height="73">
            </a>
        </div>
    </div>
    <form id="form" autocomplete="off" disabled>
        <div class="login fainpwd">
            <div class="main verify">
                <div class="login-right">
                    <div class="content over-hid">
                        <!-- <div class="over-hid login-logo"><img src="/pub/images/min-logo.png"></div> -->
                        <p class="title">找回密码</p>
                        <div class="hr"></div>
                        <div class="over-hid login-input" style="margin-top:27px;">
                            <div class="input"><input name="tel" id="username" type="text" placeholder="手机号" v-model='phone' @blur="checkPhone" @focus="errMsg.phone = ''"></div>
                        </div>
                        <div class="verify-tishi"><label class="error username" for="username">{{errMsg.phone}}</label></div>
                        <div class="over-hid input-group hidden" id="codeImgWrapper">
                            <div style="overflow:hidden;">
                            <div class="input"><input name="code" id="code" type="text" placeholder="验证码"></div>
                            <div class="yzm"><img src="/common/piccode?r=1515902153419" id="codeImg"></div> <!-- 图形验证码 -->
                            </div>
                            <div class="verify-tishi  hidden" id="codeImgPoint"><label class="error code" for="code"></label></div>
                        </div>
                        
                        <div class="over-hid btn-group">
                            <div class="input"><input id="captcha" type="text" placeholder="短信验证码" v-model='verifyCode'  @blur="checkCode" @focus="errMsg.vCode = ''"></div>
                            <a class="btn rtn primary" href="javascript:;" @click='getCode' style='overflow: hidden'>获取验证码</a>
                        </div>
                        <div class="verify-tishi"><label class="error captcha" for="captcha">{{errMsg.vCode}}</label></div>
                        <div class="verify-tishi" id="verify-btn"></div>
                        <input name="type" type="hidden" value="1">
                        <input class="btn btn-next" id="submitBtn" type="button" value="下一步" :disabled="!next" @click='changPwd'>
                        <!-- <a class="btn" href="#">下一步</a> -->
                        <router-link class="btn-back" to="/login">返回登录注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
  },
  data() {
    return {
      codeBtnAvaliable: true,
      phone: null,
      verifyCode: null,
      errMsg: {
        phone: '',
        vCode: ''
      },
      next: false
    };
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
        btn.innerHTML = `${time}s后重新获取`;
        if (time <= 0) {
          clearInterval(timer);
          btn.innerHTML = '获取验证码';
          that.codeBtnAvaliable = true;
        }
      }, 1000);
      console.log(event, '这个是什么');
    },
    checkPhone() {
      // 检查电话信息
      let reg = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
      if (!reg.test(this.phone)) {
        this.errMsg.phone = '请输入正确手机号';
      } else {
        this.errMsg.phone = '';
      }
    },
    checkCode() {
      if (this.verifyCode.length !== 6) {
        this.errMsg.vCode = '请输入六位验证码';
        return;
      }
      this.errMsg.vCode = '';
      let tag = this.phone && !this.errMsg.vCode;
      if (tag) {
        // 如果电话号码与验证都有，下一步
        this.next = true;
      } else {
        this.next = false;
      }
    },
    async changPwd() {
      // 先确定验证码是否正确。然后带着电话和验证码去改
      let status = 200;
      let code = this.verifyCode;
      let phone = this.phone;
      try {
        let res = await axios.get('http://www.dianjiangla.com/common/verify_code', {params: {code}});
        status = res.status;
        console.log(res, '验证码正确与否');
      } catch (e) {
        console.log('出错了', e);
      }
      if (status === 200) {
        this.$router.push(`/resetpwd?phone=${phone}&code=${code}`);
      }
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
