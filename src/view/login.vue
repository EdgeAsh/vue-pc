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
                <Form ref="form1"  :model="loginInfo" :rules='loginRuler' @submit="login" disabled>
                    <div class="content over-hid">
                        <!-- <div class="over-hid login-logo"><img src="/pub/images/min-logo.png" ></div> -->
                        <p class="title">登&nbsp;&nbsp;录</p>
                        <div class="login-type">
                            <a class="btn btn-employer" :class="{'ac': type === 1}" @click="type = 1">我是雇主</a>
                            <a class="btn btn-designer" :class="{'ac': type === 2}" @click="type = 2">我是设计师</a>
                        </div>
                        <div class="hr"></div>
                        <FormItem prop='phone' class="login-input" style="margin-top:27px;">
                            <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: -63.5px -1px;"></div>
                            <div class="input"><Input name="username" type="text" placeholder="请输入常用的手机号" v-model='loginInfo.phone'></Input></div>
                        </FormItem>
                        <div class="verify-tishi"></div>
                        <Form-item prop='pwd' class="login-input">
                            <div class="icon" style="background: url(http://www.dianjiangla.com/pub/images/icon_group_login.png) top left;background-position: 44px -1px;"></div>
                            <div class="input"><Input name="password" type="password" placeholder="密码(6-20位字母、数字、无空格)" v-model="loginInfo.pwd" ></Input></div>
                        </Form-item>
                        <div class="verify-tishi"></div>
                        <div class="next">
                            <div class="checkbox"><input type="checkbox" id="autoNextLogin"><label class="auto-login" for="autoNextLogin">记住我</label></div>
                            <router-link to="/findpwd">忘记密码</router-link> 
                        </div>
                        <div class="verify-tishi"></div>
                        <input id="setType" name="type" type="hidden" :value="type">
                        <div style="width: 100%;overflow: hidden;margin-top: 10px;">
                        <input type="button" class="btn btn-login" value="登  录" @click='login'>
                        </div>
                        <p class="zc">还没有账号？<router-link to='/register' class="theme-color">立即注册</router-link></p>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    /**
     * @augments
     * arg1: 检验规则,是一个对象{validator, field, fullField, type}
     * arg2：输入框的值
     * arg3: 回调函数，该回调函数接受一个Error实例数组
     * arg4: 原(被检查的)对象
     * arg5: 可选项{firstFields:Boolean, messages: Object}
     */
    const validatePhone = (a1, a2, a3, a4, a5) => {
      let reg = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
      let errors = [];
      // console.log(a3, 'a4');
      if (!reg.test(a2)) {
        errors.push(new Error('请输入正确的号码'));
      }
      a3(errors);
    };
    return {
      loginRuler: {
        phone: [{
          required: true,
          message: '请填写电话号码',
          trigger: 'blur'
        },
        {
          validator: validatePhone,
          trigger: 'blur'
        }
        ],
        pwd: [{
          required: true,
          message: '请填写密码',
          trigger: 'blur'
        },
        {
          type: 'string',
          min: 6,
          message: '密码长度不能小于6位',
          trigger: 'blur'
        }]
      },
      type: 1,
      loginInfo: {
        phone: null,
        pwd: null
      }
    };
  },
  methods: {
    async login(event) {
      this.$refs.form1.validate((valid) => {
        let data = {
          username: this.loginInfo.phone,
          password: this.loginInfo.pwd,
          type: this.type
        };
        axios({
          url: '/api/auth/login',
          method: 'POST',
          data: data
        }).then((res) => {
          console.log(res);
        });
      });
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
