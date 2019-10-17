//重置token方法
import axios from "axios";

const resetToken = function(callback, obj, resolve){
  axios({
    method:'post',
    url:global.SERVER_NAME+"/auth/renewToken",
    withCredentials:true
  }).then(function (res) {
    console.log("Reset token response:")
    if(res.data.statusCode=="000000"){
      console.log("Reset token success，new token info：")
    }else if(res.data.statusCode=="811009"){
      console.log("No need to reset token.")
    }
    callback(obj).then((res)=>{
      resolve(res)
    })
  })
}
export {resetToken}