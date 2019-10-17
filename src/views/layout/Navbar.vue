<template>
  <div id="nav">
    <el-menu class="navbar" mode="horizontal">
      <div class="con clearfix">
        <img src="../../assets/img/logo_.png" alt="" class="logoSub" v-if="imgShow">
        <div :class="{'changesidebarMin':sidebar.opened,'changesidebarMax':sidebar.opened == false}" v-if="$route.fullPath != '/checkproject'">
          <!-- 缩放sider -->
          <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
          	<div class="line"></div>
          	<div class="logo">
			    	  <img src="../../assets/img/logo.png" alt="logo">
				    </div>
        </div>
        <div class="fr top">
          <!-- help -->
          <router-link to="/help/index" class="help" v-if="!imgShow"><span></span></router-link>
          <el-dropdown @command="handleCommand" v-if="deptNum>1">
            <span class="el-icon-setting"></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="role">切换角色</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="line-span"></span>
          <span class="avatar-wrapper" v-if="!deptNameChange">
            尊敬的 - {{loginName}}，您好
          </span>
          <span class="avatar-wrapper" v-if="deptNameChange">
            尊敬的{{deptNameChange | deptNameChangeFilter}} - {{loginName}}，您好
          </span>
           <span class="inline-span"></span>
          <span class='login-out' @click="logout"><i></i>&nbsp;退出</span>
        </div>
      </div>
    </el-menu>
    <!-- 选择角色弹窗 -->
    <CheckProject :dialogVisible="dialogVisible" @closeDialog="closeDialog" v-on:checkNum="checkNum"></CheckProject>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import CheckProject from "@/views/layout/SelectProject.vue"
  export default {
    props:['imgShow'],
    data() {
      return {
        dialogVisible:false,
        loginName:sessionStorage.getItem('loginName'),
        trueName:sessionStorage.getItem('trueName'),
        deptNum:null,         //角色数量
      }
    },
     components:{
      CheckProject,
    },
    computed: {
      ...mapState('common', ['deptNameChange']),
      sidebar(){
        return this.$store.state.common.sidebar
      }
    },
    mounted() {
    },
    methods: {
      handleCommand(command) {
        if(command=='role'){
          this.dialogVisible=true;
        }
      },
      checkNum(val){
        this.deptNum=val;
      },
        //   关闭树弹窗
      closeDialog(val){
        this.dialogVisible=val;
      },
      // 退出二次确认
      logout() {
        this.$confirm('您确认要退出登录吗？', '退出登录提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios_http({
            url: SERVER_NAME+"/auth/loginout",
            data: {},
            vueObj: this
          }).then((res) => {
            this.$router.push({path: "/"});
            window.localStorage.clear();
            window.sessionStorage.clear();
          })

        }).catch(function(err){
        });
      },
      toggleSideBar(){
          this.$store.dispatch('common/toggleSideBar');
      }
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu--horizontal{
  border:0;
}
  .navbar {
    width: 100%;
    height:64px;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 33;
    overflow-x: hidden;
    .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    margin-top: 10px;
    margin-right:10px;
    }
      .line{
        display:inline-block;
        width: 1px;
        height:20px;
        float: left;
        background: #E9EDF0;
        margin-top: 25.5px;
        margin-right: 8px;
      }
     .logo{
      display: inline-block;
      width: 257px;
      height: 26px;
      margin-top: 22px;
      img{
        width: 257px;
        height: 26px;
      }
    }
    .top{
      line-height: 64px;
      color: #666666;
      font-size: 14px;
      padding-right: 40px;
    }
    .changesidebarMin{
      height: 64px;
      width: 320px;
      margin-left: 200px;
      float: left;
    }
    .changesidebarMax{
       height: 64px;
       width: 320px;
      margin-left: 82px;
      float: left;
    }
    .login-out{
      cursor: pointer;
      i{
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url('../../assets/img/quit.png') no-repeat;
        background-size: 14px 14px;
        vertical-align: middle;
      }
      &:hover{
        color: #317ef7;
        i{
           background: url('../../assets/img/quit_active.png') no-repeat;
           background-size: 14px 14px;
        }
      }
    }
    .international{
      vertical-align: top;
    }
    .right-menu-item{
      display: inline-block;
      margin-right:8px;
    }
  }
  .navbar{
    border-right: none!important;
  }
  .navbar .con{
    position: relative;
    height: 64px;
    overflow-y: hidden;
  }
.logoSub{
  position: absolute;
  width: 295px;
  top: 20px;
  left: 40px;
  height: 26px;
}
.help{
  margin-right:12px;
  overflow: hidden;
  vertical-align: middle;
  span{
    display: inline-block;
    float:left;
    width: 18px;
    height: 18px;
    margin-top: 23px;
    background: url('../../assets/img/help.png') no-repeat;
    background-size: 18px 18px;
    cursor: pointer;
  }
}
.el-dropdown{
  font-size: 18px;
  vertical-align: middle;
}
.line-span{
  display: inline-block;
  width: 1px;
  height: 20px;
  vertical-align: middle;
  background: #E9EDF0;
  margin:0 10px;
}
.inline-span{
  display: inline-block;
  width: 1px;
  height: 20px;
  vertical-align: middle;
  background: #E9EDF0;
  margin:0 5px;
}
</style>


