<template>
  <div>
    <div class="main main-top clearfix" style="overflow:visible;">
    <div class="logo">
       <a href="http://www.dianjiangla.com" class="over-hid">
          <img src="http://1.img.dianjiangla.com/assets/icon/logo-2.png" height="73">
       </a>
    </div>
    </div>
    <form id="form1" disabled method="post" novalidate="novalidate" autocomplete="off">
    <div class="login edit">
        <div class="main verify">
            <div class="login-right">
                    <div class="content over-hid">
                        <!-- <div class="over-hid login-logo"><img src="/pub/images/min-logo.png" ></div> -->
                        <p class="title">修改密码</p>
                        <div class="hr"></div>
                        <div class="over-hid login-input edit" style="margin-top:27px;">
                            <div class="input"><input type="password" id="password1" name="password1" placeholder="新密码" onkeyup="value=value.replace(/\s/g,'')" v-model="pwd"></div>
                        </div>
                        <div class="verify-tishi"><label class="error" for="password1"></label></div>
                        <div class="over-hid login-input edit">
                            <div class="input"><input type="password" name="password" placeholder="确认新密码" onkeyup="value=value.replace(/\s/g,'')"></div>
                        </div>
                        <div class="verify-tishi"><label class="error" for="password"></label></div>
                        <div class="verify-tishi" id="verify-btn"></div>
                        <div class="btn-group over-hid">
                            <input type="hidden" name="phone" value="">
                            <input type="hidden" name="code" value="">
                            <input class="btn btn-reset" type="button" value="重置" @click="reset">
                            <!--<a class="btn rtn" href="javascript:window.history.go(-1);">返回</a>-->
                            <router-link class="btn-back" to="/login">返回登录注册</router-link>
                        </div>
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
  data() {
    return {
      pwd: null
    };
  },
  mounted(le) {
    // 获取路由参数
    let {phone, code} = this.$route.query;
    console.log(le, 'mounted', this.$route.query);
  },
  methods: {
    async reset() {
      // 拿到东西去请求，然后跳转到登录页面
      // let {phone, code} = this.$route.query;
      // let pwd = this.pwd;
      // let res = await axios({url: 'www.baidu.com', data: {phone,code,pwd}});
      // 路由舔砖
      this.$router.push('/login');
    }
  }
};
</script>
