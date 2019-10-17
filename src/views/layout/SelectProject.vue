<template>
    <el-dialog title="选择机构" :visible.sync="dialogVisible" :before-close="closeDialog" top="25vh">
        <el-select v-model="deptroleThis" placeholder="请选择机构" style="width:300px;">
          <el-option :value="item.deptId+','+item.roleId" :key="item.deptId+','+item.roleId" :label="item.deptName+'-'+item.roleName" v-for="item in deptrole" ></el-option>
        </el-select>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog" size="small">取 消</el-button>
          <el-button type="primary" @click="submit" size="small">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
  export default {
    props:["dialogVisible","deptrole",'projectShow'],
    data () {
      return {
        deptroleThis:null,
      }
    },
    watch:{
      projectShow: function(val){}
    },
    methods: {
      // 选择角色
      submit(){
        let deptId_roleId=this.deptroleThis;
        let _deptId=deptId_roleId.split(',')[0];
        let _roleId=deptId_roleId.split(',')[1];
        let obj;
        this.deptrole.filter(item=>{
          if(item.roleId==_roleId && item.deptId==_deptId){
            obj=item;
          }
        })
        //存入角色信息
        // if(this.projectShow.indexOf('bi_cancer')>-1) {
        //   this.getResourcesBI(obj)
        // }else if(this.projectShow.indexOf('early_cancer_screening')>-1) {
        //   this.getResourcesZZZ(obj)
        // }
        if(sessionStorage.getItem('systemCode') == 'early_cancer_screening') {
          this.getResourcesZZZ(obj)
        } else if(sessionStorage.getItem('systemCode') == 'cancer_report') {
          this.getResourcesSign(obj)
        }
      },

      getResourcesZZZ(obj) {
        // 早诊早治存储登录人的机构
         this.$axios_http({
          url: SERVER_NAME_ZZZZ+"/base/system/find/resources",
          data: obj,
          vueObj: this
        }).then((res)=> {
          if(res.data.status=="SUCCESS"){
            this.$emit('closeDialog',false);  
            if(res.data.result.resourceAttr.menu.child[0].url=='/'){
               window.location.href=ZZZZ_URL+res.data.result.resourceAttr.menu.child[0].child[0].url
             }else{
               window.location.href=ZZZZ_URL+res.data.result.resourceAttr.menu.child[0].url
             }
          }
        })
      },

      getResourcesSign(obj) {
        // 肿瘤登记存储登录人的机构
         this.$axios_http({
          url: SERVER_NAME_SIGN+"/system/find/resources",
          data: obj,
          vueObj: this
        }).then((res)=> {
          if(res.data.status=="SUCCESS"){
            this.$emit('closeDialog',false);  
            if(res.data.result.menu.child[0].url=='/'){
               window.location.href=SIGN_URL+res.data.result.menu.child[0].child[0].url
             }else{
               window.location.href=SIGN_URL+res.data.result.menu.child[0].url
             }
          }
        })
      },

      getResourcesBI(obj) {
        // BI存储登录人的机构
         this.$axios_http({
          url: SERVER_NAME_BI+"/system/find/resources",
          data: obj,
          vueObj: this
        }).then((res)=> {
          if(res.data.success){
            this.$emit('closeDialog',false);  
            window.location.href=BI_URL+'/'
          }
        })
      },

      hasAuth(authName){
            localStorage.setItem(authName,authName)
      },
      // 关闭弹窗
      closeDialog(){
        this.$emit('closeDialog',false);
      }
    }
  }
</script>