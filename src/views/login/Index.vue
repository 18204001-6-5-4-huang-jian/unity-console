<template>
  <div class="login-container">
    <div class="location" v-if="$location=='wh'">湖北站</div>
    <div class="login">
      <h1><img src="../../assets/img/login_logo.png" alt="logo" ></h1>
      <p class="tit">国家癌症防控信息管理平台</p>
      <p class='tit_en'>China Cancer Prevention and Control Platform</p>
      <el-form autoComplete="on" :model="loginForm" ref="loginForm" label-position="left" label-width="0px"
        class="card-box login-form">
          <el-form-item prop="loginName">
            <i class='ico1'></i>
            <el-input name="loginName" auto-complete="new-text" type="text" id="text" v-model="loginForm.loginName" placeholder="请输入用户名或手机号" @keyup.enter.native="handleLogin('loginForm')"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <i class='ico2'></i>
            <el-input name="pwd" auto-complete="new-password" :type="passwordType" v-model="loginForm.pwd" placeholder="请输入密码" @keyup.enter.native="handleLogin('loginForm')"></el-input>
             <i class='ico4' @click="showPwd"></i>
          </el-form-item>
          <el-form-item prop="capText">
            <i class='ico3'></i>
          <el-input name="capText" type="text"  v-model="loginForm.capText" autoComplete="on"
                    placeholder="图片校验码" @keyup.enter.native="handleLogin('loginForm')" class="yanzheng"></el-input>
          <span class="svg-container"  @click="changeImgUrl">
            <img id="codeImg" style="vertical-align:middle;height:40px;" alt="点击更换" title="图片验证" :src="imgUrl"/>
            </span>
        </el-form-item>
        <el-form-item class='loginBox'>
          <el-button type="primary" class='loginBtn' :loading="loading"  @click.native.prevent="handleLogin('loginForm')">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import mixin from '@/mixins/mixins'
  import Cookies from 'js-cookie'
  export default {
    name: 'login',
    mixins: [ mixin ],
    data() {
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      return {
        disabled:false,
        nickName:'',
        imgUrl:SERVER_NAME+'/auth/authCode/images',
        testCode:'获取验证码',
        loginForm: {
          loginName: '',
          pwd: '',
          capText: ''
        },
        loginRules: {
          loginName: [
            { required: true,message:'用户名不能为空' , trigger: 'blur' }
          ],
          pwd: [
            { required: true,message:'密码不能为空' , trigger: 'blur' }
          ],
          capText: [
            { required: true,message:'请填写图片验证码' , trigger: 'blur' }
          ]
        },
        loading: false,
        showDialog: false,
        hospitalType:'',
        passwordType:'password'

      }
    },
    mounted(){
      this.changeImgUrl();
      let inputelement = document.getElementById('text')
     inputelement.focus();
    //  后退停留在当前页面
     history.pushState(null, null, document.URL)
     window.addEventListener('popstate',function() {
       window.history.forward(1)
     },false)
    },
    methods: {
     handleLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios_http({
              url: SERVER_NAME+'/auth/login',
              data: {
                loginName: this.loginForm.loginName,
                pwd: this.loginForm.pwd,
                capText: this.loginForm.capText
              },
              vueObj: this
            }).then((res) => {
              if(res.data.result.firstLogin==1){
                this.$router.push({path:'/UpdatePassword',query:{loginName:this.loginForm.loginName}})
                window.sessionStorage.setItem('pwd',this.loginForm.pwd);
              }else{
                let {firstLogin, loginName, token, project, trueName} = res.data.result;
                window.sessionStorage.setItem('token',token);
                window.sessionStorage.setItem('loginName',loginName);
                window.sessionStorage.setItem('trueName',trueName);
                window.sessionStorage.setItem('project',project);
                if(res.data.status=="SUCCESS"){
                  this.$router.push('/checkproject')
                }
              }
            })
          }
        })
      },
    changeImgUrl(){
        var num=Math.ceil(Math.random()*10);
        this.imgUrl=SERVER_NAME+'/auth/authCode/images?'+num
      },
      showPwd(){
      if (this.passwordType === 'password') {
          this.passwordType = '';
        } else {
          this.passwordType = 'password';
        }
      }
     }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  $bg:#283443;
  .login-container {
    position:fixed;
    background-image: url(../../assets/img/new.jpg);
    background-size:cover;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
  }
  .location{
    font-size: 26px;
    color:#fff;
    position: fixed;
    top: 42px;
    left:70px;
    padding-left: 45px;
    background:url(../../assets/img/wuhan.png) 0 -2px no-repeat;
    background-size:40px 32px;
  }
   .login{
      width: 500px;
      height: 440px;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      h1{
        text-align: center;
        margin-bottom:24px;
        margin-top: 4px;
        img{
          width: 265px;
        }
      }
      .tit{
        font-size: 26px;
        font-weight:700;
        color:#eee;
        text-align: center;
        line-height: 1;
        margin-bottom: 12px;
      }
      .tit_en{
        font-size: 14px;
        letter-spacing:1px;
        color:#fff;
        text-align: center;
        line-height: 1;
        font-weight:200;
      }
      .el-input__inner{
        background:transparent;
        border:none;
        padding-left:48px;
        border-radius:0;
        color: #fff;
        font-size:16px;
        margin-top:2px;
        opacity: 0.9;
        &:-webkit-autofill{
          background-image: none;
        -webkit-box-shadow:0 0 0px 1000px #1e2736 inset;
        -webkit-text-fill-color: #ffffff;
        }
      }
      .yanzheng{
        width: 220px;
        float: left;
      }
      .svg-container{
        position: absolute;
        top: -2px;
        right: -232px;
        img{
          width: 108px;
        }
      }
      .el-input{
        position: relative;
      }
      .ico1{
          width:22px;
          height:22px;
          position: absolute;
          left:13px;
          top:8px;
          background: url(../../assets/img/user.png) no-repeat 100% 100% / 100% 100%;
      }
      .ico2{
          background: url(../../assets/img/pwd.png) no-repeat 100% 100% / 100% 100%;
          position: absolute;
          width: 18px;
          height: 18px;
          left: 15px;
          top: 10px;
      }
      .ico3{
          width:22px;
          height:22px;
          position: absolute;
          left:13px;
          top:8px;
          background: url(../../assets/img/safe.png) no-repeat 100% 100% / 100% 100%;
      }
      .ico4{
          width:18px;
          height:18px;
          position: absolute;
          right:15px;
          top:12px;
          background: url(../../assets/img/eye.png) no-repeat 100% 100% / 100% 100%;
          cursor: pointer;
      }
      .el-form-item{
        margin-bottom: 30px;
        border:1px solid #454545;
        background: rgba(0,0,0,0.1);
        color: #454545;
        &:nth-child(3){
          width: 200px;
          .el-input__inner{
            width:210px;
          }
          .inline-span{
            display:inline-block;
            float:right;
            width:100px;
            height: 40px;
            color: #fff;
            background: #283443;
            border-left:1px solid #454545;
            font-size: 0px;
          }
        }
        &:last-child{
          background:none;
        }
      }
      .el-form{
        width:432px;
        margin:50px auto 0;
      }
    }
  
    .loginBtn{
      width: 100%;
      border-radius:5px;
      font-size: 14px;
      background:#409eff;
      border:none;
      white-space: nowrap;
      color:#ffffff;
      font-weight:500;
      display:block;
    }
    .el-form-item__content{
      position: relative;
      }
      .el-form-item__content .ico1,.el-form-item__content .ico2,.el-form-item__content .ico3{
      position: absolute;
      top: 9px;
      left: 10px;
      z-index: 2;
      }

</style>