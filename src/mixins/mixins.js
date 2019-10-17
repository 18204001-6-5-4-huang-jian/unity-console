/**
 * Created by sunwd on 2018/9/28.
 * 定义混合对象
 */
import {
  Message
} from 'element-ui'
let mixin = {
  data() {
    return {
      startTime: '', // 开始时间
      endTime: '', // 结束时间
    }
  },
  methods: {
    /**
     * 获取权限
     */
    dialogAuth(dialogObj, name) {
      if (window.localStorage.getItem(name) == name) {
        dialogObj[name] = true
      } else {
        Message.error('抱歉，您没有该权限！')
      }
    },

    // 页面权限
    checkPageAuth(obj, pageName, btnData) {
      if (window.localStorage.getItem(pageName) == pageName) {
        obj[pageName] = true;
        if (obj[pageName] == true) {
          for (var i in btnData) {
            if (window.localStorage.getItem(i) == i) {
              btnData[i] = true;
            }
          }
        }
      } else {
        this.$failMsg(this, "对不起，您没有此页面的权限，请联系管理员.")
        window.history.go(-1)
        setTimeout(function () {
          this.$router.go(0)
        }, 200)

      }
    },

    // 返回上一页
    goBack() {
      this.$router.go(-1)
    },

    // 正确提示框
    $successMsg(obj, content, customDuration) {
      var successMsg = "操作成功."
      var durationValue = 3000
      if (content) {
        successMsg = content
      }
      if (customDuration) {
        durationValue = customDuration
      }
      obj.$message({
        message: successMsg,
        duration: durationValue,
        type: 'success'
      });
    },

    // 错误提示框
    $failMsg(obj, content, customDuration) {
      var failMsg = "失败"
      var durationValue = 3000
      if (content) {
        failMsg = content
      }
      if (customDuration) {
        durationValue = customDuration
      }
      if (obj) {
        obj.$message.error({
          message: failMsg,
          duration: durationValue,
          type: 'success'
        });
      }
    }

  }
}

export default mixin