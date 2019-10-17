<template>
  <div class="change-container">
    <div class='top'>
      <img src="../../assets/img/logo2.png" alt="logo" class="login-img">
      <p class="tips">为了数据安全，请您修改登录密码！</p>
      </div>
   <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
      <el-form-item label="输入手机验证码" prop="phoneCode">
        <el-input type="test" v-model.trim="ruleForm2.phoneCode" auto-complete="off"  placeholder="请输入手机验证码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPwd">
        <el-input type="password" v-model.trim="ruleForm2.newPwd" auto-complete="off"  placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input type="password" v-model.trim="ruleForm2.checkPass" auto-complete="off"  placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updatePsd('ruleForm2')">确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkPhone = (rule, value, callback) => {
            if (value && !(/^\d{4,6}$/).test(value)) {
                callback(new Error('请输入正确的手机验证码'))
            } else {
                callback();
            }
        };
      var validatePass = (rule, value, callback) => {
        if (value && !(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value))) {
            callback(new Error('请输入数字、英文6-20位组合，不区分大小写'))
          }
          callback();
      };
      var validatePass2 = (rule, value, callback) => {
        if (value && !(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value))) {
            callback(new Error('请输入数字、英文6-20位组合，不区分大小写'))
          }else if (value !== this.ruleForm2.newPwd) {
          callback(new Error('请输入相同的密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          newPwd: '',
          checkPass:'',
          phoneCode: ''
        },
        rules2: {
          phoneCode: [
            { required: true,message:'请查看手机短信，获取验证码' , trigger: 'blur' },
            { validator: checkPhone, trigger: 'blur' }
          ],
          newPwd: [
            { required: true,message:'新密码不能为空' , trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,message:'请再次输入密码' , trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
     mounted(){

    },
    methods: {
      updatePsd(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios_http({
              url: SERVER_NAME+'/auth/forceUpdateUserPwd',
              data: {
                loginName:this.$route.query.loginName,
                pwd:  window.sessionStorage.getItem('pwd'),
                newPwd:this.ruleForm2.newPwd,
                smsAuthCode: this.ruleForm2.phoneCode
              },
              vueObj: this
            }).then((res)=>{
              if(res.data.status == 'SUCCESS'){
                this.$message({
                  type:'success',
                  message:'修改密码成功',
                  duration:1000
                })
                setTimeout(function(){
                  that.$router.push('/')
                },1000)
              }            
            })
          } else {
            return false;
          }
        });
      },
      cancel(){
        this.$router.push('/')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.change-container{
  width:100%;
  height:100%;
  position:absolute;
  background: #fff;
  padding:180px 30px 30px;
  .top{
    width: 100%;
    img{
      width: 200px;
      margin: 0 auto;
      display: block;
    }
  }
  form{
    width: 500px;
    margin:0 auto;
    .yanzheng{
      width: 150px;
      margin-right:10px;
    }
  }
  .tips{
    color: red;
    text-align: center;
    margin:30px 0 15px;
  }
}
  
</style>
