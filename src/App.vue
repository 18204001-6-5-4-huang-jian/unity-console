<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
  export default{
    name: 'APP'
  }
</script>

<style lang="scss">
 @import './assets/styles/reset.scss';
  #app{
  	overflow-x: hidden;
    /*background: #f7f7f7;*/
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  // 修改button样式
  .el-button--success{
    background:#40B982;
    &:hover{
      background:#40B982;
    }
  }
  .el-button--primary{
    background: #3989F8;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color: #3989F8;
        border-color: #3989F8;
  }
  // table
  .cell .el-button+.el-button{
    margin-left:0px;
  }
  .cell .el-button span{
    display:inline-block;
    min-width: 56px;
    padding:5px 4px;
    border-radius: 2px;
    background:#3989F8;
    color: #ffffff;
    font-size: 12px;
  }
  .cell .el-button.sure span{
    padding:5px 4px;
    border-radius: 2px;
    background:#67C23A;
    color: #ffffff;
    font-size: 12px;
  }
  //date-picker-range
  .el-date-editor .el-range-separator{
    padding:0;
  }
</style>
