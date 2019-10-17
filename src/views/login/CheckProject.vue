<template>
<div class="checkproject-container">
  <Navbar :imgShow="imgShow"></Navbar>
  <div class="conWrap">
    <div class="container_con">
      <el-row :gutter="50">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="block clearfix">
              <div class="blockImg fl">
                <img src="../../assets/img/item1.png" alt="">
              </div>
              <div class="blockTips fl">
                <div>
                  <div class="h4 h4_">国家重大公共卫生服务项目系统</div>
                  <div class='center'>
                      <p @click="openSelectProject('early_cancer_screening')"><i></i>城市癌症早诊早治项目</p>
                      <p class="gray"><i></i>淮河癌症早诊早治项目</p>
                      <p class="gray"><i></i>其他项目</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="graybg" v-if="projectShow.indexOf('early_cancer_screening')==-1"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="block" style="margin:0 auto;">
              <div class="blockImg fl">
                <img src="../../assets/img/item4.jpg" alt="">
              </div>
              <div class="blockTips fl">
                <div class="h4">肿瘤登记项目</div>
                  <div class='center'>
                    <!-- <p @click="openSelectProject('cancer_report')"><i></i>肿瘤发病上报入口</p> -->
                    <p>
                      <router-link :to="{path:'/cancersign'}" target="_blank">
                        <i></i>肿瘤发病上报入口
                      </router-link>
                    </p>
                    <p><i></i>肿瘤死亡上报入口</p>
                    <p><i></i>肿瘤监测数据查看</p>
                  </div>
              </div>
            </div>
            <div class="graybg" v-if="projectShow.indexOf('zl_sign')==-1"></div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="block clearfix">
              <div class="blockImg fl">
                <img src="../../assets/img/item3.jpg" alt="">
              </div>
              <div class="blockTips fl">
                <div class="h4">科研项目</div>
                  <div class='center'>
                      <p @click="openSelectProject('early_cancer_screening')"><i></i>肺癌和结直肠癌随机对照试验</p>
                      <p class="gray"><i></i>我的科研项目</p>
                  </div>
              </div>
            </div>
            <div class="graybg"  v-if="projectShow.indexOf('early_cancer_screening')==-1"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="block clearfix">
              <div class="blockImg fl">
                <img src="../../assets/img/item2.jpg" alt="">
              </div>
              <div class="blockTips fl">
                <div class="h4">数据智能管理分析系统</div>
                  <div class='center biCenter'>
                      <p style="cursor:pointer" @click="openBI('/')"><i></i>城市癌症早诊早治项目</p>
                      <p style="cursor:none;pointer-events:none;" class="gray"><i></i>淮河癌症早诊早治项目</p>
                      <p style="cursor:none;pointer-events:none;" class="gray"><i></i>肿瘤登记项目</p>
                  </div>
              </div>
            </div>
            <div class="graybg" v-if="projectShow.indexOf('bi_cancer')==-1"></div>
          </div>
        </el-col>
      </el-row>
      <!-- 选择角色弹窗 -->
      <CheckProject 
      :deptrole="deptrole" 
      :projectShow="projectShow"
      :dialogVisible="dialogVisible" 
      @closeDialog="closeDialog" 
      v-on:checkNum="checkNum"  
      v-on:deptroleThisFun="deptroleThisFun">
      </CheckProject>
    </div>
  </div>
</div>
</template>
<script>
import CheckProject from "@/views/layout/SelectProject.vue"
import { Navbar } from 'views/layout';
  export default {
    name: 'checkProject',
    data() {
      return {
        dialogVisible:false,
        projectShow:'',
        imgShow:true,   //logo
        deptrole:[],
        deptrole:[],   //弹窗角色
        deptNum:null,         //角色数量
        deptId_roleId:null    //角色拼接
      }
    },
    components:{
      CheckProject,
      Navbar
    },
    mounted(){
      this.projectShow = window.sessionStorage.getItem('project');
    },
    methods: {
      checkNum(val){
        this.deptNum=val;
      },
      deptroleThisFun(val){
        this.deptId_roleId=val
      },
      async openSelectProject(systemCode){
        //获取token
        let {data: {status, result}} = await this.$axios_http({
            url:SERVER_NAME+"/unity_console_server/token/getToken",
            data: {
              systemCode:systemCode
            },
            vueObj: this
          })

        this.getDeptrole(systemCode, result)
        // //获取下拉框
        // await this.$axios_http({
        //     url: SERVER_NAME_ZZZZ+"/base/auth/tokenlogin",
        //     data:result,
        //     vueObj: this
        //   }).then((res)=>{
        //     this.deptrole=res.data.result
        //     if(this.deptrole.length>1){
        //       this.dialogVisible=true;
        //     }else{
        //       //只有1个角色的无需弹窗
        //       if(this.deptrole){
        //           this.getResources()
        //       }
        //     }
        //   })
        sessionStorage.setItem('systemCode',systemCode)
      },

      // 获取下拉公共方法
      async getDeptrole(systemCode, result) {
        let _url = null
        if(systemCode === 'early_cancer_screening') {
          _url = SERVER_NAME_ZZZZ+"/base/auth/tokenlogin"
        } else if(systemCode === 'cancer_report') {
           _url = SERVER_NAME_SIGN+"/auth/tokenlogin"
        }

        await this.$axios_http({
            url: _url,
            data:result,
            vueObj: this
          }).then((res)=>{
            this.deptrole=res.data.result
            if(this.deptrole.length>1){
              this.dialogVisible=true;
            }else{
              //只有1个角色的无需弹窗
              if(this.deptrole){
                if(systemCode === 'early_cancer_screening') {
                  this.getResources()
                } else if(systemCode === 'cancer_report') {
                  this.getResourcesSign()
                }
                  
              }
            }
          })

      },

      // 早诊早治获取跳转地址
      async getResources() {
        let {data: {status, result}} = await this.$axios_http({
            url: SERVER_NAME_ZZZZ+"/base/system/find/resources",
            data: this.deptrole[0],
            vueObj: this
          })
        if(status == 'SUCCESS') {
          if(result.resourceAttr.menu.child[0].url=='/'){
            window.location.href=ZZZZ_URL+result.resourceAttr.menu.child[0].child[0].url
          }else{
            window.location.href=ZZZZ_URL+result.resourceAttr.menu.child[0].url
          }
        }
      },
      hasAuth(authName){
            localStorage.setItem(authName,authName)
      },
       //   关闭树弹窗
      closeDialog(val){
        this.dialogVisible=val;
      },

       // BI
      async openBI($url){
        //获取token
        let {data: {status, result}} = await this.$axios_http({
            url:SERVER_NAME+"/unity_console_server/token/getToken",
            data: {
              systemCode:'bi_cancer'
            },
            vueObj: this
          })

        //获取下拉框
        await this.$axios_http({
            url: SERVER_NAME_BI+"/auth/tokenlogin",
            data:result,
            vueObj: this
          }).then((res)=>{
            this.deptrole=res.data.result
            if(this.deptrole.length>1){
              this.dialogVisible=true;
            }else{
              //只有1个角色的无需弹窗
              if(this.deptrole){
                  // window.location.href=BI_URL+'/'
                  this.getResourcesBI($url)
              }
            }
          })
      },
      // 获取跳转地址
      async getResourcesBI($url) {
        let {data: {success, result}} = await this.$axios_http({
            url: SERVER_NAME_BI+"/system/find/resources",
            data: this.deptrole[0],
            vueObj: this
          })
        if(success) {
          window.open(BI_URL+$url,'_blank')
          // window.location.href=BI_URL+$url
        }
      },

      /**
       * 跳转肿瘤登记
       */

      // 跳转肿瘤登记
       async getResourcesSign() {
        let {data: {status, result}} = await this.$axios_http({
            url: SERVER_NAME_SIGN+"/system/find/resources",
            data: this.deptrole[0],
            vueObj: this
          })
        if(status == 'SUCCESS') {
          if(result.menu.child[0].url=='/'){
            window.location.href=SIGN_URL+result.menu.child[0].child[0].url
          }else{
            window.location.href=SIGN_URL+result.menu.child[0].url
          }
        }
      },
    },
    created() {
    },
    destroyed() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .checkproject-container{
     position: absolute;
     left: 0;
     top: 0;
     right: 0;
     bottom: 0;
     background: #ffffff;
  }
  .conWrap{
     position: absolute;
     left: 0;
     top: 66px;
     right: 0;
     bottom: 0;
     border-top: 1px solid #E9EDF0;
     background: url('../../assets/img/white_bg.png') no-repeat;
     background-size: 100% 100%;
     overflow: hidden;
     display: flex;
     justify-content: center;
     align-items: center;
  }
  .container_con {
    width: 1200px;
    h5 {
      font-size: 24px;
      color: #000;
      text-align: center;
      line-height: 1;
      margin-top: 95px;
      padding-bottom: 20px;
    }
    .tips {
      font-size: 16px;
      color: #5b5b5b;
      text-align: center;
      line-height: 30px;
    }
    .ico {
      position: relative;
      .el-icon-arrow-down {
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 50px;
      }
      .el-icon-arrow-down:before {
        color: #21a4ff;
      }
    }
    .el-row {
      margin: 40px auto;
    }

  }

  .block {
    width: 580px;
    height: 276px;
    background: #fff;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.07);
    .el-col {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    img {
      height: 276px;
      width: 317px;
    }

    .h4 {
      font-size: 18px;
      border-bottom: 1px solid #E8E8E8;
      line-height: 1;
      color: #000;
      margin: 18px 35px;
      padding-bottom: 18px;
    }
    .h4.h4_{
       margin: 18px 0px;
       margin-left: 4px;
    }
    p {
      padding-left: 55px;
      font-size: 14px;
      color: #333;
      line-height: 24px;
    }
    p.gray{
      color: #999;
      i{
        background: #aaa;
      }
    }
  }
.blockTips{
  width: 261px;
}
  .center {
    margin-top: 15px;
  }

  .center p {
    margin-bottom: 3px;
    position: relative;
    padding-left: 50px;
    height: 30px;
    line-height: 30px;
    i {
      position: absolute;
      width: 6px;
      height: 6px;
      background: #153451;
      border-radius: 50%;
      top: 50%;
      left: 35px;
      transform: translateY(-50%);
    }
  }
  .center p:nth-child(1):hover{
    background: #EAEEF1;
    cursor: pointer;
  }
  .biCenter p{
    // cursor: pointer;
    // pointer-events:none;
  }
  .grayTips{
    // position: relative;
    // background: rgba(6,6,6,0.40);
    // width: 261px;
    // height: 276px;
    h4{
      font-size: 20px;
      line-height: 1;
      color: #000;
      font-weight: normal;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%)
    }
  }
  .center p:nth-child(1):hover{
    background:none;
  }
  .block .grayTips .h4{
    border-bottom:1px solid #666;
  }
  .grid-content{
    position: relative;
  }
  .graybg{
    width: 580px;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
    top:0;
    left: 0;
  }
</style>

